# Server API

Create a `gridsome.server.js` at root in your project or plugin in order to use the Server API. The file must export a function that will receive an API which allows it to hook into various parts of Gridsome. The second argument is options from the plugin entry in `gridsome.config.js`.

> `index.js` will be loaded instead if no `gridsome.server.js` file is found.

```js
function MyPlugin (api, options) {
  // ...
}

MyPlugin.defaultOptions = () => ({
  option: 'value'
})

module.exports = MyPlugin
```

The file can also export a class instead.

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

## api.loadSource(fn)

Load data from local files or external APIs and create content types and nodes of it. The data will then be available in your GraphQL queries.

Usage:

```js
module.exports = function (api) {
  api.loadSource(store => {
    // Use Data Store API here
  })
}
```

[Read more about the Data Store API](/docs/data-store-api)

## api.chainWebpack(fn)

A function that will receive an instance of ChainableConfig powered by [webpack-chain](https://github.com/neutrinojs/webpack-chain).

#### Usage

```js
api.chainWebpack(config => {
  // modify config here
})
```

## api.configureServer(fn)

Gridsome runs an [Express](http://expressjs.com) server during development. Use this hook to add custom endpoints or configure the server.

#### Usage

```js
api.configureServer(app => {
  app.get('/my-endpoint', (req, res) => {
    res.send('Hello, world!')
  })
})
```

Read more about the [Express Application API](https://expressjs.com/en/api.html#app)

## api.createSchema(fn)

Create a custom GraphQL schema which will be merged with the Gridsome schema.

#### Usage

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

## api.setClientOptions(options)

Set custom options for the client. Will use options from the plugin entry if not used.

#### Arguments

- options `any` Any value which can be serialized by `JSON.stringify`.

#### Usage

```js
module.exports = function (api, options) {
  api.setClientOptions({
    customOption: options.value
  })
}
```


## api.beforeBuild(fn)

## api.afterBuild(fn)
