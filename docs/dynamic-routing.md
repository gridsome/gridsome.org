# Dynamic Routing

> Dynamic routes are useful for pages that only need client-side routing. For example user pages that fetches info from an external API in production based on a segment in the URL.

## File-based dynamic routes

Dynamic pages is used for client-side routing. Route parameters can be placed in file and directory names by wrapping the name in square brackets. For example:

- `src/pages/user/[id].vue` becomes `/user/:id`.
- `src/pages/user/[id]/settings.vue` becomes `/user/:id/settings`.

At build time, this will generate `user/_id.html` and `user/_id/settings.html` and you must have rewrite rules to make them work properly.

Pages with dynamic routes have lower priority than fixed routes. For example, if you have a `/user/create` and a `/user/:id` route, then the `/user/create` route will be prioritized.

## Programmatic dynamic routes

Create pages with dynamic routes programmatically for more advanced paths. Dynamic parameters are specified by having a `:` in front of a segment. And each parameter can have a custom regular expression to match only digits or certain values.

```js
module.exports = function (api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/user/:id(\\d+)',
      component: './src/templates/MyPage.vue'
    })
  })
}
```

[Read more about the Pages API](/docs/pages-api)

## Generating rewrite rules

Gridsome is not able to generate HTML files for every possible variation of a dynamic route. Which means the URLs most likely will show a 404 page when visited directly. Instead, Gridsome generates one HTML file which can be used in a rewrite rule. For example, a route like `/user/:id` will generate a HTML file located at `/user/_id.html`. You can have a rewrite rule to map all paths matching `/user/:id` to that file.

Rewrite rules must be generated manually because every server type has its own syntax. The `redirects` array in the `afterBuild` hook contains all necessary rewrite rules that should be generated.

```js
const fs = require('fs')

module.exports = {
  afterBuild ({ redirects }) {
    for (const rule of redirects) {
      // rule.from   - The dynamic path
      // rule.to     - The HTML file path
      // rule.status - 200 if rewrite rule
    }
  }
}
```
