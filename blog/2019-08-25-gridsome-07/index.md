---
title: Gridsome v0.7
slug: gridsome-v07
author: [hjvedvik, tommyvedvik]
date: 2019-08-30
excerpt: "Version 0.7 is finally here with a new Schema API, Dynamic Routing, better Template config, Custom App.vue, and more!"
---

- [New Schema API](#schema-api): Define what fields that are coming from an external source. 
- [New template configuration](#new-template-configuration): Setup templates and routes for collections in one place.
- [Dynamic routing](#dynamic-routing): File-based & Programmatically dynamic routing.
- [Custom App.vue](#custom-appvue): Use to create a global layout that can have full-page transitions.


## Schema API

Gridsome generates the GraphQL schema for metadata and collections based on the data which is discovered on startup. That's great for simple projects but will often lead to errors with, for example missing fields because content has been removed in an external source. This API lets you define your own schema types to have persisted fields.

```js
api.loadSource(({ addSchemaTypes }) => {
  addSchemaTypes(`
    type Post implements Node {
      title: String
    }
  `)
})
```

**This will fix many problems** for data source plugins. Now Gridsome will know what data is really coming from a Source.


Read more about the [Schema API](/docs/schema-api)

## New template configuration

Previously, each content type has been given a route in order to assign it to a template with the same name inside the `src/templates` directory. Routes were spread across many plugin options and some also hidden within plugins. **The new `templates` config tries to collect all content type routes in a single property in `gridsome.config.js`.**

To create a route for a [collection](/docs/collections) you simply add `CollectionName: '/any/route/:title'` to the new [templates](/docs/templates)  config. Here are some examples: 

```js
// gridsome.config.js
module.exports = {
  plugins: [
    // Add source plugins etc here.
  ],
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

**This means: **
- [Source plugins](/plugins) & [Data store API](/docs/data-store-api) should be used only for getting data into Gridsome as [Collections](/docs/collections) from now.
- The new [Templates](/docs/templates) config are used to setup **templates and routes** for any collections.


Read more about the new [templates configuration](/docs/templates)

## Dynamic routing

Dynamic routing is perfect to use if you need routes for, for example, user accounts or need to fetch data from an external source on client-side. (Data that will not be generated).

#### File-based dynamic routes

Dynamic pages is used for client-side routing. Route parameters can be placed in file and directory names by wrapping the name in square brackets. For example:

- `src/pages/user/[id].vue` becomes `/user/:id`.
- `src/pages/user/[id]/settings.vue` becomes `/user/:id/settings`.

At build time, this will generate `user/_id.html` and `user/_id/settings.html` and you must have rewrite rules to make them work properly on a static web host.

#### Programmatic dynamic routes

Create pages with dynamic routes programmatically for more advanced paths. Dynamic parameters are specified by having a `:` in front of a segment. And each parameter can have a custom regular expression to match only digits or certain values.

```js
module.exports = function (api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/user/:id(\\d+)',
      component: './src/templates/User.vue'
    })
  })
}
```

[Learn more about Dynamic Routing](/docs/dynamic-routing)

## Custom App.vue

**App.vue** is the file that wraps your whole website or app. Gridsome usually adds a `App.vue` automatic in the background. This can now be overridden by having your own `App.vue` file in your `src` directory. Overriding it is useful if you want to have a **layout that is shared across all your pages.** Or if you want to have a `<transition>` component around the `<router-view>`.

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

[See full change log →](https://github.com/gridsome/gridsome/blob/master/gridsome/CHANGELOG.md)