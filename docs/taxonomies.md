# Taxonomy pages

Fields in the GraphQL schema can have references to other nodes. That's a great way to organize pages and have links between them. Each content type has a `belongsTo` field which has references to all nodes with a reference to it in any of its fields. The `belongsTo` field works like the [content type collections](/docs/querying-data#content-type-collections) with `totalCount`, `pageInfo` and `edges`. But the `edges` field is always a union type which can be any node type.

Read more about [referencing other nodes](/docs/data-store-api#referencing-other-nodes) if you haven't yet.



## Creating a taxonomy page

In this example we are going to create two content types, a `Post` and a `Tag` types. We do that in the `loadSource` hook in our `gridsome.server.js` file. The `Post` nodes will have a field named `tags` which will be an array of `Tag` ids. 

```js
api.loadSource(store => {
  const posts = store.addContentType('Post')
  const tags = store.addContentType('Tag')

  posts.addReference('tags', 'Tag')

  tags.addNode({ id: '1', title: 'The author' })

  posts.addNode({
    id: '1',
    fields: {
      tags: ['1']
    }
  })
}
```

Now, we create a file named `Tag.vue` in `src/templates` to have a template for our tag pages. Every tag page will have a list with posts which have a reference to it.

```html
<template>
  <Layout>
    <h1>{{ $page.tag.title }}</h1>
    <ul>
      <li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Tag ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        ...on Post {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
```

That's it! Tag pages now shows a list of posts and links to them.

## Paginated taxonomy pages

Place the `@paginate` directive after the `belongsTo` field to activate pagination. The query will have a `$page` variable available to pass into the `belongsTo` `page` argument.

```graphql
query Tag ($id: String!, $page: Int) {
  tag (id: $id) {
    title
    belongsTo (page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        ...on Post {
          id
          title
          path
        }
      }
    }
  }
}
```


## Arguments for `belongsTo`

| Argument | Default | Description |
|----------|---------|-------------|
| **sortBy** | `"date"` | Sort by a node field.
| **order** | `DESC` | Sort order (`DESC` or `ASC`).
| **perPage** | `25` | How many nodes to get.
| **skip** | `0` | How many nodes to skip.
| **page** | `1` | Which page to get.
| **filter** | `{}` | Filter nodes by `id`, `path` or `typeName`.
