# Pagination

Use the `@paginate` directive in your GraphQL query to add pagination for a list of source nodes. The query will receive a `$page` variable you can use to load sources for a specific page.

```html
<template>
  <Layout>
    <ul>
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <h2>{{ node.title }}</h2>
        <g-link :to="node.path">Read more</g-link>
      </li>
    </ul>
    <Pager :info="$page.allBlogPost.pageInfo"/>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>

<page-query>
query Blog ($page: Int) {
  allBlogPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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

|Property         |Default| |
|-----------------|-------|-|
|info             |*required* |Page info from GraphQL result with *totalPages*
|showLinks        |true |Show navigation links
|showNavigation   |true |Show previous and next links
|linkClass        ||Add custom classes to the links
|firstLabel       |«
|prevLabel        |‹
|nextLabel        |›
|lastLabel        |»
|ariaLabel        |Pagination Navigation
|ariaLinkLabel    |Go to page %n
|ariaFirstLabel   |Go to first page
|ariaCurrentLabel |Current page. Page %n
|ariaPrevLabel    |Go to previous page. Page %n
|ariaNextLabel    |Go to next page. Page %n
|ariaLastLabel    |Go to last page. Page %n
