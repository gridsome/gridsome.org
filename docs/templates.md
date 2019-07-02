# Templates

Templates are used for single post views to **Content types**. Add a **.vue** file with the same name as a GraphQL collection to `src/templates` to create a template. For example, if you have a collection called "**WordPressPost**" you create a **WordPressPost.vue** file.

You can browse available collections in the **schema tab** inside the [GraphQL explorer](/docs/data-layer#the-graphql-explorer).

The example shows a **Blog.vue** in **/pages** where Blog posts will be listed and then a **BlogPost.vue** inside **/templates** that will show the single post view.

![Page structure](./images/dynamic-pages.png)


## Template

Template pages are spacial pages used for creating templates for single pages for data sources.
Add a **TypeName.vue** in `pages/_templates` to create a template and define the route in `gridsome.config.js`.



A typical **template page** will look like this:

```html
<template>
  <Layout>
    <h1 v-html="$page.post.title" />
    <div v-html="$page.post.content" />
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


## Creating templates

Templates must have a `<page-query>` block which fetches the source node
for the current page. You can use the `$id` variable to get the node.

```html
<!-- src/templates/WordPressPost.vue -->

<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content">
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

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
```

### More...

- [Query data in Templates](/docs/querying-data#query-data-in-templates)
- [Add head metadata to Templates](/docs/head#add-head-meta-data-to-pages--templates)
