# Pages

All `.vue` files in the `src/pages` directory will become the pages for your
website. The page URL is generated based on the location and name of the file. The path will be lowercased and slugified automatically. Files named `Index.vue` are treated like `index.html` files and will not get a slug.

Examples:

- `/src/pages/Index.vue` will be **/**
- `/src/pages/About.vue` will be **/about**
- `/src/pages/OurTeam.vue` will be **/our-team**
- `/src/pages/features/Index.vue` will be **/features**
- `/src/pages/features/Awesome.vue` will be **/features/awesome**


Page templates should be wrapped in a layout component like:

```html
<template>
  <Layout title="Hello">
    Welcome to my website...
  </Layout>
</template>
```

### Setting the HTML head title

Gridsome uses **vue-meta** to manage meta info.

```html
<script>
export default {
  metaInfo: {
    title: 'My title'
  }
}
</script>
```

[Read more about vue-meta.](https://github.com/declandewet/vue-meta)


### More...

- [Add head metadata to Pages](/docs/head)
- [Query data in pages](/docs/data-query-data)
