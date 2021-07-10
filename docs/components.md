# Components

Gridsome uses [Vue Single File Components] (https://vuejs.org/v2/guide/single-file-components.html). This means you add HTML, JavaScript and CSS in the same file. This makes your projects easier to maintain and test and your components more reusable. This is also used for **code-splitting** in the build process.

Here’s an example of a file we’ll call `Card.vue` inside `src/components/`:

```html
<template>
  <div class="card">
    {{ message }}
    <button @click="onClick">
      Change
    </button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>

<style>
.card {
  padding: 20px;
  background: #FFF;
}
</style>

```

[Learn more about Single File Components](https://vuejs.org/v2/guide/single-file-components.html)

## Import to other Pages or Components

When you have created a component you can easily import it into your pages. In Gridsome projects it's recommended to put all your .vue components in the **src/components** folder and import them into **Pages** or **Layouts** like this:

```html
<template>
  <Card />
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>

```

## Make a Component global
If you want a Component to be used anywhere without importing it per page you can make it global in `src/main.js`.

```javascript
// src/main.js

import MyComponent from '~/components/MyComponent.vue'

export default function (Vue, { head, router, isServer }) {
  Vue.component('MyComponent', MyComponent)
}
```


## Add GraphQL to Components

Every **Component** can have a `<static-query>` block with a GraphQL query
to fetch data from data sources. The results will be stored in a
`$static` property inside the component.

```html
<template>
  <div v-html="$static.post.content" />
</template>

<static-query>
query {
  post (id: "1") {
    content
  }
}
</static-query>

```
