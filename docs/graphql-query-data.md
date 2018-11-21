# Querying data
You can query data into any **Page, Template or Component** from the GraphQL data layer. There are two ways to query data. You can use `<page-query>` or `<static-query>`. 



## How to query with GraphQL
**With GraphQL you only query the data you need.** This makes it easier and more tidy to work with data.
A query always starts with `query` and then something like `Posts` (This can be anything. Its only for you to understand what you query). Then you write something like `posts: allWordPressPosts`. **This is the important part.** The `allWordPressPosts` is the name of the GraphQL collection you want to query. The `post:` is optional. If you add that your query will be added to `$page.posts` or `$static.posts` if you use `<static-query>`. If its not added and you only use `allWordPressPosts` your post will be added to `$page.allWordPressPosts`.

  **Working with GraphQL in Gridsome is easy and you don't need to know much about GraphQL.**


Here is an example of a GraphQL query in a Page:

```html
<template>
  <div>
    <div v-for="item in $page.posts" :key="item.id">
      {{item.id}}
      {{item.title}}
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


## Test & preview queries
Every Gridsome project has a GraphQL playground that can be used to explore and test queries when in development mode. Here you also get a list of all available GraphQL collections. This can usually be opened by going to http://localhost:8080/___explore.


## Query data in Pages

Every **Page** can have a `<page-query>` block with a GraphQL query
to fetch data from data sources. The results will be stored in a
`$page` property inside the page component.

```html
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node._id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Blog {
  allWordPressPost (limit: 5) {
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

```html

<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content">
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  wordPressPost (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
```

## Query data in Components


Every **Component** can have a `<static-query>` block with a GraphQL query
to fetch data from data sources. The results will be stored in a
`$static` property inside the component.

```html
<template>
  <div v-html="$static.example" />
</template>

<static-query>
query Example {
  example: examplePage (path: "/docs/example") {
    content
  }
}
</static-query>

```
