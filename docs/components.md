# Components

Gridsome uses Vue Single File Components. This means you add HTML, JavaScript and CSS all in the same file. This makes your projects easier to maintain and test and your components more reusable. You also get **code-splitting** out-of-the-box.

Here is an example of a Single File Component file.


```html
<template>
  <div class="card">
    {{ reactiveData }}
    <button @click="clickMe">Change</button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      reactiveData: 'Try change me!'
    }
  },
  metohds: {
    clickMe() {
      this.reactiveData = 'Here you go :)'
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

### Import to other Pages or Components
When you have created a component you can easily import into your pages. In Gridsome projects it's recommended to put all your .vue components in the **src/components** folder and import them into Pages or Layouts like this:

```html
<template>
  <Card />
</template>

<script>
import Card from '@/components/card'
export default {
  components: {
    Card
  }
}
</script>

```

### Add GraphQL to Components

Every **Component** can have a `<static-query>` block with a GraphQL query
to fetch data from data sources. The results will be stored in a
`$static` property inside the component.

```html
<template>
  <div v-html="$static.example" />
</template>

<static-query>
query Example {
  example: examplePage (path: "/docs/example") {
    content
  }
}
</static-query>

```


### Add Sass to .vue files

You can use Sass in your Single File Components.
Install <br> `npm install -D sass-loader node-sass` to your project and use it like this:

```html
<style lang="scss">
.card {
  background:#FFF;

  &__inner {
    padding: 20px;
  }
}
</style>
```

[Learn more about using Using Pre-Processors in Vue.js](https://vue-loader.vuejs.org/guide/pre-processors.html)



### Scoped styles

Its very easy to add scoped styles in vue. Simple add "scoped" to the style tag to automatically add suffix to any CSS class in Markup. This means that styles here will only be applied to current component regardless of the class names you use.


```html
<style scoped>
.card {
  background:#FFF;
}
</style>
```

This will change the .card class in current component automatically to f.ex **.card[x5u123sc5s1]** and only apply style to that class.

[Learn more about Scoped styles in Vue](https://vue-loader.vuejs.org/guide/scoped-css.html)
