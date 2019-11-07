---
title: Programmatically generate pages 
filepath: gridsome.server.js
filetype: js
order: 10
---
```js
// The Pages API lets you create pages without using GraphQL,
// and create pages programmatically 
const axios = require('axios')

module.exports = function (api) {
  api.createPages(async ({ createPage }) => {
    // Fetch data from any API
    const { data } = await axios.get('https://mystore.com/api')

    // Create pages from data
    data.forEach(product => {
      createPage({
        path: `/products/${product.slug}`, // Create route
        component: './src/templates/Product.vue',
        context: {
          id: product.id,
          title: product.title,
          price: product.price,
        }
      })
    })
  })
}
```

```html
<!-- /src/templates/Product.vue -->
<template>
  <div>{{ $context.id }}</div>
</template>
```