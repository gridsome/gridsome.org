# Querying data

You can query data from the GraphQL data layer into any **Page, Template or Component**. Queries are added with a `<page-query>` or `<static-query>` block in Vue Components.

- Use `<page-query>` in **Pages & Templates**.
- Use `<static-query>` in **Components**.

## How to query with GraphQL

Working with GraphQL in Gridsome is easy and you don't need to know much about GraphQL. Here is an example of how to use GraphQL in `page-query` for a page:

```html
<template>
  <div>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
    </div>
  </div>
</template>

<page-query>
query {
  posts: allWordPressPost {
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

**With GraphQL you only query the data you need.** This makes it easier and more tidy to work with data. A query always starts with `query` and then something like `Posts` *(Can be anything)*. Then you write something like `posts: allWordPressPost`. The `allWordPressPost` is the name of the GraphQL collection you want to query. The `posts:` part is an optional alias. When using `posts` as alias, your data will be available at `$page.posts` (or `$static.posts` if you use `<static-query>`). Otherwise it will be available at `$page.allWordPressPost`.

[Learn more about GraphQL queries](https://graphql.org/learn/queries/)

## Querying collections

You will notice that some of the root fields in your schema are prefixed with `all`. Use them to get lists of nodes in a collection.

| Argument | Default | Description |
|----------|---------|-------------|
| **sortBy** | `"date"` | Sort by a node field.
| **order** | `DESC` | Sort order (`DESC` or `ASC`).
| **sort** | | Sort by multiple node fields.
| **skip** | `0` | How many nodes to skip.
| **limit** | | How many nodes to get.
| **page** | | Which page to get.
| **perPage** | | How many nodes to show per page. Omitted if no `page` argument is provided.
| **filter** | `{}` | [Read more](/docs/filtering-data/).

#### Find nodes sorted by title

```graphql
query {
  allPost(sortBy: "title", order: DESC) {
    edges {
      node {
        title
      }
    }
  }
}
```

#### Sort a collection by multiple fields

```graphql
query {
  allPost(sort: [{ by: "featured" }, { by: "date" }]) {
    edges {
      node {
        title
      }
    }
  }
}
```

## Querying single nodes

The other fields that do not start with `all` are your single entries. They are typically used by templates to get data for the current page. You must provide either an `id` or a `path` as an argument to find the node.

#### Arguments

| Argument | Default | Description |
|----------|---------|-------------|
| **id** | `null` | Get node by `id`.

#### Example query

```graphql
query {
  post(id: "1") {
    title
  }
}
```

## Query data in Page components

Every **page** can have a `<page-query>` block with a GraphQL query
to fetch data from data sources. The results will be stored in a
`$page` property inside the page component.

```html
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  posts: allWordPressPost {
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

## Query data in any component

Every **Vue component** can have a `<static-query>` block with a GraphQL query to fetch data from data sources. The results will be stored in a `$static` property inside the component. A `<static-query>` is named static as it cannot accept any variable.

```html
<template>
  <div v-html="$static.post.content" />
</template>

<static-query>
query {
  post(id: "1") {
    content
  }
}
</static-query>
```
