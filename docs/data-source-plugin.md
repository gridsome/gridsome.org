# Use a Data source plugins
Gridsome data source plugins are added in `gridsome.config.js`. You can find available data source plugins in the [Plugins directory](/plugins).


Here is an example of the [file-system](/plugins/source-filesystem) source added to config:
```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        index: ['README'],
        path: 'docs/**/*.md',
        typeName: 'DocPage',
      }
    },
    {
      // another data source
    },
  ]
}
```

`typeName` will be the name of the GraphQL collection and needs to be unique. This example will add a **DocPage** collection.

Every data source has different options, so take a look at their documentation to learn more.