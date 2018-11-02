# Plugin API

## Server API

Create a file named `gridsome.server.js` in your plugin root folder which exports a function. The function will receive an API which allows you to hook into various parts of Gridsome. The second argument is options from the plugin entry in `gridsome.config.js`.

```js
function MyPlugin (api, options) {
  // ...
}

MyPlugin.defaultOptions = () => ({
  option: 'value'
})

module.exports = MyPlugin
```

The file can also export a class:

```js
class MyPlugin {
  static defaultOptions () {
    return {
      option: 'value'
    }
  }

  constructor (api, options) {
    // ...
  }
}

module.exports = MyPlugin
```

### api.loadSource(fn)

Load data from local files or external APIs and create content types and nodes of it. The data will then be available in your GraphQL queries.

[Read more about the Data Store API](/docs/data-store-api)

### api.chainWebpack(fn)

A function that will receive an instance of ChainableConfig powered by [webpack-chain](https://github.com/neutrinojs/webpack-chain).

###### Usage

```js
api.chainWebpack(config => {
  // modify config here
})
```

### api.createSchema(fn)

Create a custom GraphQL schema which will be merged with the Gridsome schema.

###### Usage

```js
api.createSchema(graphql => {
  return new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'CustomRootQuery',
      fields: {
        // ...
      }
    })
  })
})
```

### api.setClientOptions(options)

Set custom options for the client. Will use options from the plugin entry if not used.

###### Arguments

- options `any` Any value which can be serialized by `JSON.stringify`.

###### Usage

```js
module.exports = function (api, options) {
  api.setClientOptions({
    customOption: options.value
  })
}
```

## Hooks

### api.beforeBuild(fn)

### api.afterBuild(fn)

## Client API

Create a file named `gridsome.client.js` in your plugin root folder which exports a function. The function will receive the Vue instance, plugin options and a context. The context has references to options for the Vue app, the VueRouter instance and VueMeta settings. The file is loaded on the server and in the browser as default.

```js
/**
 * @param Vue                 Vue instance
 * @param options             Plugin options
 * @param context.appOptions  Options for the Vue instance
 * @param context.router      The router instance
 * @param context.head        VueMeta info objet
 * @param context.isClient
 * @param context.isServer
 */
export default function (Vue, options, context) {
  // ...
}
```
