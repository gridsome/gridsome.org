# Taxonomy pages

Nodes can have fields which refer to other nodes. The referring nodes have a `belongsTo` field in the GraphQL schema which can be used to list all nodes which are referring to it. This makes it easy to create taxonomy pages.

## Querying referring nodes

Here is an example query from a template for a tag page. The query uses the `belongsTo` field to get all posts which are referring to that tag:

```graphql
query Tag ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        ...on Post {
          title
          path
        }
      }
    }
  }
}
```

The `belongsTo.edges` field is always a union field type which can be any node type.

## `belongsTo` arguments

| Argument | Default | Description |
|----------|---------|-------------|
| **sortBy** | `"date"` | Sort by a node field.
| **order** | `DESC` | Sort order (`DESC` or `ASC`).
| **perPage** | `25` | How many nodes to get.
| **skip** | `0` | How many nodes to skip.
| **page** | `1` | Which page to get.
| **filter** | `{}` | Filter nodes by `id`, `path` or `typeName`.
