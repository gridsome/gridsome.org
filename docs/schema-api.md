# Schema API

> This API lets you define your own schema types to have persisted fields.

Gridsome generates the GraphQL schema for metadata and collections based on the data which is discovered on startup. That's great for simple projects but will often lead to errors with for example missing fields because content has been removed in an external source. This API lets you define your own schema types to have persisted fields.

The Schema API can be used in the `loadSource` and `createSchema` hooks.

### addSchemaTypes(types)

- types `string | array` *Required.*

Schema types can be added as an [SDL](https://graphql.org/learn/schema/) string or by using the schema factory.

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

### addSchemaResolvers(resolvers)

- resolvers `object` *Required.*

Add custom resolvers for fields defined in `addSchemaTypes` or infered by Gridsome.

This example creates a `fullName` field on a `User` type which merged two fields:

```js
api.loadSource(({ addSchemaResolvers }) => {
  addSchemaResolvers({
    User: {
      fullName: obj => `${obj.firstName} ${obj.lastName}`
    }
  })
})
```

This example creates a `title` field on a `Post` type with an argument to uppercase the returned value:

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

### addSchema(schema)

- schema `GraphQLSchema` *Required.*

Add a custom GraphQL schema that will be merged with the internal schema.

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

## Built-in types

- `Image`
- `File`
- `Date`

## Type extensions

### @infer

Custom schemas for meta data and collections will not infer any more field types from the source by default. Add the `@infer` extension to add discovered fields that isn't defined in the custom schema.

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
