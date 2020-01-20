# Templates

Templates are used to create single pages for nodes in a [collection](/docs/collections/). This can, for example be template for blog posts, author pages, etc.

**To setup a template you need to have:**

1. A **template route** defined in `gridsome.config.js`.
2. A **template component** that is usually located in `src/templates`.



## Template routes
**Template routes** generates paths to Templates. The **path** generated will be available in the GraphQL schema.

### Setup a template route
The example below shows you how to setup route and template for a [collection](/docs/collections/) named `Post`. A component located at `src/templates/Post.vue` will be used.

```js
// gridsome.config.js
module.exports = {
  templates: {
    Post: '/blog/:year/:month/:title',
  }
}
```

🔥 Gridsome automatically tries to locate the **template component** for a [Collection](/docs/collections) for defined routes. For example `templates: { Post: '/blog/:title' }` will look for and use `src/templates/Post.vue`.


### Use custom template component

Use the `component` option to link to a custom component.

```js
// gridsome.config.js
module.exports = {
  templates: {
    Post: [
      {
        path: '/blog/:year/:month/:title',
        component: './src/other/location/Post.vue'
      }
    ]
  }
}
```

### Use multiple template routes.

```js
// gridsome.config.js
module.exports = {
  templates: {
    Product: [
      {
        path: '/product/:slug',
        component: './src/templates/Product.vue'
      },
      {
        name: 'reviews',
        path: '/product/:slug/reviews',
        component: './src/templates/ProductReviews.vue'
      }
    ]
  }
}
```

Template paths are available in the GraphQL schema with a `path` field. Use a `to` argument for getting paths to additional templates for a collection.

```graphql
query ($id: ID!) {
  product(id: $id) {
    path               # path to the default template
    path(to:"reviews") # path to the reviews template
  }
}
```

### Template route options

- **path** - Define a dynamic route and use any node field as parameters.
- **component** - Specify a component to use as template for each page.
- **name** - Specify a name for the template to get the path in GraphQL.

Path parameters are slugified by default, but the original value can be used by adding a `_raw` suffix, eg. `:title_raw`. Access values in deep objects or arrays by separating properties or indexes with double underscores (`__`). The `date` field has a set of shorthand helpers; `:year`, `:month` and `:day`.

- `:id` resolves to `node.id`
- `:value` resolves to `node.value` *(slugified value)*
- `:value_raw` resolves to `node.value` *(original value)*
- `:object__value` resolves to `node.object.value`
- `:array__3__id` resolves to `node.array[3].id`

The `path` option can be a function, which receives the node as the first argument and returns a path.

```js
// gridsome.config.js
module.exports = {
  templates: {
    Post: [
      {
        path: (node) => {
          return `/product/${node.slug}/reviews`
        }
      }
    ]
  }
}
```

Each node will get a `path` field in the GraphQL schema which contains the generated URL.


### Template routes in GraphQL

Template routes are available in the GraphQL schema with a `path` field. Use a `to` argument for getting paths to additional templates for a collection.

```graphql
query Product ($id: ID!) {
  product(id: $id) {
    path               # path to the default template
    path(to:"reviews") # path to the reviews template
  }
}
```

## Template components

**Template components** are what displays the data for a single node.

Pages generated from the `templates` configuration will have the node `id` available as a [query variable](https://graphql.org/learn/queries/#variables) in the `page-query` block. Use the `$id` variable to get the node for the current page:


### Setup a template component

The example below shows a Template component that gets a single node from a `Post` collection by using a `$id` node field.

```html
<template>
  <div>
    <h1 v-html="$page.post.title" />
    <div v-html="$page.post.content" />
  </div>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
  }
}
</page-query>
```

**Other node fields are also available as query variables.** Access values in deep objects or arrays by separating properties or indexes with double underscores (`__`).

- `$id` resolves to `node.id`
- `$value` resolves to `node.value`
- `$object__value` resolves to `node.object.value`
- `$array__3__id` resolves to `node.array[3].id`

### Node fields as meta info

The `metaInfo` option must be a function in order to access the query results:

```html
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
```

## Linking to a template

Linking to templates are usually done from a **query loop** like blog post listing. This is easy since template routes are added to the GraphQL schema with a `path` field. Here is an example:

```html
<!-- src/pages/Blog.vue -->
<template>
  <div>
    <div v-for="{node} in $page.allPost.edges" :key="node.id">
      <h3>{{ node.title }}</h3>
      <g-link :to="node.path">Link to Post</g-link>
    </div>
  </div>
</template>

<page-query>
query {
  allPost {
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
