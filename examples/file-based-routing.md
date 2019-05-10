---
title: File-based page routing
filepath: src/pages/HelloWorld.vue
filetype: vue
order: 3
---
```html
<template>
  <Layout>
    <!-- Any .vue file in /src/pages will be a route. -->
    <!-- This page will be 'mysite.com/hello-world' -->
  	<h1>Hello World!</h1>
  </Layout>
</template>

<script>
export default {
  // Use vue-meta to add & customize meta tags
  metaInfo: {
    title: 'Hello World'
  }
}
</script>
