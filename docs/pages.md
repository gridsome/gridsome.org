# Pages

Pages are used for **normal pages** and for **listing & paginate GraphQL collections**. Like for example a Blog page. The url path of a page is always static. For **dynamic pages** like a single blog post, you need to use a **Template**. Learn more about [templates here](/docs/templates).

- If url will be `/about` use a **page**
- If url will be `/blog` use a **page**
- If url will be `/blog/:slug` use a **[Template](/docs/templates)**

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


A simple `Page.vue` file might look like this:


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

A `Blog.vue` file that **lists blog posts** might look like this:

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

[Learn more about query data](/docs/querying-data)



## Page layouts

The `<Layout>` component is an optional component used to **wrap pages and templates**. Layouts usually contain components like headers, footers or sidebars that will be used across the site. It should be imported to Pages & Templates like any other [Vue components](/docs/components).

** The page layout can be named anything. `<Layout>` is just an example. **

[Learn more about Layouts](/docs/layouts)



## Add a 404 page
To create a custom `404` page you need to add a `404.vue` in `src/pages`. This will automatically create a **404.html** file to the deploy.


### More...

- [Import layout to a page or template](/docs/layouts#import-layout-to-a-page-or-template)
- [Add head meta data to Pages](/docs/head#add-head-meta-data-to-pages--templates)
- [Query data in pages](/docs/querying-data)
