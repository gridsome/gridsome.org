# Taxonomy pages

Nodes can have fields which refer to other nodes. The referring nodes have a `belongsTo` field in the GraphQL schema which can be used to list all nodes which are referring to it. This makes it easy to create taxonomy pages.

Here is an example query for a template which shows a tag. The query uses `belongsTo` to get all posts which are linked to that tag:

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
