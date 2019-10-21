# Taxonomy pages

Fields in the GraphQL schema can have references to other nodes. That's a great way to organize pages and have links between them. Every node has a `belongsTo` field which is able to list all other nodes referencing it. The `belongsTo` field works like the [collections](/docs/querying-data#querying-collections) with `totalCount`, `pageInfo` and `edges`, but the `edges` field is always a [union field](https://graphql.org/learn/schema/#union-types) which can be any node type.

Read more about [referencing other nodes](/docs/data-store-api/#referencing-other-nodes) if you haven't yet.

## Creating a taxonomy page

In this example we are going to create two collections, a `Post` and a `Tag` types. We do that in the `loadSource` hook in our `gridsome.server.js` file. The `Post` nodes will have a `tags` field which will be an array of `Tag` ids.

```js
api.loadSource(actions => {
  const posts = actions.addCollection('Post')
  const tags = actions.addCollection('Tag')

  // makes all ids in the `tags` field reference a `Tag`
  posts.addReference('tags', 'Tag')

  tags.addNode({
    id: '1',
    title: 'The author'
  })

  posts.addNode({
    id: '1',
    title: 'A post',
    tags: ['1']
  })
}
```

Now, we create a `Tag.vue` file in `src/templates` to have a template for our tag pages. Every tag page will have a list with posts which have a reference to it.

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
query ($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
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

That's it! The tag page above will show a list of posts with links to them.

## Paginated taxonomy pages

Place the `@paginate` directive after the `belongsTo` field to activate pagination. The query will have a `$page` variable available to pass into the `belongsTo` `page` argument.

```graphql
query ($id: ID!, $page: Int) {
  tag(id: $id) {
    title
    belongsTo(page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Post {
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

## Arguments for `belongsTo`

| Argument | Default | Description |
|----------|---------|-------------|
| **sortBy** | `"date"` | Sort by a node field.
| **order** | `DESC` | Sort order (`DESC` or `ASC`).
| **sort** | | Sort by multiple node fields.
| **skip** | `0` | How many nodes to skip.
| **limit** | | How many nodes to get.
| **page** | | Which page to get.
| **perPage** | | How many nodes to show per page. Omitted if no `page` argument is provided.
| **filter** | `{}` | Filter nodes by `id` or `typeName`.
