# Importing data
Gridsome lets you import data from any data source into the [GraphQL data layer](/docs/data-layer/).

## Import with source plugins
The easiest way to add data to Gridsome is to use **source plugins**. Gridsome data source plugins are added in `gridsome.config.js`. You can find available data source plugins in the [Plugins directory](/plugins).

Here is an example of the [file-system](/plugins/@gridsome/source-filesystem) source added to config:

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'DocPage'
      }
    }
  ]
}
```

`typeName` will be the name of the GraphQL collection and needs to be unique. This example will add a **DocPage** collection.

Every data source has different options, so take a look at their documentation to learn more.

## Import from APIs

Import data from any content APIs to the GraphQL data layer with the [Data store API](/docs/data-store-api/). To use the API you need a `gridsome.server.js` file in the root folder of your Gridsome project.


Here is an example `gridsome.server.js` file that imports data:

```js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://api.example.com/posts')

    const collection = actions.addCollection({
      typeName: 'BlogPosts'
    })

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title
      })
    }
  })
}
```

> Data is fetched when starting a development server or start of a production build. You need to restart the server for the changes in **gridsome.server.js** to take effect.


## Import from local files
*..contribute*

### Markdown
*..contribute*

### Images
*..contribute*

### YAML
*..contribute*

### CSV
*..contribute*

### JSON
