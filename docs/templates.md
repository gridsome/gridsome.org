# Templates

> Templates are used for adding views to **GraphQL collections**. Add a **.vue** file with the same name as a GraphQL collection to `src/templates` to create a template. For example, if you have a collection called "WordPressPost" you create a WordPressPost.vue file.

You can browse available collections in the **schema tab** inside the [GraphQL explorer](/docs/data-query-data).


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
export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
```


## Create routes for a template

Data sources adds routing automatically with settings. These could be different for each plugin so check the plugin documentation how to use route.

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        route: '/blog/:year/:month/:day/:slug'
      }
    }
  ]
}
```

### Default route params
The default route params are `:year`, `:month`, `:day` and `:slug`. 


### Custom route params
It is possible to use fields coming from a GraphQL node type in the route. Field values are slugified, but the original value will be available as **{fieldname}_raw**. Only root level primitive fields will be available as params.


## Routing for custom data sources
When you add a custom data source you need to use the `route` option inside `addContentType()` **OR** use `path` option inside `addNode()`. `route` will be used for all posts and `path` will be set per post. It's only possible to use one of them. If both are used `route` will be prioritzed.

Learn more about [custom data sources here](/docs/data-custom)

```js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://api.example.com/posts')

    const contentType = store.addContentType({
      typeName: 'BlogPosts'
      route: 'blog/:slug'  // add this...
    })

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title
        path: 'blog/:slug' //... or this
      })
    }
  })
}
```


### More...

- [Add head metadata to Templates](/docs/head)
- [Query data in Templates](/docs/data-query-data)
