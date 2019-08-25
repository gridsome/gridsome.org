---
title: Gridsome v0.7
slug: gridsome-v07
author: [hjvedvik, tommyvedvik]
date: 2019-08-25
excerpt: "..."
---
## Schema API

Gridsome generates the GraphQL schema for metadata and collections based on the data which is discovered on startup. That's great for simple projects but will often lead to errors with for example missing fields because content has been removed in an external source. This API lets you define your own schema types to have persisted fields.

```js
api.loadSource(({ addSchemaTypes }) => {
  addSchemaTypes(`
    type Post implements Node {
      title: String
    }
  `)
})
```

Read more about the [Schema API](/docs/schema-api)

## New routes & template configuration

Previously, each content type has been given a route in order to assign it to a template with the same name inside the `src/templates` directory. Routes where spread across many plugin options and some also hidden within plugins. The new `templates` config tries to collect all content type routes in a single property in `gridsome.config.js`.

To create a route for a [collection](/docs/collections) you simply add `CollectionName: '/any/route/:title'` to the new [templates](/docs/templates)  config. Here are some examples: 

```js
// gridsome.config.js
module.exports = {
  templates: {
  	// These will look for and use src/templates/{Collection}.vue
    Post: '/blog/:year/:month/:title',
    Author: '/author/:name',

    // Routes for source plugins are also added here
    WordPressPost: '/blog/:year/:month/:day/:slug:',
    WordPressTag: '/tag/:slug',

    // You can also set a template manually
    Post: {
      path: '/blog/:year/:month/:title',
      component: './src/other/location/Post.vue'
    }
  }
}
```

Read more about the new [templates configuration](/docs/templates)

## Dynamic routing

[Read more](/docs/dynamic-routing)

## Custom App.vue

Gridsome usually adds a `App.vue` automatic in the background. This can now be overridden by having your own `App.vue` file in your `src` directory. Overriding it is useful if you want to have a **layout that is shared across all your pages.** Or if you want to have a `<transition>` component around the `<router-view>`.

Here is an example:

```html
<!-- src/App.vue -->
<template>
  <MainLayout> 
    <transition>
      <router-view />
    </transition>
  </MainLayout>
</template>

<script>
import MainLayout from '~/layouts/Main.vue'

export default {
  components: {
    MainLayout
  }
}
</script>
```

[Learn more about overriding App.vue](/docs/overriding-app)

## Breaking changes

- Node paths will have a trailing slash by default, but shouldn't break in most cases.

## Other changes

- The `$id` variable in queries is now a `ID` type instead of `String`.
- `addContentType` is renamed to `addCollection`.
- `addMetaData` is renamed to `addMetadata`.
- `metaData` is renamed to `metadata` in GraphQL schema and project config.