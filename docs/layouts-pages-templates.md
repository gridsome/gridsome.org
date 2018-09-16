# Layouts, Pages & Templates

Gridsome template system is divided into 3 parts:

- **Pages:** This is the main pages and endpoints for your site. F.ex mywebsite.com/blog
- **Layouts:** These are used for to wrap Pages and Templates. Like header and footer.
- **Templates:** Used for single source endpoints. F.ex a blog post template for WordPress

## Pages

All `.vue` files in the `src/pages` directory will become the pages for your
website. The page URL is generated based on the location and name of the file.
The path will be lowercased and slugified automatically. So if have a file with
the name `AboutUs.vue`, it will get the slug `about-us`. Files named `Index.vue`
are treated like `index.html` files and will not get a slug. As an example:
`src/pages/features/Index.vue` will become `/features` and
`src/pages/features/Awesome.vue` will become `/features/awesome`.

Page templates should be wrapped in a layout component like:

```html
<template>
  <Layout title="Hello">
    Welcome to mye website...
  </Layout>
</template>
```

#### Setting the HTML head title

Gridsome uses **vue-meta** to manage meta info.

```html
<script>
export default {
  metaInfo: {
    title: 'My title'
  }
}
</script>
```

[Read more about vue-meta.](https://github.com/declandewet/vue-meta)

#### Querying data with GraphQL

Every page component can have a `<graphql>` block with a GraphQL query
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

<graphql>
query Blog {
  allWordPressPost (limit: 5) {
    edges {
      node {
        _id
        title
      }
    }
  }
}
</graphql>
```

## Layouts

Layout components are used to wrap pages and templates. Layouts should contain
components like headers, footers or sidebars that will be used across the site.

```html
<template>
  <div>
    <header/>
    <h1 v-html="title"/>
    <slot/>
    <footer/>
  </div>
</template>
```

## Templates

Templates are just like pages, except they will not get a path based on the file
location. Instead, they'll be used to render pages from data sources in your
project. The filename must match the GraphQl node type it will be a template
for. If you have a node type called `WordPressPost`, then you can create a file
in `src/templates/WordPressPost.vue`.

Template components must have a `<graphql>` block which fetches the source node
for the current page. You can use the `path` variable to get the node.

```html
<!-- src/templates/WordPressPost.vue -->

<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content">
  </Layout>
</template>

<graphql>
query Post ($path: String!) {
  wordPressPost (path: $path) {
    title
    content
  }
}
</graphql>

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
