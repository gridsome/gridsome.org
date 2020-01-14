---
title: Taxonomy pages
filepath: src/templates/Tag.vue
filetype: vue
order: 5
---
```html
<template>
  <Layout>
    <!-- Creates a template for a "Tag" that 
    lists all post with same tag -->
    <h1>{{ $page.tag.title }}</h1>
    <ul>
      <li v-for="edge in $page.tag.belongsTo.edges"
      :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
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
</page-query>

```
