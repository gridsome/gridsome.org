# Paginated queries

Use the `@paginate` directive in your GraphQL query to add automatic pagination for a list of source nodes. The query will receive a `$page: Int` variable you can use to load sources for a specific page. Default nodes per page is `25`.

## Paginated collections

Place the `@paginate` directive after the collection you want to paginate.

```graphql
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
```

## Paginated taxonomy pages

Place the `@paginate` directive after the `belongsTo` field you want to paginate.

```graphql
query Category ($page: Int) {
  category {
    title
    belongsTo (perPage: 10, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            id
            title
            path
          }
        }
      }
    }
  }
}
```

## Pager component

Gridsome has a built-in `Pager` component for easy pagination. Import it from `gridsome` in our components to use it. The component neads at least the `pageInfo.totalPages` and `pageInfo.currentPage` fields to render correctly.

#### Example usage

```html
<template>
  <Layout>
    <ul>
      <li v-for="edge in $page.allBlogPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
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
      }
    }
  }
}
</page-query>
```

#### Options

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
