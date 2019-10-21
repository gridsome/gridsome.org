# Collections

> A collection is a group of nodes and each node contains fields with custom data. Collections are useful if you are going to have blog posts, tags, products etc. on your site.

## Adding a collection

Collections can be added by [source plugins]() or you can do it yourself with the [Data Store API](/docs/data-store-api/). The collections are stored in a local in-memory data store during `development` and `build`. Nodes can be **sourced** from local files (Markdown, JSON, YAML etc.) or any external APIs.

![Collections](./images/node-pages.png)

## Add collections with Source plugins

The easiest way to add collections to Gridsome is with **source plugins**. This example creates collections from a **WordPress site**. The `typeName` option for source plugins are usually for prefixing collection names that the plugin adds.

```js
// gridsome.config.js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'YOUR_WEBSITE_URL',
        typeName: 'WordPress',
      }
    }
  ]
}
```

You can browse **source plugins** on the [plugin page](/plugins).


## Add collections with Data Store API

You can manually add collections from any external APIs. This example creates a collection named `Post` that fetches content from an API and adds the results as nodes to the collection.

```js
// gridsome.server.js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection('Post')

    const { data } = await axios.get('https://api.example.com/posts')

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        content: item.content
      })
    }
  })
}
```

Learn more about the [Data Store API](/docs/data-store-api/).


## Collections in GraphQL

Each collection will add two root fields to the [GraphQL schema](/docs/data-layer/) that are used to retrieve nodes in your pages. The field names are auto-generated based on the collection name. If you name the collection `Post`, you will have these fields available in the schema:

- `post` Get a single node by `id`.
- `allPost` Get a list of nodes. *(Can be sorted and filtered.)*

#### Automatic schema generation

Each collection type in the schema will have fields that are auto-generated based on discovered data on startup. That's great for simple projects but will often lead to errors with for example missing fields because content has been removed in an external source. You can use the [Schema API](/docs/schema-api/) to define your own schema that will persist when data changes.

*Custom schema types for a collection **must** implement the `Node` interface.*

#### Explore available types and fields

You can browse available fields by opening the **schema** tab in the [GraphQL explorer](/docs/data-layer#the-graphql-explorer).

Read more about how to [query nodes in GraphQL](/docs/querying-data/).

## Templates for collections

[Templates](/docs/templates/) are used to create single pages for **nodes** in a collection. Nodes need a corresponding page in order to be presented on its own URL.

[Learn more here](/docs/templates/)
