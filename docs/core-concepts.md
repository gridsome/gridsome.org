# Core concepts

### Pages
[Pages](/docs/pages) is created by adding **Vue Components** in `src/pages` folder. It uses a file-based routing system. For example, `src/pages/About.vue` will be `mywebsite.com/about`. Pages are used for simple pages and for listing collections.

[Learn more about Pages](/docs/pages)


### Collections
[Collections](/docs/collections) are data added to a local [GraphQL data layer](/docs/data-layer).  Collections are useful if you are going to have blog posts, tags, products etc. on your site. Collections can be added with source plugins or with Data Store API. Any external content API can be used.

Collections can be [queried anywhere](/docs/querying-data), [filtered](/docs/filtering-data), [paginated](/docs/pagination) or [have relations](/docs/taxonomies).

[Learn more about Collections](/docs/collections)

### Templates
[Templates](/docs/templates) are responsible for displaying nodes (single pages) of collections. A template has a `<page-query>` that query data for the

Here is an example:

```html
<template>
  <Layout>
  	<h1 v-html="$page.post.title" />
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    title
  }
}
</page-query>
```

[Learn more about Templates](/docs/templates)

### Layouts
Layouts are **Vue Components** that are used inside Pages and Templates to wrap the content. A layout usually contains Header & Footer.

Layouts are usually used like this:

```html
<template>
  <Layout>
  	<h1>About us</h1>
  </Layout>
</template>
```

[Learn more about Layouts](/docs/layouts)


### Gridsome Images
Gridsome has a built-in `<g-image>` component that outputs an optimized progressive image. It also resizes and crops in real-time when developing.

[Learn more about g-image](/docs/images)

### Gridsome Links
Gridsome has a built in `<g-link>` component that uses IntersectionObserver to prefetch linked pages when link is in view. This makes browsing around in a Gridsome site very fast because the clicked page is already downloaded.

[Learn more about g-image](/docs/linking)
