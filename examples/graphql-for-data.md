---
title: Build with Vue.js & GraphQL
filepath: src/pages/Blog.vue
filetype: vue
order: 1
---
```html
<template>
  <Layout>
  	<h1>My blog</h1>
   	<div v-for="{ node } in $page.allPost.edges" :key="node.id">
      <h3>{{ node.title }}</h3>
   	  <g-link :to="node.path">Read more</g-link>
   	</div>
  </Layout>
</template>

<!-- Query from local GraphQL data layer. -->
<page-query>
query {
  allPost {
    edges {
      node {
      	id
        title
        path
      }
    }
  }
}
</page-query>

```
