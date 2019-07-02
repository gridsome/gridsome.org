# Pages & Routing
Gridsome creates routes and pages by using the **file-system**. That means any `.vue` or `.js` file added to `scr/pages` will be a page. There are 4 different ways of adding pages.

- [Normal pages](#normal-pages) - For pages that will have a static url. Like `/about` and `/blog`.
- [Template pages](#template-pages) - For creating single pages for data sources. Like `/blog/:title`.
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

## Template pages

Template pages are spacial pages used for creating templates for single pages for data sources.
Add a **TypeName.vue** in `pages/_templates` to create a template and define the route in `gridsome.config.js`.

```js
//gridsome.config.js
module.exports = {
  routes: [
    // this will by default look for and use _templates/WordPressPost.vue
    WordPressPost : '/blog/:title',

    // you can also set custom templates
    WordPressPost: {
      path: '/:year/:month/:day/:slug',
      component: './src/pages/_templates/CustomPostTemplate.vue'
    },

    // all possible options
    WordPressPost: {
      path: '/:year/:month/:day/:slug',
      component: './src/pages/_templates/Post.vue',
      dynamicRoute: false, // generate one route for each node
      fieldName: 'path' // graphql field name
    },
  ]
}
``` 

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

## Dynamic pages
Dynamic pages is used for client-side routing. For example:

- `/account/$user.vue` creates a dynamic `/account/:user` url with access to **$route.param.user**.

At build time this will generate a `acccount/user.html` file that all dynamic routes should do a 200 redirect to. You can do this automatically for Netlify and Zeit with plugins.

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


## Add a 404 page
To create a custom `404` page you need to add a `404.vue` in `src/pages`. This will automatically create a **404.html** file at build time.


## Add page meta
Gridsome uses [vue-meta](https://github.com/nuxt/vue-meta) for adding page meta.

```js
<script>
export default {
  metaInfo: {
    title: 'About us',
    meta: [
      { name: 'author', content: 'John Doe' }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/index.css' },
    ]
    // etc...
  }
}
</script>
```

Learn more about [`populating <head>`](/docs/head).


## Route params
Any custom field from the current `node` will be possible to use as route params. The `node.date` field has a set of shorthand helpers; `:year`, `:month` and `:day`. Access field values in deep objects or arrays by separating properties or indexes with double underscores (`__`). Field values are slugified by default, but the original value will be available as **{fieldname}_raw**.

- `:id` resolves to `node.id`
- `:value` resolves to `node.value` *(slugified value)*
- `:value_raw` resolves to `node.value` *(original value)*
- `:object__value` resolves to `node.object.value`
- `:array__3__id` resolves to `node.array[3].id`

