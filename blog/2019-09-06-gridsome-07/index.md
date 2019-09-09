---
title: Gridsome v0.7
slug: gridsome-v07
author: [hjvedvik, tommyvedvik]
date: 2019-09-06
excerpt: "Version 0.7 is finally here with a new Schema API, Dynamic Routing, better Template config, Custom App.vue, Shareable Network URL and more!"
---

- [New Schema API](#schema-api): Define what fields that are coming from an external source.
- [New template configuration](#new-template-configuration): Setup templates and routes for collections in one place.
- [Dynamic routing](#dynamic-routing): File-based & Programmatically dynamic routing.
- [Custom App.vue](#custom-appvue): Use to create a global layout that can have full-page transitions.
- [Deprecation notices](#deprecation-notices): Better deprecation messages in terminal.
- [Shareable Network URL](#shareable-network-url): Perfect for mobile live preview with hot-reloading.

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

🙌 This will fix problems for **data sources** where the data fields can change.

For example, [Sanity.io](https://sanity.io) (A Headless CMS) has created a source plugin that uses the Schema API to make sure Gridsome know what fields that are being used in Sanity CMS.


Read more about the [Schema API](/docs/schema-api/)

## New template configuration

Previously, each content type has been given a route in order to assign it to a template with the same name inside the `src/templates` directory. Routes were spread across many plugin options and some also hidden within plugins. **The new `templates` config tries to collect all content type routes in a single property in `gridsome.config.js`.**

To create a route for a [collection](/docs/collections/) you simply add `CollectionName: '/any/route/:title'` to the new [templates](/docs/templates/)  config. Here are some examples:

```js
// gridsome.config.js
module.exports = {
  templates: {
  	// These will look for and use src/templates/{collection}.vue
    Post: '/blog/:year/:month/:title',
    Author: '/author/:name',

    // Templates for source plugins should also be configured here:
    WordPressPost: '/blog/:year/:month/:day/:slug',
    WordPressTag: '/tag/:slug',

    // Collections can have multiple templates:
    Product: [
      {
        path: '/product/:slug',
        component: './src/templates/Product.vue'
      },
      {
        path: '/product/:slug/reviews',
        component: './src/templates/ProductReviews.vue'
      }
    ]
  }
}
```

**This means: **
- [Source plugins](/plugins) & the [Data store API](/docs/data-store-api/) are only responsible for creating [Collections](/docs/collections/).
- The new [Templates](/docs/templates/) config are used to setup **templates and routes** for collections.


Read more about the new [templates configuration](/docs/templates/)

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

[Learn more about Dynamic Routing](/docs/dynamic-routing/)

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

[Learn more about overriding App.vue](/docs/overriding-app/)

## Deprecation notices

Deprecated methods and options will now be listed in the terminal with path to location and sometimes with an URL to documentation.

![Deprecated Messages](./deprecated-messages.png)

## Shareable Network URL

A network URL will now be visible in the terminal. It can be used to test the site on other divices in the same network with hot-reloading etc. This URL will only be active when using the default host, which is `0.0.0.0`, on private networks.

![Shareable url](./shareable-url.png)

## Changes

This release should not have any breaking changes if you upgrade from v0.6. But there are some changes that might have consequences that we have not foreseen. No deprecated methods or options in v0.6 has been removed yet, and they will now be listed in the terminal alongside new deprecations.

#### Trailing slashes for pages and routes

Routes for pages in `./src/pages` and all templates will incude a trailing slash by default. This can be disabled with the [`permalinks`](/docs/config/#permalinkstrailingslash) config.

**You should have a trailing slash in every static `<g-link>` path if you are hosting the site on Netlify or Zeit Now etc. to avoid redirects.** For example:

```html
<g-link to="/about-us/">About us</g-link>
```

#### Renamed methods and GraphQL fields

There are some methods and GraphQL fields that have been renamed. Using the old names will not break your site, but will show deprecation notices in the terminal:

- Use `addMetadata()` instead of `addMetaData()`.
- Use `addCollection()` instead of  `addContentType()`.
- Use `metadata` instead of `metaData` in the GraphQL schema and project config.

#### Deprecated collection methods

The new [Schema API](/docs/schema-api/) is deprecating previous methods for customizing the schema:

- Use `addSchemaResolvers()` instead of `collection.addSchemaField()`.
- `addSchemaTypes()` can be instead of `collection.addReference()`. It's not deprecated yet, but it will be once we find an easier way to define relations.

#### New type for the `$id` variable

The `$id` variable in `<page-query>` for nodes has previously been a `String` type. Even though the `id` field in the schema was of type `ID`. But the `$id` input variable must also be a `ID` type from now on. Gridsome will fix the type for you automatically and show a deprecation notice untill you have updated the query.

[See full change log →](https://github.com/gridsome/gridsome/blob/master/gridsome/CHANGELOG.md)
