# Schema API

> This API lets you define your own schema types to have persisted fields.

Gridsome generates the GraphQL schema for metadata and collections based on the data which is discovered on startup. That's great for simple projects but will often lead to errors with for example missing fields because content has been removed in an external source. This API lets you define your own schema types to have persisted fields.

The Schema API can be used in the `loadSource` and `createSchema` hooks.

## Add custom schema types

### addSchemaTypes(types)

- types `string | array` *Required.*

Schema types can be added as an [SDL](https://graphql.org/learn/schema/) string or by using the  [factory methods](/docs/schema-api/#factory-methods). Types for collections **must** implement the `Node` interface. And Gridsome will not infer field types for custom fields unless the [`@infer`](/docs/schema-api/#infer) directive is used.

```js
api.loadSource(({ addSchemaTypes }) => {
  addSchemaTypes(`
    type Post implements Node {
      title: String
    }
  `)
})
```

```js
api.loadSource(({ addSchemaTypes, schema }) => {
  addSchemaTypes([
    schema.createObjectType({
      name: 'Post',
      interfaces: ['Node'],
      fields: {
        title: 'String'
      }
    })
  ])
})
```

[Read more about Schemas and Types](https://graphql.org/learn/schema/)

## Add custom field resolvers

### addSchemaResolvers(resolvers)

- resolvers `object` *Required.*

Resolvers are methods that are executed on each field in the query. The default resolvers for types like `String` or `Int` simply return the value without any modifications. Resolvers for fields that are referencing another node are interacting with the internal store to return data from the requested node.

Use the `addSchemaResolvers()` action to add new fields or override existing fields. The resolver method will receive four arguments that can be used:

```js
addSchemaResolvers({
  TypeName: {
    fieldName(obj, args, context, info) { ... }
  }
})
```

- `obj` The results from the resolver on the parent field.
- `args` An object with arguments from the query.
- `context` An object with references to the internal store etc.
- `info` Information about the execution state of the query.

[Read more about GraphQL resolvers](https://graphql.org/learn/execution/#root-fields-resolvers)

#### Add a new field with a custom resolver

This example adds a new `fullName` field on the `User` type which merges two fields:

```js
api.loadSource(({ addSchemaResolvers }) => {
  addSchemaResolvers({
    User: {
      fullName(obj) {
        return `${obj.firstName} ${obj.lastName}`
      }
    }
  })
})
```

#### Add a new field with arguments

This example adds a `title` field on the `Post` type with an argument to uppercase the returned value:

```js
api.loadSource(({ addSchemaResolvers }) => {
  addSchemaResolvers({
    Post: {
      title: {
        args: {
          uppercased: 'Boolean'
        },
        resolve(obj, args) {
          if (args.uppercased) {
            return obj.title.toUpperCase()
          }
          return obj.title
        }
      }
    }
  })
})
```

Then in a query, use the argument to get an uppercased title:

```graphql
query {
  post {
    title(uppercased: true)
  }
}
```

### addSchema(schema)

- schema `GraphQLSchema` *Required.*

Add a custom GraphQL schema that will be merged with the internal schema.

```js
const { GraphQLSchema } = require('gridsome/graphql')

api.loadSource(({ addSchema }) => {
  addSchema(new GraphQLSchema({
    // ...
  }))
})
```

[Read more about GraphQL schemas](https://graphql.org/graphql-js/type/)

## Type extensions

### @infer

Custom schemas for meta data and collections will not infer any more field types from the source by default. Add the `@infer` extension to add discovered fields that aren't defined in the custom schema.

```graphql
type Post implements Node @infer {
  title: String
}
```

```graphql
type Metadata @infer {
  siteName: String
}
```

## Field extensions

Field extensions extends the default resolvers.

### @proxy

The `@proxy` extension can be used to return a value from another field.

```graphql
type Post implements Node {
  userName: String @proxy(from: "user_name")
}
```

```graphql
type Metadata {
  siteName: String @proxy(from: "other.field")
}
```

### @reference

Fields of another node type will lookup the node by default, but no arguments will be inherited from the internal resolvers. Use

```graphql
type Post implements Node {
  author: Author @reference(by: "slug")
}
```

## Factory methods

### schema.createObjectType(options)

- options `object` *Required.*
  - name `string` *Required.*
  - fields `object` *Required.*
  - extensions `object`
  - interfaces `string[]`

### schema.createUnionType(options)

- options `object` *Required.*
  - name `string` *Required.*
  - types `string[]` *Required.*

### schema.createEnumType(options)

- options `object` *Required.*
  - name `string` *Required.*
  - values `object` *Required.*

### schema.createInterfaceType(options)

- options `object` *Required.*
  - name `string` *Required.*
  - fields `object` *Required.*

### schema.createInputType(options)

- options `object` *Required.*
  - name `string` *Required.*
  - fields `object` *Required.*

## Example usage

### Defining a collection schema

```graphql
type Post implements Node {
  title: String
  publishedAt: Date
  author: Author
  content: String
}
type Author implements Node {
  name: String
  picture: Image
  description: String
}
```

*Custom schema types for a collection **must** implement the `Node` interface.*

### Defining the metadata schema

```graphql
type Metadata {
  siteName: String
}
```
