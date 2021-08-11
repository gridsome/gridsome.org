# Recipes

Quick answers for how to accomplish common tasks with Gridsome.

## App structure

**App.vue** is the wrapper for the whole site. It's located at `src/App.vue`. It usually contains global components like Header & Footer.

![App layout](./images/app-layout.png)


## Pages
[Pages](/docs/pages/) is created by adding **Components** in `src/pages` folder.


### Basic page

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
  }
}
</script>
```

### Static routing

### Dynamic routing

### createPage()

### Custom 404


## Linking

### Link between pages

### Linking in Components
...

### Linking in Markdown
...

## Images
Gridsome has a built-in `<g-image>` component that outputs an optimized progressive image.

### Images in Components

### Images in Markdown

### Images from GraphQL


## Styling

### Add a global CSS

### Install & use SCSS



## Collections & Nodes
[Collections](/docs/collections/) are useful if you are going to have blog posts, tags, products etc. on your site. Collections can be sourced from any **Headless CMS, content APIs or Markdown files** by using [Source plugins](/plugins) or the [Data Store API](/docs/data-store-api/).

![Collections](./images/node-pages.png)

Collections are stored in a temporary [local GraphQL data layer](/docs/data-layer/) and can be [queried anywhere](/docs/querying-data/), [filtered](/docs/filtering-data/), [paginated](/docs/pagination/) or [have relations](/docs/taxonomies/).

### Sourcing a collection

### Loop a collection
### Link to a node
### Template for a node


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
query Post($id: ID!) {
  post(id: $id) {
    title
  }
}
</page-query>
```

[Learn more about Templates](/docs/templates/)


## Transitions

### Page transitions

### Show/Hide transitions
