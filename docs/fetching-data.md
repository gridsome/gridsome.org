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

Import data from any content local files to the GraphQL data layer with the [Data store API](/docs/data-store-api/). To import them you need a `gridsome.server.js` file in the root folder of your Gridsome project.


Here is an example `gridsome.server.js` file that imports data:

```js
const glob = require('globby')
const fs = require('fs-extra')

module.exports = function (api) {
  api.loadSource(async actions => {
    // files should be filtered by its data type (markdown, json, yaml, ...)
    const files = await glob('content/posts/*', { cwd: api.context })

    const collection = actions.addCollection({
      typeName: 'BlogPosts'
    })

    await Promise.all(
      files.map(async file => {
        const content = await fs.readFile(file, 'utf8')
        const item = buildItem(content)
        collection.addNode({
          id: item.id,
          title: item.title
        })
      })
    )
  })

  // buildItem should build the item from the content accordingly to its data type (markdown, json, yaml, ...)
  function buildItem (content) {}
}
```

> Data is fetched when starting a development server or start of a production build. You need to restart the server for the changes in **gridsome.server.js** to take effect.

### Markdown
*..contribute*

### Images
*..contribute*

### YAML
*..contribute*

### CSV
*..contribute*

### JSON

```js
const files = await glob('content/posts/*.json', { cwd: api.context })

function buildItem (content) {
  return JSON.parse(content)
}
```
