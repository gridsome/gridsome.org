# Data Store API

The Data Store API lets you insert your own data into the GraphQL data layer. You will then be able to access it through GraphQL in your components. **Use this API if you want to build a custom data source connection or a plugin.**

Start by using the `api.loadSource()` hook in `gridsome.server.js`:

```js
module.exports = function (api) {
  api.loadSource(actions => {
    // Use Data Store API here
  })
}
```

## Add a collection

### actions.addCollection(options)

- options `object | string` *Options or just a GraphQL schema type name.*
  - typeName `string` *Required GraphQL schema type and template name.*

```js
api.loadSource(actions => {
  actions.addCollection('BlogPost')
})
```

### actions.getCollection(typeName)

- typeName `string` *The GraphQL schema type name.*

Get a collection previously created.

## Add nodes to collections

### collection.addNode(options)

- options `Object` *Required.*
  - id `string` *A unique id for this collection.*
  - ...fields `object` *Custom fields.*

```js
api.loadSource(actions => {
  const posts = actions.addCollection({
    typeName: 'BlogPost'
  })

  posts.addNode({
    title: 'My first blog post',
    date: '2018-11-02',
    customField: 'My value'
  })
})
```

## Referencing other nodes

### actions.store.createReference(typeName, id)

- typeName `string | object` *The node typeName to reference or the node instance.*
- id `string | array` *The node id to reference (or ids if multiple nodes).*

A helper function for creating references to other nodes when the schema types are inferred.

This example creates two collections: `Author` and `Post`. The `author1` and `author2` fields on `Post` will both have a reference to the same author.

```js
api.loadSource(({ addCollection, store }) => {
  const authors = addCollection('Author')
  const posts = addCollection('Post')

  const author = authors.addNode({
    id: '1',
    title: 'The author'
  })

  posts.addNode({
    title: 'The post',
    author1: store.createReference('Author', '1'),
    author2: store.createReference(author)
  })
})
```

The field will contain the referenced node fields in the GraphQL schema:

```graphql
query ($id: ID!) {
  blogPost(id: $id) {
    title
    author1 {
      id
      title
    }
    author2 {
      id
      title
    }
  }
}
```

### collection.addReference(fieldName, typeName)

- fieldName `string` *The field name.*
- typeName `string` *GraphQL schema type to reference.*

Make a root field for all nodes in collection referencing to another node.

```js
api.loadSource(actions => {
  const posts = actions.addCollection('Post')

  posts.addReference('author', 'Author')

  posts.addNode({
    title: 'The post',
    author: '1' // Will become a reference to an author with id '1'
  })
})
```

## Example usage

### Basic

This example creates a `MyData` collection and just adds a single node to it.

```js
api.loadSource(actions => {
  const collection = actions.addCollection('MyData')

  collection.addNode({
    title: 'Lorem ipsum dolor sit amet.',
    customField: '...'
  })
})
```

You will then be able to query that data in the `page-query` and `static-query` tags in your Vue components with a query like this:

```graphql
query {
  allMyData {
    edges {
      node {
        title
        customField
      }
    }
  }
}
```

### Fetching external data

You can also fetch external data and add it to the store.

```js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://api.example.com/posts')

    const collection = actions.addCollection('Post')

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        slug: item.slug,
        date: item.date,
        content: item.content
      })
    }
  })
}
```
