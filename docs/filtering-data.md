# Filtering data

Each content type collection in the GraphQL schema has a `filter` argument which ca be used to filter the results. You can filter by `id`, `title`, `slug`, `path` or any custom field. Each field type supports different operators.


## String

- **eq** - (Equal) Filter nodes by property of (strict) equality.
- **ne** - (Not qual) Filter nodes by property not equal to provided value.
- **in** - (In) Filter nodes by property matching any of the provided values.
- **nin** - (Not in) Filter nodes by property not matching any of the provided values.
- **regex** - Filter nodes by property not equal to provided value.
- **len** - (Length) Filter nodes which have a string property of specified length.

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
This example will query nodes where `id` is **1** and **2**.


## Date

- **gt** - (Greater than) Filter nodes by property greater than provided value.
- **gte** - (Greater or equal) Filter nodes by property greater or equal to provided value.
- **lt** - (Less than) Filter nodes by property less than provided value.
- **lte** - (Less than or equal) Filter nodes by property less than or equal to provided value.
- **dteq** - (Equal) Filter nodes by date property equal to provided date value.
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
This example will query only nodes where `date` is greater than or equal to **2017**.


## Boolean

- **eq** - (Equal) Filter nodes by property of (strict) equality.
- **ne** - (Not equal) Filter nodes by property not equal to provided value.
- **in** - (In) Filter nodes by property matching any of the provided values.
- **nin** - (Not in) Filter nodes by property not matching any of the provided values.

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


## Number

- **eq** - *(Equal)* Filter nodes by property of (strict) equality.
- **ne** - *(Not equal)* Filter nodes by property not equal to provided value.
- **in** - *(In)* Filter nodes by property matching any of the provided values.
- **nin** - *(Not in)* Filter nodes by property not matching any of the provided values.
- **gt** - *(Greater than)* Filter nodes by property greater than provided value.
- **gte** - *(Greater or equal)* Filter nodes by property greater or equal to provided value.
- **lt** - *(Less than)* Filter nodes by property less than provided value.
- **lte** - *(Less than or equal)* Filter nodes by property less than or equal to provided value.
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
This example will query only nodes with `price` value between 49 and 99.

## Lists

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
        tags
      }
    }
  }
}
```