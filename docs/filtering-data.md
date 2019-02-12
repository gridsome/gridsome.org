# Filtering data

Each content type collection in the GraphQL schema has a `filter` argument which ca be used to filter the results. You can filter by `id`, `title`, `slug`, `path` or any custom field. Each field type supports different operators.

### String

- **eq** - Filter nodes by property of (strict) equality.
- **ne** - Filter nodes by property not equal to provided value.
- **in** - Filter nodes by property matching any of the provided values.
- **nin** - Filter nodes by property not matching any of the provided values.
- **regex** - Filter nodes by property not equal to provided value.
- **len** - Filter nodes which have a string property of specified length.

```graphql
query {
  allPost (filter: { id: { in: ["1", "2"] }}) {
    edges {
      node {
        title
      }
    }
  }
}
```

### Date

- **gt** - Filter nodes by property greater than provided value.
- **gte** - Filter nodes by property greater or equal to provided value.
- **lt** - Filter nodes by property less than provided value.
- **lte** - Filter nodes by property less than or equal to provided value.
- **dteq** - Filter nodes by date property equal to provided date value.
- **between** - Filter nodes by property between provided values.

```graphql
query {
  allPost (filter: { date: { gte: "2017" }}) {
    edges {
      node {
        title
      }
    }
  }
}
```

### Boolean

- **eq** - Filter nodes by property of (strict) equality.
- **ne** - Filter nodes by property not equal to provided value.
- **in** - Filter nodes by property matching any of the provided values.
- **nin** - Filter nodes by property not matching any of the provided values.

```graphql
query {
  allPost (filter: { featured: { eq: true }}) {
    edges {
      node {
        title
      }
    }
  }
}
```

### Number

- **eq** - Filter nodes by property of (strict) equality.
- **ne** - Filter nodes by property not equal to provided value.
- **in** - Filter nodes by property matching any of the provided values.
- **nin** - Filter nodes by property not matching any of the provided values.
- **gt** - Filter nodes by property greater than provided value.
- **gte** - Filter nodes by property greater or equal to provided value.
- **lt** - Filter nodes by property less than provided value.
- **lte** - Filter nodes by property less than or equal to provided value.
- **between** - Filter nodes by property between provided values.

```graphql
query {
  allProduct (filter: { price: { between: [49, 99] }}) {
    edges {
      node {
        title
        price
      }
    }
  }
}
```

### List

- **size** - Filter nodes which have an array property of specified size.
- **contains** - Filter nodes by property containing the provided value.
- **containsAny** - Filter nodes by property containing any of the provided values.
- **containsNone** - Filter nodes by property containing none of the provided values.

```graphql
query {
  allPost (filter: { tags: { contains: ["1"] }}) {
    edges {
      node {
        title
      }
    }
  }
}
```
