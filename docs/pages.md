# Pages & Routing
Gridsome creates pages by using the **file-system**. That means any `.vue` or `.js` file added to `scr/pages` will be a page. There are 4 different ways to add pages & routes.

- [Static pages](#static-pages) - For pages that will have a static url. Like `/about` and `/blog`.
- [Templates](#templates) - For single node views of a collection. Like `/blog/:title`.
- [Dynamic pages](#dynamic-pages) - For pages with dynamic url. Like `/user/:id`.
- [Pages API](#pages-api) - For creating pages programatically.

## Static pages
Static pages is used for pages like `/about` and for looping collections like a `/blog`.

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

A `Blog.vue` file that **loops blog posts** might look like this:

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


## Templates

Templates are used for **single node views** for [Collections](/docs/collections). Add a **.vue** file with the same name as the collection name to `src/templates` to create a template. For example, if you have a collection called "**WordPressPost**" you create a **WordPressPost.vue** file.

To setup a **template** you also need to define a route in `gridsome.config.js`.

```js
// gridsome.config.js
module.exports = {
  templates: {
    Post : '/blog/:year/:month/:title',
    Tag: {
      path: '/tags/:title',
      component: './src/templates/CustomTag.vue'
    }
  }
}
```

And then create a template file at `src/templates/Post.vue`.

```html
<template>
  <div>
    <h1 v-html="$page.post.title" />
    <div v-html="$page.post.content" />
  </div>
</template>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    title
    content
  }
}
</page-query>
```

Learn more about building [Templates](/docs/templates) here.


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

## Pages API

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


## Add a 404 page
To create a custom `404` page you need to add a `404.vue` in `src/pages`. This will automatically create a **404.html** file at build time.