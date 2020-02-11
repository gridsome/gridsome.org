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
In order to import data from Markdown files, you'll need both a Gridsome [**source plugin**](https://gridsome.org/plugins/) to read the data source, and a **transformer plugin** to convert the Markdown into HTML.

Here's an example; install both the Gridsome Source Filesystem plugin, and the Remark transformer plugin:

**Yarn:**

```
yarn add @gridsome/transformer-remark
yarn add @gridsome/source-filesystem
```

or **NPM:**

```
npm install @gridsome/transformer-remark
npm install @gridsome/source-filesystem
```

Once they've been added to the project, add the plugin and transformer to your `gridsome.config.js`:

```
plugins: [
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'posts/**/*.md',
      typeName: 'markdownPost',
      remark: {
        //Config options can be added here
      }
    }
  }
],
transformers: {
  remark: {
    //Config options can be added here
  }
}
```

Be sure that the `path` property is where the markdown files are located in your project. You'll probably want to add a [template](https://gridsome.org/docs/templates/) to display your markdown files as well.

Also, note that `typeName` will be the unique name of the GraphQL collection, used to query this content. Finally, bear in mind that you'll need to restart the server and refresh the GraphQL playground after making changes.


### Images
*..contribute*

### YAML
*..contribute*

### CSV
*..contribute*

### JSON
