# Querying data

You can query fetched data into any **Page, Template or Component**. Queries are added with a `<page-query>` or `<static-query>` block in Vue Components.

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
query Posts {
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

**With GraphQL you only query the data you need.** This makes it easier and more tidy to work with data. A query always starts with `query` and then something like `Posts` *(Can be anything)*. Then you write something like `posts: allWordPressPost`. The `allWordPressPost` is the name of the GraphQL collection you want to query. The `post:` part is an optional alias. When using `post` as alias, your data will be available at `$page.posts` (or `$static.posts` if you use `<static-query>`). Otherwise it will be available at `$page.allWordPressPost`.

[Learn more about GraphQL queries](https://graphql.org/learn/queries/)

## Querying collections

Every content type has a collection and a single entry in the GraphQL schema. You will notice that some of the root fields in your schema are prefixed with `all`. They are the collections for each of your content types and you can use them in your pages to create lists of single entries.

#### Arguments

| Argument | Default | Description |
|----------|---------|-------------|
| **sortBy** | `"date"` | Sort by a node field.
| **order** | `DESC` | Sort order (`DESC` or `ASC`).
| **perPage** | `25` | How many nodes to get.
| **skip** | `0` | How many nodes to skip.
| **page** | `1` | Which page to get.
| **filter** | `{}` | [Read more](/docs/filtering-data).

#### Example query

```graphql
query Posts {
  allPost (sortBy: "title", order: DESC, skip: 2) {
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
| **path** | `null` | Get node by `path`.
| **nullable** | `false` | Will return an error if not nullable.

#### Example query

```graphql
query Post {
  post (id: "1") {
    title
  }
}
```

## Explore & test queries

Every Gridsome project has a **GraphQL explorer (Playground)** that can be used to explore and test queries when in development mode. Here you also get a list of all available GraphQL collections. This can usually be opened by going to `http://localhost:8080/___explore`.

![graphql-explorer](./images/graphql-explorer.png)

## Query data in Pages

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
query Blog {
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


## Query data in Templates

Templates are used for page layout for the *single* endpoint of a data source like for example a WordPress blog post. If you have a node type called `WordPressPost`, then you can create a file
in `src/templates/WordPressPost.vue`.

The `page-query` in templates also has a set of variables that can be used in the query. Available variables are `$id`, `$title`, `$slug`, `$path`, `$date` and any custom fields from the current `node`. Access field values in deep objects or arrays by separating properties or indexes with double underscores (`__`).

- `$id` resolves to `node.id`
- `$value` resolves to `node.fields.value`
- `$object__value` resolves to `node.fields.object.value`
- `$array__3__id` resolves to `node.fields.array[3].id`

```html
<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content"/>
    <ul>
      <li v-for="edge in $page.related" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Post ($id: String!, $group: String!) {
  post (id: $id) {
    title
    content
  }
  related: allPost (filter: { group: { eq: $group }}) {
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

## Query data in Components

Every **Component** can have a `<static-query>` block with a GraphQL query
to fetch data from data sources. The results will be stored in a
`$static` property inside the component. A 'static-query' is named static as it can not accept any variables.

```html
<template>
  <div v-html="$static.example.content" />
</template>

<static-query>
query Example {
  example: examplePage (path: "/docs/example") {
    content
  }
}
</static-query>
```
