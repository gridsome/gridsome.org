# Pages API

The Pages API lets you create custom pages. This API is called after the GraphQL schema has been generated so you can query nodes and create pages from them or any other data.

Start by using the `api.createPages()` hook in `gridsome.server.js`:

```js
//gridsome.server.js
module.exports = function (api) {
  api.createPages(({ createPage, graphql }) => {
    // Create pages here
  })
}
```

## Create a page

Use the `createPages` hook if you want to create pages. Pages created in this hook will be re-created and garbage collected occasionally. Use the `createManagedPages` below to have more control over when pages are updated or deleted manually.

### createPage(options)

- options `object`
  - **path** `string` *Required.*
  - **component** `string` *Required.*
  - context `object` *Optional context for the page and `page-query`.*
  - queryVariables `object`  *Optional context only for `page-query`.*

```js
module.exports = function (api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue'
    })
  })
}
```

## Create managed pages

Pages created in the `createPages` hook will be re-created and garbage collected occasionally. That's why that hook is only able to create pages. You can use a `createManagedPages` hook to create, update and remove pages yourself.

```js
module.exports = function (api) {
  api.createManagedPages(({ createPage }) => {
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue'
    })
  })
}
```

### createPage(options)

- options `object`
  - **path** `string` *Required. Can be a fixed or dynamic route.*
  - **component** `string` *Required.*
  - context `object` *Optional context for the page and `page-query`.*
  - queryVariables `object`  *Optional context only for `page-query`.*

Create a new page.

### removePage(page)

Removes a page created by `createPage`.

### removePageByPath(path)

Removes a page matching the provided path.

### removePagesByComponent(path)

Removes all pages matching the provided component path.

### findAndRemovePages(query)

Removes all pages matching the provided query.

### findPages(query)

Returns all pages matching the provided query.

### findPage(query)

Returns first pages matching the provided query.

## The page context

Each page can have a context which will be available as variables for `page-query`. The context will also be available in the page component as `$context`. If you only want the context to be available for `page-query`, use the `queryVariables` option instead.

##### Example usage

```js
//gridsome.server.js
module.exports = function (api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue',
      context: {
        customValue: '...'
      }
    })
  })
}
```

Use the context in the page component or as variables in `page-query`.

```html
<template>
  <Layout>
    <h1>{{ $context.customValue }}</h1>
  </Layout>
</template>

<page-query>
query ($customValue: String) {
  ...
}
</page-query>
```

## Example usage

### Create pages from GraphQL

````js
//gridsome.server.js
module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allProduct {
        edges {
          node {
            id
            slug
          }
        }
      }
    }`)

    data.allProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.slug}/reviews`,
        component: './src/templates/ProductReviews.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
````

### Create pages from external APIs

We use `createManagedPages` in this example because we don't need the pages to be re-created on changes. The template also uses the context for rendering data instead of GraphQL results.

```js
//gridsome.server.js
module.exports = function (api) {
  api.createManagedPages(async ({ createPage }) => {
    const { data } = await axios.get('https://api.example.com/posts')

    data.forEach(item => {
      createPage({
        path: `/post/${item.slug}`,
        component: './src/templates/Post.vue',
        context: {
          title: item.title,
          content: item.content
        }
      })
    })
  })
}
```

```html
<template>
  <Layout>
    <h1>{{ $context.title }}</h1>
    <div v-html="$context.content"></div>
  </Layout>
</template>
```
