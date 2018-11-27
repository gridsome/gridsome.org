# Pages

> **Pages are usually used for normal pages or for listing items from a GraphQL collection.**

All `.vue` files in the `src/pages` directory will become the pages for your
website. The page URL is generated based on the location and name of the file.
The path will be lowercased and slugified automatically. So if have a file with
the name `AboutUs.vue`, it will get the slug `about-us`. Files named `Index.vue`
are treated like `index.html` files and will not get a slug. As an example:
`src/pages/features/Index.vue` will become `/features` and
`src/pages/features/Awesome.vue` will become `/features/awesome`.

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