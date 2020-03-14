# Pages

> Pages are responsible for presenting your data at a URL. Each page will be generated statically and have its own `index.html` file with the markup.

You have two options for creating pages in Gridsome:

1. **[Using the file system](#file-based-pages)** - For creating pages with [Single File Components](https://vuejs.org/v2/guide/single-file-components.html)
2. **[Using the Pages API](#programmatic-pages)** - For creating pages programmatically.


## File-based pages

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

## Programmatic pages

Pages can be created programmatically by using the `createPages` hook in `gridsome.server.js`. This is useful if you want to manually create pages from an external API [without using GraphQL data layer](/docs/pages-api#create-pages-from-external-apis).

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

## Dynamic routing

Pages can have dynamic routes. Dynamic routes are useful for pages that only need client-side routing. For example user pages that fetch info from an external API in production based on a segment in the URL.

Learn more about [dynamic routing](/docs/dynamic-routing/)

## Page meta info

Gridsome uses [vue-meta](https://vue-meta.nuxtjs.org/) for handling meta info about the page.

```html
<template>
  <div>
    <h1>Hello, world!</h1>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
    meta: [
      { name: 'author', content: 'John Doe' }
    ]
  }
}
</script>
```

Learn more about [`populating <head>`](/docs/head/).

## Custom 404 page

Create a `src/pages/404.vue` component to have a custom 404 page.
