---
title: Built-in Pagination support
filepath: src/pages/Blog.vue
filetype: vue
order: 5
---
```html
<template>
  <Layout>
    <ul>
      <li v-for="{ node } in $page.allPost.edges" :key="node.id">
        {{ node.title }}
      </li>
    </ul>
    <!-- Add the pagination component -->
    <Pager :info="$page.allPost.pageInfo"/>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
// Import pagination component
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>
```
