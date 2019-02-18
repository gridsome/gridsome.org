# Data Store API

The Data Store API lets you insert your own data into the GraphQL data layer. You will then be able to access it through GraphQL in your components. **Use this API if you want to build a custom data source connection or a plugin.**

Start by using the `api.loadSource()` hook in `gridsome.server.js`:

```js
module.exports = function (api) {
  api.loadSource(store => {
    // Use Data Store API here
  })
}
```

## Add a content type collection

### `store.addContentType(options)`

Add a new content type to store.

A Vue component in the `src/templates` folder with a filename matching the `typeName` option will be used as a template for all nodes with this type. [Read more about templates](/docs/templates).

##### Arguments

- options `object | string` *Options or just the GraphQL schema type name.*
  - typeName `string` *Required GraphQL schema type and template name.*
  - route `string` *Optional dynamic route.* [Read more about Routing](/docs/routing)

##### Usage

```js
api.loadSource(store => {
  store.addContentType({
    typeName: 'BlogPost',
    route: '/blog/:year/:month/:day/:slug'
  })
})
```

### `store.getContentType(typeName)`

Get a content type previously created.

##### Arguments

- typeName `string` *The GraphQL schema type name.*

## Add nodes to collections

### `collection.addNode(options)`

##### Arguments

- options `Object` *Required.*
  - title `string` *Required.*
  - id `string` *A unique id for this content type.*
  - slug `string` *Custom slug. Fallbacks to a slugified `title`.*
  - path `string` *Optional path to use when not having a dynamic route.*
  - date `string` *The date. Fallbacks to current date.*
  - content `string` *Optional content.*
  - excerpt `string` *Optional excerpt.*
  - fields `object` *Custom fields.*

##### Usage

```js
api.loadSource(store => {
  const posts = store.addContentType({
    typeName: 'BlogPost',
    route: '/blog/:year/:slug'
  })

  posts.addNode({
    title: 'My first blog post',
    date: '2018-11-02',
    fields: {
      myField: 'My value'
    }
  })
})
```

## Referencing other nodes

### `store.createReference(typeName, id)`

A helper function for creating references to other nodes.

##### Arguments

- typeName `string | object` *The node typeName to reference or the node instance.*
- id `string | array` *The node id to reference (or ids if multiple nodes).*

##### Usage

This example creates two content types: `Author` and `Post`. The `author1` and `author2` fields on `Post` will both have a reference to the same author.

```js
api.loadSource(store => {
  const authors = store.addContentType('Author')
  const posts = store.addContentType('Post')

  const author = authors.addNode({
    id: '1',
    title: 'The author'
  })

  posts.addNode({
    title: 'The post',
    fields: {
      author1: store.createReference('Author', '1')
      author2: store.createReference(author)
    }
  })
})
```

The field will contain the referred node fields:

```graphql
query BlogPost ($id: String!) {
  blogPost (id: $id) {
    title
    author1 { title }
    author2 { title }
  }
}
```

### `collection.addReference(fieldName, typeName)`

Make a root field for all nodes in collection referencing to another node.

##### Arguments

- fieldName `string` *The field name.*
- typeName `string` *GraphQL schema type to reference.*

##### Usage

```js
api.loadSource(store => {
  const posts = store.addContentType('Post')

  posts.addReference('author', 'Author')

  posts.addNode({
    title: 'The post',
    fields: {
      author: '1' // Will reference to an author with id '1'
    }
  })
})
```

## Custom GraphQL fields

### `collection.addSchemaField(fieldName, fn)`

Extend the GraphQL schema with a custom field for a node type.

##### Arguments

- fieldName `string` *The field name to create on node.*
- fn `Function` *A function which returns an object with a GraphQL field and resolver.*

##### Usage

```js
api.loadSource(store => {
  const posts = store.addContentType('Post')

  posts.addSchemaField('myField', ({ graphql }) => ({
    type: graphql.GraphQLString,
    args: {
      upperCase: { type: graphql.GraphQLBoolean, defaultValue: false }
    },
    resolve (node, args) {
      const value = node.fields.myField

      if (args.upperCase) {
        return value.toUpperCase()
      }

      return value
    }
  }))
})
```

```graphql
query Post ($id: String!) {
  blogPost (id: $id) {
    myField (upperCase: true)
  }
}
```

Read more about [GraphQL resolvers](https://graphql.org/learn/execution/#root-fields-resolvers).

## Example usage

### Basic

This example creates a `MyData` content type and just adds a single node to it.

```js
api.loadSource(store => {
  const contentType = store.addContentType({
    typeName: 'MyData'
  })

  contentType.addNode({
    title: 'Lorem ipsum dolor sit amet.',
    fields: {
      customField: '...'
    }
  })
})
```

You will then be able to query that data in the `page-query` and `static-query` tags in your Vue components with a query like this:

```graphql
query MyData {
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
  api.loadSource(async store => {
    const { data } = await axios.get('https://api.example.com/posts')

    const contentType = store.addContentType({
      typeName: 'BlogPosts'
      route: '/blog/:year/:slug' // optional
    })

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        date: item.date,
        content: item.content
      })
    }
  })
}
```
