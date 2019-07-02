# Pages & Routing
Gridsome creates routes and pages by using the file-system. That means any `.vue` or `.js` file added to `scr/pages` will be a page. There are 4 different ways of adding pages.

- [Normal pages](#normal-pages) - For pages that will have a static url. Like `/about` and `/blog`.
- [Source pages](#source-pages) - For creating single pages for data sources. Like `/blog/:title`.
- [Dynamic pages](#dynamic-pages) - For pages with dynamic url. Like `/user/:id`.
- [Custom pages](#custom-pages) - For creating pages programatically.


## Normal pages
- **/Index.vue** is `/` (index.html)
- **/blog/Index.vue** will be `/blog`
- **/About.vue** will be `/about`
- **/about/Vision.vue** will be `/about/vision`

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

## Source pages
Source pages is used for creating single pages for data sources.
Add a **_TypeName[$param].vue** to create pages and routes.

- **/blog/_WordPressPost[$title].vue** will create pages for **WordPressPost** type at `blog/:title`.
- **/blog/_Post[$year][$month][$title].vue** will create pages for **Post** type at `blog/:year/:month/:title`.
- **/authors/_Author[$name].vue** will create pages for **Author** type  at`authors/:name`.
- **/authors/_Author[$name][books].vue** will create a sub page for **Author** type at`authors/:name/books`.

Source pages must have a `<page-query>` block which fetches the source node
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
- **/account/$user.vue** creates a dynamic `/account/:user` url with access to **$route.param.user**.

This will generate a `acccount/user.html` file that all dynamic routes should do a 200 redirect to. You can do this automatically for Netlify and Zeit with plugins.


[Learn more about query data](/docs/querying-data)

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


## Add a 404 page
To create a custom `404` page you need to add a `404.vue` in `src/pages`. This will automatically create a **404.html** file to the deploy.


## More...

- [Add head meta data to Pages](/docs/head#add-head-meta-data-to-pages--templates)
- [Query data in pages](/docs/querying-data)
