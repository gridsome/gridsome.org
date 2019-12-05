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

Load data from local files or external APIs and create collections for it. The data will then be available in your GraphQL queries.

```js
module.exports = function (api) {
  api.loadSource(actions => {
    // Use Data Store API here
  })
}
```

[Read more about the Data Store API](/docs/data-store-api/)

## api.createSchema(fn)

Create a custom GraphQL schema which will be merged with the Gridsome schema.

```js
api.createSchema(({ addSchema, graphql }) => {
  addSchema(new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'CustomRootQuery',
      fields: {
        // ...
      }
    })
  }))
})
```

[Read more about the Schema API](/docs/schema-api/)

## api.onCreateNode(fn)

Modify or remove a node before its added to the collection.

```js
api.onCreateNode(options => {
  if (options.internal.typeName === 'Post' && !options.published) {
     // return null to filter it out
    return null
  }
  // modify the options directly
  options.slug = slugify(options.title)
  // or return new options
  return { ...options, slug: '...' }
})
```

## api.createPages(fn)

Create pages programmatically from nodes or other data. The handler for this hook will be re-executed when nodes are changed in store. Pages that are not re-created will be garbage collected.

```js
module.exports = function (api) {
  api.createPages(actions => {
    // Create pages
  })
}
```

[Read more about the Pages API](/docs/pages-api/)

## api.createManagedPages(fn)

Create, update and remove pages programmatically from nodes or other data. Unlike `createPages`, this hook will only run once and pages will not be garbage collected.

```js
module.exports = function (api) {
  api.createManagedPages(actions => {
    // Create, update or remove pages
  })
}
```

[Read more about the Pages API](/docs/pages-api/#create-managed-pages)

## api.configureWebpack(fn)

Configure the internal webpack config.

The object will be merged with the internal config if it is an object.

```js
api.configureWebpack({
  // add config here
})
```

If the option is a function, it will get the internal config as its first argument. You can either modify the argument or return a new config object that will override the internal webpack config.

```js
api.configureWebpack(config => {
  return merge({ /* custom config */ }, config)
})
```

## api.chainWebpack(fn)

A function that will receive an instance of ChainableConfig powered by [webpack-chain](https://github.com/neutrinojs/webpack-chain).

```js
api.chainWebpack(config => {
  // modify config here
})
```

## api.configureServer(fn)

Gridsome runs an [Express](http://expressjs.com) server during development. Use this hook to add custom endpoints or configure the server.

```js
api.configureServer(app => {
  app.get('/my-endpoint', (req, res) => {
    res.send('Hello, world!')
  })
})
```

Read more about the [Express Application API](https://expressjs.com/en/api.html#app)

## api.setClientOptions(options)

- options `any` Any value which can be serialized by `JSON.stringify`.

Set custom options for the client. Will use options from the plugin entry if not used.

```js
module.exports = function (api, options) {
  api.setClientOptions({
    customOption: options.value
  })
}
```

## api.beforeBuild(fn)

## api.afterBuild(fn)
