# Querying data
..

## How GraphQL works
..

## Query data in pages
..

## Query data in templates
..


## Query data in components
..

## Query local files
..

## Query external data
..



## Add GraphQL to Pages

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


## Add GraphQL to Components

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


## Add GraphQL to templates

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
