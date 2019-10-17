# Routing

There are 4 ways of creating routes in Gridsome:

- [Static routes](#static-routes) - For creating static pages like `/about/` or `/blog/`

- [Template routes](#template-routes) - For creating templates for [collections](/docs/collections/). Like `/blog/:title`

- [Dynamic routes](#dynamic-routes) - For creating dynamic pages like `/user/:id/`

- [Error routes](#error-routes) - For `404` pages etc.


## Static routes

### File-based pages

[Single File Components](https://vuejs.org/v2/guide/single-file-components.html) in the `src/pages` directory will automatically be available with their own URLs. The file location is used to generate the URL and here are a few basic examples:

- `src/pages/Index.vue` becomes `/` *(The frontpage)*
- `src/pages/AboutUs.vue` becomes `/about-us`
- `src/pages/about/Vision.vue` becomes `/about/vision`
- `src/pages/blog/Index.vue` becomes `/blog`

A simple page component might look like this:

```html
<template>
  <div>
    <h1>Hello, world!</h1>
  </div>
</template>
```

Pages in `src/pages` are typically used for fixed URLs like `/about` or for listing blog posts at, for example `/blog`. [Read more about how to create pages for single blog posts etc.](/docs/collections/)


### Programmatic pages

Pages can be created programmatically by using the `createPages` hook in `gridsome.server.js`.

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

[Read more about the Pages API](/docs/pages-api/)

## Template routes
[Templates](/docs/templates/) are used to create single pages for nodes in a [collection](/docs/collections/). **Template routes** are defined in `gridsome.config.js`.

### Setup a route

```js
// gridsome.config.js
module.exports = {
  templates: {
    Post: '/blog/:year/:month/:title',
  }
}
```

This example shows you how to setup a template for a [collection](/docs/collections/) named `Post`. This will look for and use a template located at `src/templates/Post.vue`.


### Example template file

```html
<!-- src/templates/Post.vue -->
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

Learn more about [templates and routes here](/docs/templates).


## Dynamic routes

Dynamic routes are useful for pages that only need client-side routing. For example pages that fetches info from an external API in production based on a segment in the URL. Gridsome only generates one HTML file for dynamic routes.

### File-based dynamic routes

Dynamic pages are used for client-side routing. Route parameters can be placed in file and directory names by wrapping the name in square brackets. For example:

- `src/pages/user/[id].vue` becomes `/user/:id`.
- `src/pages/user/[id]/settings.vue` becomes `/user/:id/settings`.

At build time, this will generate `user/_id.html` and `user/_id/settings.html` and you must have rewrite rules to make them work properly.

Pages with dynamic routes have lower priority than fixed routes. For example, if you have a `/user/create` and a `/user/:id` route, the `/user/create` route will be prioritized.

Here is a basic page component that uses the `id` parameter from the route to fetch user information on client-side:

```html
<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const response = await fetch(`https://api.example.com/user/${id}`)

    this.user = await response.json()
  }
}
</script>
```

*Always use the `mounted` hook to fetch client-side data. Fetching data in the `created` hook will cause issues because it is executed when generating static HTML.*

### Programmatic dynamic routes

Create pages with dynamic routes programmatically for more advanced paths. Dynamic parameters are specified by having a `:` in front of a segment. And each parameter can have a custom regular expression to match only digits or certain values.

```js
module.exports = function (api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/user/:id(\\d+)',
      component: './src/templates/User.vue'
    })
  })
}
```

[Read more about the Pages API](/docs/pages-api/)

### Rewrite rules for dynamic routes

Gridsome is not able to generate HTML files for every possible variation of a dynamic route. Which means the URLs most likely will show a 404 page when visited directly. Instead, Gridsome generates one HTML file which can be used in a rewrite rule. For example, a route like `/user/:id` will generate a HTML file located at `/user/_id.html`. You can have a rewrite rule to map all paths matching `/user/:id` to that file.

Rewrite rules must be generated manually because every server type has its own syntax. The `redirects` array in the `afterBuild` hook contains all necessary rewrite rules that should be generated.

```js
const fs = require('fs')

module.exports = {
  afterBuild ({ redirects }) {
    for (const rule of redirects) {
      // rule.from   - The dynamic path
      // rule.to     - The HTML file path
      // rule.status - 200 if rewrite rule
    }
  }
}
```


## Error routes

### 404 page

Create a `src/pages/404.vue` component to have a custom 404 page.

