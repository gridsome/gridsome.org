# Filtering data

Each content type collection in the GraphQL schema has a `filter` argument which can be used to filter the results. You can filter by `id`, `title`, `slug`, `path` or any custom field. Each field type supports different operators.

The syntax for `filter` is based on the [mongodb](https://docs.mongodb.com/manual/reference/operator/query/) query syntax.

## String fields

| Operator | Description |
|----------|-------------|
| **eq** *(equal)* | Find nodes with field of (strict) equality.
| **ne** *(not equal)* | Find nodes with field not equal to provided value.
| **in** | Find nodes with field matching any of the provided values.
| **nin** *(not in)* | Find nodes with field not matching any of the provided values.
| **regex** | Filter nodes with property matching provided regular expression.
| **len** *(length)* | Filter nodes which have a string field of specified length.

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

This example will query nodes where `id` is **1** or **2**.

## Date fields

| Operator | Description |
|----------|-------------|
| **gt** *(greater than)* | Find nodes with field greater than provided value.
| **gte** *(greater or equal)* | Find nodes with field greater or equal to provided value.
| **lt** *(less than)* | Find nodes with field less than provided value.
| **lte** *(less than or equal)* | Find nodes with field less than or equal to provided value.
| **dteq** *(equal dates)* | Filter nodes by date property equal to provided date value.
| **between** | Find nodes with field value between provided values.

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

This example will query only nodes where `date` is greater than or equal to **2017**.

## Boolean fields

| Operator | Description |
|----------|-------------|
| **eq** *(equal)* | Find nodes with field of (strict) equality.
| **ne** *(not equal)* | Find nodes with field not equal to provided value.
| **in** | Find nodes with field matching any of the provided values.
| **nin** *(not in)* | Find nodes with field not matching any of the provided values.

```graphql
query {
  allPost (filter: { featured: { eq: true }}) {
    edges {
      node {
        title
        featured
      }
    }
  }
}
```

This example will query only nodes where `featured` is **true**.

## Number fields

| Operator | Description |
|----------|-------------|
| **eq** *(equal)* | Find nodes with field of (strict) equality.
| **ne** *(not equal)* | Find nodes with field not equal to provided value.
| **in** | Find nodes with field matching any of the provided values.
| **nin** *(not in)* | Find nodes with field not matching any of the provided values.
| **gt** *(greater than)* | Find nodes with field greater than provided value.
| **gte** *(greater or equal)* | Find nodes with field greater or equal to provided value.
| **lt** *(less than)* | Find nodes with field less than provided value.
| **lte** *(less than or equal)* | Find nodes with field less than or equal to provided value.
| **between** | Find nodes with field value between provided values.

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

This example will query only nodes with `price` value between **49** and **99**.

## Array fields

| Operator | Description |
|----------|-------------|
| **size** | Filter nodes which have an array property of specified size.
| **contains** | Find nodes with field containing the provided value.
| **containsAny** | Find nodes with field containing any of the provided values.
| **containsNone** | Find nodes with field containing none of the provided values.

```graphql
query {
  allPost (filter: { keywords: { contains: ["gridsome"] }}) {
    edges {
      node {
        title
        keywords
      }
    }
  }
}
```
This example will query only nodes which has the **gridsome** `keyword`.
