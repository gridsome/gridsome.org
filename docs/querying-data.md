# Querying data
You can query fetched data into any **Page, Template or Component**. Queries are added with a `<page-query>` or `<static-query>` block in Vue Components.

- Use `<page-query>` in **Pages & Templates**.
- Use `<static-query>` in **Components**.


## Explore & test queries
Every Gridsome project has a **GraphQL explorer (Playground)** that can be used to explore and test queries when in development mode. Here you also get a list of all available GraphQL collections. This can usually be opened by going to http://localhost:8080/___explore.

![graphql-explorer](./images/graphql-explorer.png)

## How to query with GraphQL
**With GraphQL you only query the data you need.** This makes it easier and more tidy to work with data.
A query always starts with `query` and then something like `Posts` (This can be anything. It's only for you to understand what you query). Then you write something like `posts: allWordPressPosts`. **This is the important part.** The `allWordPressPosts` is the name of the GraphQL collection you want to query. The `post:` is optional. If you add that your query will be added to `$page.posts` or `$static.posts` if you use `<static-query>`. If it's not added and you only use `allWordPressPosts` your post will be added to `$page.allWordPressPosts`.

  **Working with GraphQL in Gridsome is easy and you don't need to know much about GraphQL.**


Here is an example of a GraphQL query in a Page:

```html
<template>
  <div>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      {{ edge.node.id }}
      {{ edge.node.title }}
    </div>    
  </div>
</template>

<page-query>
query Posts {
  posts: allWordPressPosts {
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

[You can learn more about GraphQL queries here](https://graphql.org/learn/queries/)


## Query data in Pages

Every **Page** can have a `<page-query>` block with a GraphQL query
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
  posts: allWordPressPost (limit: 5) {
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

Templates are used for page layout for the "single" endpoint of a data source like for example a WordPress blog post. If you have a node type called `WordPressPost`, then you can create a file
in `src/templates/WordPressPost.vue`.

The `page-query` in templates also has a set of variables that can be used in the query. Available variables are `$id`, `$title`, `$slug`, `$path`, `$date` and any custom fields from the current `node`. Access values in deep objects or arrays by separating properties or indexes with double underscores (`__`).

- `$id` resolves to `node.id`
- `$value` resolves to `node.fields.value`
- `$object__value` resolves to `node.fields.object.value`
- `$array__3__id` resolves to `node.fields.array[3].id`

```html
<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content"/>
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post: wordPressPost (id: $id) {
    title
    content
  }
}
</page-query>
```

## Query data in Components

Every **Component** can have a `<static-query>` block with a GraphQL query
to fetch data from data sources. The results will be stored in a
`$static` property inside the component.

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
