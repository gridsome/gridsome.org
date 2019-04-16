---
title: Add data to Vue with GraphQL
filepath: ~/pages/Blog.vue
filetype: vue
order: 4
---
```html
<template>
  <Layout>
  	<h1>Our blog</h1>
    <!-- Loop data -->
   	<div v-for="{ node } in $page.posts.edges" :key="node.id">
      <h3> {{ node.title }} </h3>
   	  <g-link :to="node.path">Read more</g-link>
   	</div>
  </Layout>
</template>

<!-- Query from a local GraphQL data layer.
Data is added to a $page object. -->
<page-query>
query Posts {
  posts: allBlogPost {
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
