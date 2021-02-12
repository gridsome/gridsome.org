# Add External Scripts

It is really easy to use any external or third-party JavaScript with Gridsome. Since Gridsome is built on Vue, any method of importing external scripts in Vue works out-of-the-box with Gridsome.

## Add to Components

### Using an external Vue Plugin

If you want to use external Vue plugins inside your component without defining it globally, you can do so by importing the package inside your component and registering it for your component.

Example:
```html
<template>
  <Carousel>
    <Slide />
    <Slide />
  </Carousel>
</template>

<script>
import {Carousel,Slide} from 'vue-carousel'

export default {
  data() {
    return { /* data properties here */ }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>
```

### Using an external library

If you want to use a external JavaScript library inside your component, you can do so by importing the package and requiring it once the Vue components are mounted.

Example:
```html
//MyComponent.vue
<template>
  <div v-if="theTime">
    {{ theTime }}
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      theTime: false
    }
  },
  mounted() {
    this.theTime = 'The time is ' + moment().format("HH:mm")
  }
}
</script>
```

## Add globally

If you want scripts to be globally available you can add them to `src/main.js`.

**Note:** Avoid injecting dependencies globally, and use it only if really necessary. Injecting locally into components is considered a better practice for code splitting.

### Using an external Vue Plugin

To use any external Vue plugin with Gridsome, just import the required plugin and pass the it to Vue using `Vue.use` inside your main.js file:

```javascript
//main.js

import DefaultLayout from '~/layouts/Default.vue'
import VueTypedJs from 'vue-typed-js'


export default function (Vue) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  //Use VueTypedJs plugin inside our project
  Vue.use(VueTypedJs)

}
```

In this example we are importing the `VueTypedJs` plugin inside our Gridsome project.

### Using an external library

To use any external library on our Gridsome project, you may proxy it to a property of the Vue prototype object. Since all components inherit their methods from the Vue prototype object this will make your external library or libraries automatically available across any and all components with no global variables or anything to manually import.

Example:
```javascript
//main.js

import DefaultLayout from '~/layouts/Default.vue'
import moment from 'moment';


export default function (Vue) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  //Use Moment.Js library inside our project
  Vue.prototype.$moment = moment
}
```

In this example we have imported moment.js library into our project, now you may use the library in any page:

```javascript
export default {
  mounted() {
    console.log('The time is ' . this.$moment().format("HH:mm"))
  }
}
```

Note: You could do it this way, but by using `Object.defineProperty` instead we are able to define our property with a descriptor. A descriptor allows us to set low-level details such as whether or not our property is writable and whether it shows up during enumeration in a `for` loop and more.

Properties created with a descriptor are immutable by default. Some coffee-deprived developer won't be able to do something silly like this in a component and break everything:

```javascript
this.$http = 'Assign some random thing to the instance method';
this.$http.get('/'); // TypeError: this.$http.get is not a function
```

Instead, our immutable instance method protects our library, and if you attempt to overwrite it you will get a `TypeError: Cannot assign to read only property`.

So you can proxy your library to `VuePrototype` using `Object.defineProperty` in the following way:

```javascript
//src/main.js

import DefaultLayout from '~/layouts/Default.vue'
import moment from 'moment';


export default function (Vue) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  //Use Moment.Js library inside our project
  Object.defineProperty(Vue.prototype, '$moment', {
    value: moment
  });
}
```

## Without SSR support

`gridsome build` uses server-side rendering (SSR) to create a fully rendered page. If your Vue component does not support SSR or an external library (such as `jQuery`) changes the `DOM` element it won't be rendered properly. For these type of components, we suggest you to encapsulate the component inside `<ClientOnly></ClientOnly>` tags and import the library inside Vue's `mounted()` handler.

For example, to use `vue-carousel` (that does not yet support SSR) you can do the following:

```html
<template>
  <Layout>
    <ClientOnly>
      <carousel :perPage="1">
        <slide>
          Hello World
        </slide>
        <slide>
          Gridsome is awesome
        </slide>
      </carousel>
    </ClientOnly>
  </Layout>
</template>

<script>
  export default {
    name: 'Index',
    components: {
      Carousel: () =>
        import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
      Slide: () =>
        import ('vue-carousel')
        .then(m => m.Slide)
        .catch()
    },
  }
</script>
```

This will stop SSR from rendering the component, and component is displayed after the Vue components are mounted.

In the same way, you can use any external library that causes issues in server side rendering like `jQuery`:

```html
<template>
  <Layout>
    <div class="landing-page">
    </div>
  </Layout>
</template>

<script>
  // import $ from 'jquery'; //import it inside main.js
  
  export default {
    name: 'Index',
    mounted() {
      //require our external library and load it in window
      window.owl = require('owl-carousel')
      window.$ = require('jquery')
  
      // This works now
      $('.some-carousel').owlCarousel()
  
    }
  }
</script>
```

**Note:** You should avoid using external libraries like `jQuery` that manipulate the DOM and try using a Vue Plugin instead.
