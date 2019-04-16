---
title: Create Pages from data
filepath: gridsome.server.js
filetype: js
order: 10
---
```js
module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    // Query data from local GraphQL data layer
    const { data } = await graphql(`
      query {
        allProduct {
          id
        }
      }
    `)

    // Create pages from data
    data.allProduct.edges.forEach(edge => {
      createPage({
        path: `${edge.node.path}/reviews`, // Create route
        component: './src/templates/ProductReviews.vue',
        context: {
          id: edge.node.id
        }
      })
    })
  })
}
```

```html
<!-- /src/templates/ProductReviews.vue -->
<template>
  <div>
    {{ $context.id }}
  </div>
</template>
```