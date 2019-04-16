---
title: Smart Templates
filepath: src/templates/Post.vue
filetype: vue
order: 4
---
```html
<template>
  <Layout>
    <!-- Create a .vue file in src/templates with the same name as 
    the GraphQL collection (typeName) to create a template. -->
    <h1 v-html="$page.post.title" />
    <div v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post (id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>


```
