# Data Store API

The Data Store API lets you insert your own data into the Gridsome store. You will then be able to access it through GraphQL in your components.

```js
function MySourcePlugin (api) {
  api.loadSource(store => {
    // add your sources here
  })
}

module.exports = MySourcePlugin
```

## Create content types and nodes

### store.addContentType(options)

Add a new content type to store. Create a Vue components in the `src/templates` folder to have a template for this type. Returns a collection which can have nodes. [Read more about templates](/docs/templates).

###### Arguments

- options `object`
  - typeName `string` *Required GraphQL schema type and template name.*
  - route `string` *Optional dynamic route.*
  - refs `object` *Create references to other nodes.*

###### Usage

```js
api.loadSource(store => {
  store.addContentType({
    typeName: 'BlogPost',
    route: '/:year/:month/:day/:slug'
  })
})
```

### store.getContentType(typeName)

Get a content type previously created.

###### Arguments

- typeName `string` *GraphQL schema type name.*

### collection.addNode(options)

###### Arguments

- options `Object` *Required.*
  - title `string` *Required.*
  - slug `string` *Custom slug. Fallbacks to a slugified `title`.*
  - path `string` *Optional path to use when not having a dynamic route.*
  - date `string` *The date. Fallbacks to current date.*
  - content `string` *Optional content.*
  - excerpt `string` *Optional excerpt.*
  - fields `Object` *Custom fields.*

###### Usage

```js
api.loadSource(store => {
  const posts = store.addContentType({
    typeName: 'BlogPost'
  })

  posts.addNode({
    title: 'My first blog post',
    date: '2018-11-02',
    content: 'Lorem ipsum dolor sit amet, consectetur...',
    fields: {
      tags: ['awesome-post']
    }
  })
})
```

### collection.addReference(fieldName, options)

###### Arguments

- fieldName `string` *The field name*
- options `Object`
  - typeName `string` *GraphQL schema type to reference.*
  - key `string` *The foreign key to match local field.*

###### Usage

This example creates two content types: `Author` and `BlogPost`. The `ref` option for `BlogPost` is using its `author` field to make a reference to an `Author` node. The `author` field contains an author ID, so we use `'id'` as `key` to make the store look for an author with that ID.

```js
api.loadSource(store => {
  const authors = store.addContentType({
    typeName: 'Author'
  })

  const posts = store.addContentType({
    typeName: 'BlogPost',
    refs: {
      author: {
        key: 'id',
        typeName: 'Author'
      }
    }
  })

  authors.addNode({
    id: '1',
    title: item.title
  })

  posts.addNode({
    title: item.title,
    fields: {
      author: '1'
    }
  })
})
```

The referring node will be available in a `ref` field in your schema.

```graphql
query BlogPost ($path: String!) {
  blogPost (path: $path) {
    title
    author {
      title
      path
    }
  }
}
```

### collection.addSchemaField(fieldName, handler)

Extend the GraphQL schema with a custom field for a node type.

###### Arguments

- fieldName `string` *The field name to create on node.*
- handler `Function` *A function which returns an object with a GraphQL field and resolver.*

###### Usage

```js
api.loadSource(store => {
  const contentType = store.getContentType('OtherType')

  contentType.addSchemaField('myField', ({ graphql }) => ({
    type: graphql.GraphQLString,
    resolve () {
      return 'value'
    }
  }))
})
```

## Taxonomies and terms

### store.addTaxonomy(options)

*Comming soon...*

### taxonomy.addTerm(options)

*Comming soon...*

## Examples

### Basic usage

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
