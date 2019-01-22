# Pages

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


A typical `Page.vue` file will look like this:


```html
<template>
  <Layout>
    Here comes the page content
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

## Page layouts

The `<Layout>` component is an optional component used to **wrap pages and templates**. Layouts usually contain components like headers, footers or sidebars that will be used across the site. It should be imported to Pages & Templates like any other [Vue components](/docs/components).

** The page layout can be named anything. `<Layout>` is just an example. **

[Learn more about Layouts](/docs/layouts)



## Add a 404 page
To create a custom `404` page you need to add a `404.vue` in `src/pages`. This will automatically create a **404.html** file to the deploy.


### More...

- [Import layout to a page or template](/docs/layouts#import-layout-to-a-page-or-template)
- [Add head metadata to Pages](/docs/head)
- [Query data in pages](/docs/data-query-data)
