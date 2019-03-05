```html
<!-- ~/templates/Post.vue -->

<template>
  <Layout>
    <h1 v-html="$page.post.title" />
    <div v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: Post (path: $path) {
    title
    content
  }
}
</page-query>

<style lang="scss">
  h1 { font-size: 32px }
</style>


```
