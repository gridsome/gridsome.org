```html
<template>
  <Layout>
    <h1 v-html="$page.post.title"/>
    <div v-html="$page.post.content"/>
  </Layout>
</template>

<page-query>
query WordPressPost ($path: String!) {
  post: wordPressPost (path: $path) {
    title
    content
  }
}
</page-query>
```
