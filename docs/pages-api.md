# Pages API

The Pages API lets you create custom pages.

## Create a page

### `pages.createPage(options)`

##### Arguments

- options `object`
  - **path** `string` *Required.*
  - **component** `string` *Required.*
  - context `object` *Optional context for the page and `page-query`.*
  - queryContext `object`  *Optional context only for `page-query`.*

##### Usage

```js
module.exports = function (api) {
  api.createPages(pages => {
    pages.createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue'
    })
  })
}
```

## Page context

Each page can have a context which will be available as variables for `page-query`. The context will also be available in the page component as `$context`. If you only want the context to be available for `page-query`, use the `queryContext` option instead of `context`.

##### Example usage

```js
module.exports = function (api) {
  api.createPages(pages => {
    pages.createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue',
      context: {
        customValue: '...'
      }
    })
  })
}
```

Use the context in the page component or as variables in `page-query`::

```html
<template>
  <Layout>
    <h1>{{ $context.customValue }}</h1>
  </Layout>
</template>

<page-query>
query MyPage($customValue: String) {
  ...
}
</page-query>
```

## Example usage

### Create pages from nodes

````js
api.createPages(({ createPage }) => {
  const posts = api.store.getContentType('Post')

  posts.allNodes().forEach(node => {
    createPage({
      path: `${node.path}/reviews`,
      component: './src/templates/Post.vue',
      context: {
        id: node.id
      }
    })
  })
})
````

### Create pages from GraphQL

````js
api.createPages(async ({ graphql, createPage }) => {
  const { data } = await graphql(`
    query {
      allProduct {
        id
      }
    }
  `)

  data.allProduct.edges.forEach(edge => {
    createPage({
      path: `${edge.node.path}/reviews`,
      component: './src/templates/ProductReviews.vue',
      context: {
        id: edge.node.id
      }
    })
  })
})
````

### Create pages from external APIs

```js
api.createPages(async ({ createPage }) => {
  const { data } = await axios.get('https://api.example.com/posts')

  data.forEach(item => {
    createPage({
      path: item.path,
      component: './src/templates/Post.vue',
      context: item
    })
  })
})
```
