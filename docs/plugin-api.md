# Plugin API

## Server API

```js
// gridsome.server.js

module.exports = function (api) {
  // ...
}
```

#### api.loadSource(fn)

Load data from local files or external APIs and create content types and nodes of it. The data will then be available in your GraphQL queries.

[Read more about the store API](/docs/data-store-api)

#### api.generateAsset(options)

- **filename** `String`
- **autoload** `Boolean`
- **content** `String | Function | AsyncFunction`

#### api.chainWebpack(fn)

#### api.createSchema(fn)

#### api.beforeBuild(fn)

#### api.afterBuild(fn)

## Browser API

```js
// gridsome.browser.js

/**
 * @param Vue           Vue instance
 * @param options       Plugin options
 * @param app.options   Options for the Vue instance
 * @param app.router    The router instance
 * @param app.head      VueMeta info objet
 * @param app.isClient
 * @param app.isServer
 */
export default function (Vue, options, app) {
  // ...
}
```
