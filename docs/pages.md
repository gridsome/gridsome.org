# Pages & Routing
Gridsome creates routes and pages by using the **file-system**. That means any `.vue` or `.js` file added to `scr/pages` will be a page. There are 4 different ways of adding pages.

- [Normal pages](#normal-pages) - For pages that will have a static url. Like `/about` and `/blog`.
- [Data pages](#data-pages) - For creating single pages for data sources. Like `/blog/:title`.
- [Dynamic pages](#dynamic-pages) - For pages with dynamic url. Like `/user/:id`.
- [Custom pages](#custom-pages) - For creating pages programatically.


## Normal pages
Normal pages is used for static pages like `/about` and for listing pages like a `/blog`.

- `/Index.vue` is `/` (Homepage)
- `/blog/Index.vue` will be `/blog`
- `/About.vue` will be `/about`
- `/about/Vision.vue` will be `/about/vision`

A normal `Page.vue` file might look like this:

```html
<template>
  <Layout>
    Some content about us...
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  }
}
</script>
```

A `Blog.vue` file that **lists blog posts** might look like this:

```html
<template>
  <Layout>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      {{ edge.node.id }}
      {{ edge.node.title }}
    </div>    
  </Layout>
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

## Data pages
Data pages is used for creating single pages for data sources (GraphQL types).
Add a **_TypeName[$param].vue** to create pages for a GraphQL type.

- `_WordPressPost[$title].vue` will create pages for **WordPressPost** type at `/:title`.
- `_Post[$year][$title].vue` will create pages for **Post** type at `/:year/:title`.
- `_Author[$name].vue` will create pages for **Author** type  at`/:name`.
- `_Author[$name][books].vue` will create a sub page for **Author** type at`/:name/books`.

Data pages must have a `<page-query>` block which fetches the source node
for the current page. You can use the `$id` variable to get the node.


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

## Dynamic pages
Dynamic pages is used for client-side routing. 

- `/account/$user.vue` creates a dynamic `/account/:user` url with access to **$route.param.user**.

This will generate a `acccount/user.html` file that all dynamic routes should do a 200 redirect to. You can do this automatically for Netlify and Zeit with plugins.

Route param can be accessed inside the dynamic page and used to for example fetch data form external APIs on client-side.
```html
<template>
  <Layout>
    {{ $route.params.user }}
  </Layout>
</template>

```

## Custom pages

Pages can also be created programmatically by using the `createPages` hook in `gridsome.server.js`.

```js
module.exports = function (api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue'
    })
  })
}
```
[Read more about the Pages API](/docs/pages-api)


## Route params
Any custom field from the current `node` will be possible to use as route params. The `node.date` field has a set of shorthand helpers; `:year`, `:month` and `:day`. Access field values in deep objects or arrays by separating properties or indexes with double underscores (`__`). Field values are slugified by default, but the original value will be available as **{fieldname}_raw**.

- `:id / $id` resolves to `node.id`
- `:value / $value` resolves to `node.value` *(slugified value)*
- `:value_raw / $value_raw` resolves to `node.value` *(original value)*
- `:object__value / $object__value` resolves to `node.object.value`
- `:array__3__id / $array__3__id` resolves to `node.array[3].id`


## Add a 404 page
To create a custom `404` page you need to add a `404.vue` in `src/pages`. This will automatically create a **404.html** file to the deploy.


### More...

- [Add head meta data to Pages](/docs/head#add-head-meta-data-to-pages--templates)
- [Query data in pages](/docs/querying-data)
