```html
<!-- ~/templates/Post.vue -->
<template>
  <Layout>
    <h1 v-html="$page.post.title" />
    <div v-html="$page.post.content" />
    <PostMeta :post="$page.post" />
  </Layout>
</template>

<!-- Fetch data from local GraphQL data layer -->
<page-query>
query Post ($path: String!) {
  post: Post (path: $path) {
    title
    content
  }
}
</page-query>

<!-- Import Vue Components and add Vue.js scripting -->
<script>
import PostMeta from '~/components/PostMeta.vue'
export default {
  components: {
    PostMeta
  }
}
</script>

<!-- Component CSS will be merged into a global CSS file. -->
<style lang="scss">
  h1 { font-size: 32px }
</style>


```
