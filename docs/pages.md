# Pages & routing
Gridsome uses [Vue Router](https://router.vuejs.org/) for routing. This makes it possible to run your site as a SPA with instant page loads and page transitions.  **Routes are added automatically**.

## Creating pages

All `.vue` files in the `src/pages` directory will become the pages for your
website. The page URL is generated based on the location and name of the file. The path will be lowercased and slugified automatically. Files named `Index.vue` are treated like `index.html` files and will not get a slug.

Examples:

- `/src/pages/Index.vue` will be the homepage **/**
- `/src/pages/About.vue` will be **/about**
- `/src/pages/OurTeam.vue` will be **/our-team**
- `/src/pages/features/Index.vue` will be **/features**
- `/src/pages/features/Awesome.vue` will be **/features/awesome**
- `/src/pages/404.vue` will be 404 the page.


A typical **Page.vue** file should looke like this:


```html
<template>
  <Layout>
    Here comes the page content
  </Layout>
</template>
```

## Add a Layout

The `<Layout>` component is an optional component used to wrap pages and templates. Layouts should contain components like headers, footers or sidebars that will be used across the site. It should be imported to Pages & Templates like any other [Vue components](/docs/components).

[Learn more about Layouts](/docs/layouts)


## Listing pages

All pages are added to a **GraphQL collection** called `allPage`. You can query a list of pages in any Vue Component like this:

```html
<static-query>
query {
  pages: allPage {
    path
  }
}
</static-query>
```

You can now list pages using **$static.pages** variable.


## Dynamic routing
Dynamic routing can be added to any **GraphQL Collections** added to the data layer. Every collection can have a template for single post views. You can browse available collections in the schema tab inside the [GraphQL explorer] (/docs/data-query-data).

![Page structure](./images/dynamic-pages.png)

The example above shows a **Blog.vue** in **/pages** where Blog posts will be listed and then a **BlogPost.vue** inside **/templates** that will show the single post view.

[Learn more about Templates & dynamic routing here](/docs/templates)


## Custom routing
...TODO: Add docs about using router here.

## Add a 404 page
To create a custom `404` page you need to add a `404.vue` in `src/pages`. This will automatically create a **404.html** file to the deploy.


### More...

- [Import layout to a page or template](/docs/layouts#import-layout-to-a-page-or-template)
- [Add head metadata to Pages](/docs/head)
- [Query data in pages](/docs/data-query-data)
