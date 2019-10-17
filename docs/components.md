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

## Import to other pages or components
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

## Use components for page layouts

Creating **layout components** are useful if you need to, for example, keep a sidebar across multiple pages.
Here is an example on how to create and use it:

```html
<!-- src/components/SidebarLayout.vue -->
<template>
  <div>
    <div class="sidebar"> This is a sidebar </div>
    <div class="content"><slot /></div>
  </div>
</template>

```

Then use import it to any Page likes this:

```html
<!-- src/pages/Example.vue -->
<template>
  <SidebarLayout>
      This is the page content with a sidebar!
  </SidebarLayout>
</template>

<script>
import SidebarLayout from '~/components/SidebarLayout.vue'
export default {
  components: {
    SidebarLayout
  }
}
</script>
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
query Post {
  post (id: "1") {
    content
  }
}
</static-query>

```
