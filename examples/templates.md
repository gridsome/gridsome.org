```html
<!-- /template/Post.vue -->

<template>
  <Layout>
    <h1 v-html="$page.post.title" />
    <div v-html="$page.post.content" />
    <PostMeta :post="$page.post" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: Post (path: $path) {
    title
    content
    date
    author
  }
}
</page-query>

<script>
import PostMeta from '~/components/PostMeta.vue'

export default {
  components: {
    PostMeta
  }
}
</script>

<style lang="scss">
  h1 { font-size: 32px }
</style>


```
