# Templates

Templates are used for single post views to **GraphQL collections**. Add a **.vue** file with the same name as a GraphQL collection to `src/templates` to create a template. For example, if you have a collection called "**WordPressPost**" you create a **WordPressPost.vue** file.

You can browse available collections in the **schema tab** inside the [GraphQL explorer](/docs/querying-data).

The example shows a **Blog.vue** in **/pages** where Blog posts will be listed and then a **BlogPost.vue** inside **/templates** that will show the single post view.

![Page structure](./images/dynamic-pages.png)


## Creating templates

Templates must have a `<page-query>` block which fetches the source node
for the current page. You can use the `$path` variable to get the node.

```html
<!-- src/templates/WordPressPost.vue -->

<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content">
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: wordPressPost (path: $path) {
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

## Template layouts

The `<Layout>` component is an optional component used to **wrap pages and templates**. Layouts usually contain components like headers, footers or sidebars that will be used across the site. It should be imported to Pages & Templates like any other [Vue components](/docs/components).

** The page/template layout can be named anything. `<Layout>` is just an example. **

[Learn more about Layouts](/docs/layouts)


### More...

- [Query data in Templates](/docs/querying-data#query-data-in-templates)
- [Add head metadata to Templates](/docs/head#add-head-meta-data-to-pages--templates)