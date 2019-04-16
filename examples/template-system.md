---
title: Smart Templates
filepath: ~/templates/BlogPost.vue
filetype: vue
order: 4
---
```html
<template>
  <Layout>
    <!-- Create a .vue file in src/templates with
    the same name as the GraphQL collection (typeName)
    to create a template. For example this file is named 
    "BlogPost.vue" and will be used as template for posts in
    "BlogPost" GraphQL collection -->
    <div v-html="$page.post.content">
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post: BlogPost (id: $id) {
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
