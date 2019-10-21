# Core concepts

## Pages
[Pages](/docs/pages/) are created by adding **Vue Components** in `src/pages` folder. They use a file-based routing system. For example, `src/pages/About.vue` will be `mywebsite.com/about`. Pages are used for simple pages and for pages that list collections (Like a `/blog`)

[Learn more about Pages](/docs/pages/)

## Collections
[Collections](/docs/collections/) are useful if you are going to have blog posts, tags, products etc. on your site. Collections can be sourced from any **Headless CMS, content APIs or Markdown files** by using [Source plugins](/plugins) or the [Data Store API](/docs/data-store-api/).

![Collections](./images/node-pages.png)

Collections are stored in a temporary [local GraphQL data layer](/docs/data-layer/) and can be [queried anywhere](/docs/querying-data/), [filtered](/docs/filtering-data/), [paginated](/docs/pagination/) or [have relations](/docs/taxonomies/).



[Learn more about Collections](/docs/collections/)

## Templates
[Templates](/docs/templates/) are responsible for displaying nodes (single pages) of collections. Templates are usually located in `src/templates`. Gridsome tries to locate a file with the same name as the Collection if no component has been specified in templates config.

Here is an example:

```html
<!-- src/templates/Post.vue -->
<template>
  <Layout>
  	<h1 v-html="$page.post.title" />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
  }
}
</page-query>
```

[Learn more about Templates](/docs/templates/)

## Layouts
Layouts are **Vue Components** that are used inside Pages and Templates to wrap the content. A layout usually contains Header & Footer.

Layouts are usually used like this in Pages:

```html
<template>
  <Layout>
  	<h1>About us</h1>
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

🙌 Layouts can also be made [available globally](/docs/layouts#make-a-layout-global), so you don't need to import them per page.

[Learn more about Layouts](/docs/layouts/)


## Images
Gridsome has a built-in `<g-image>` component that outputs an optimized progressive image. It also resizes and crops in real-time when developing if **width** and **height** is changed. `<g-images>` creates a super small **blurred inline base64 image** and then uses IntersectionObserver to lazy load image when in view.

[Learn more about g-image](/docs/images/)

## Linking
Gridsome has a built-in `<g-link>` component that uses IntersectionObserver to prefetch linked pages when the link is in view. This makes browsing around in a Gridsome site very fast because the clicked page is already downloaded.

[Learn more about g-link](/docs/linking/)
