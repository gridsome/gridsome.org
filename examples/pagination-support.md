---
title: Built-in Pagination
filepath: ~/pages/Blog.vue
filetype: vue
order: 5
---
```html
<template>
  <Layout>
    <ul>
      <!-- Loop data that will be paginated -->
      <li v-for="{ node } in $page.posts.edges" :key="node.id">
        {{ node.title }}
      </li>
    </ul>
    <!-- Add the pagination component -->
    <Pager :info="$page.posts.pageInfo"/>
  </Layout>
</template>

<script>
// Import the built-in Pager component.
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>

<page-query>
query Post ($page: Int) {
  posts: allPost (perPage: 10, page: $page) @paginate {
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
```
