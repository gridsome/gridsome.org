```html
<template>
  <Layout>
    <h1 v-html="$page.wordPressPost.title"/>
    <div v-html="$page.wordPressPost.fields.content"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  wordPressPost (path: $path) {
    title
    fields {
      content
    }
  }
}
</page-query>
```