# Templates

> Templates are used for adding views to **GraphQL collections**. Add a **.vue** file with the same name as a GraphQL collection to `src/templates` to create a template. For example, if you have a collection called "WordPressPost" you create a WordPressPost.vue file.

You can browse available collections in the **schema tab** inside the [GraphQL explorer](/docs/data-query-data).

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
export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
```

### More...

- [Add head metadata to Templates](/docs/head)
- [Query data in Templates](/docs/data-query-data)
