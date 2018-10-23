# Data Store API

```js
// gridsome.server.js

module.exports = function (api) {
  api.loadSource(store => {
    // add your sources here
  })
}
```

## Create content types and nodes

**store.addContentType(options)**

Options:

- typeName `string` *Required GraphQL schema type and template name.*
- route `string` *Optional dynamic route.*
- refs `object` *Create references to other nodes.*

**collection.addNode(options)**

Options:

- title `string` *Required.*
- slug `string` *Custom slug. Fallbacks to a slugified `title`.*
- path `string` *Optional path to use when not having a dynamic route.*
- date `string` *The date. Fallbacks to current date.*
- content `string` *Optional content.*
- excerpt `string` *Optional excerpt.*
- fields `object` *Custom fields.*

## Taxonomies and terms

**store.addTaxonomy(options)**

*Comming soon...*

**taxonomy.addTerm(options)**

*Comming soon...*

## Examples

### Basic usage

This example creates a `MyData` content type and just adds a single node to it.

```js
module.exports = function (api) {
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
}
```

You will then be able to query that data in the `page-query` and `static-query` tags in your Vue components with a query like this:

```graphql
query MyData {
  allMyData {
    edges {
      node {
        title
        fields {
          customField
        }
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
        title: item.title,
        date: item.date,
        content: item.content
      })
    }
  })
}
```

### Referring other nodes

This example creates two content types: `Author` and `BlogPost`. The `ref` option for `BlogPost` is using its `author` field to make a reference to an `Author` node. The `author` field contains an author ID, so we use `'id'` as `key` to make the store look for an author with that ID.

```js
module.exports = function (api) {
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
}
```

The referring node will be available in a `ref` field in your schema.

```graphql
query BlogPost ($path: String!) {
  blogPost (path: $path) {
    title
    refs {
      author {
        title
        path
      }
    }
  }
}
```
