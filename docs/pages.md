# Pages & Routing

> Pages are responsible for displaying your data. Each page will be generated statically and have its own `index.html` file with the markup. Create pages either by having Vue components in `src/pages` or programatically by using the [Pages API](/docs/pages-api).

## Creating Pages

Vue components in the `src/pages` directory will automatically be available with their own URLs. The file name is used to generate the URL and here are a few basic examples:

- `/Index.vue` becomes `/` *(The frontpage)*
- `/AboutUs.vue` becomes `/about-us`
- `/about/Vision.vue` becomes `/about/vision`
- `/blog/Index.vue` becomes `/blog`

Pages in `src/pages` would typically be used for static URLs like `/about` or for listing blog posts at, for example `/blog`. 

A simple page component might look like this:

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

A `src/pages/Blog.vue` component that **lists blog posts** might look like this:

```html
<template>
  <Layout>
    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query AllPosts {
  allPost {
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

### Create pages for collections

Pages for single blog posts, tags etc. can be created with [collections](/docs/collections) or programatically.

[Read more about how to create pages for single blog posts.](/docs/collections)

## Create dynamic pages

Dynamic routes is used for client-side routing. For example:

- `src/pages/User[id].vue` creates a dynamic `/user/:id` URL.
- `src/pages/User[id][section].vue` creates a dynamic `/user/:id/:section` URL.

At build time, this will generate `user/_id.html` and `user/_id/_section.html` and you should have some rewrite rules to make them work properly on static web hosts. Plugins can do this automatically for you on Netlify and Zeit etc.

Route parameters can be accessed in your components at `this.$route.params.{name}`.

## Create pages programatically

Pages can also be created programmatically by using the `createPages` hook in `gridsome.server.js`.

```js
module.exports = function (api) {
  api.createPages(({ createPage, createDynamicPage }) => {
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue'
    })

    createDynamicPage({
      path: '/user/:id',
      component: './src/templates/UserProfile.vue'
    })
  })
}
```
[Read more about the Pages API](/docs/pages-api)


## Add page meta info
Gridsome uses [vue-meta](https://vue-meta.nuxtjs.org/) for adding page meta.

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


## Add a custom 404 page

Create a `src/pages/404.vue` component to have a custom 404 page.
