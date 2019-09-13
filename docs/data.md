# Data

## Data store and GraphQL

Data from source plugins are stored in an internal data store. You can use [GraphQL](https://graphql.org/) to access that data in your pages, templates or any other Vue component in your project. GraphQL is a declarative query language especially useful for retrieving only the data you ask for. Which again will result in smaller bundles.

#### Usage in a pages or templates

Start by adding a top-level `<page-query>` block in your Vue component. Then write a [query](https://graphql.github.io/learn/queries/) inside it. The results will be available as a `$page` object in your templates.

Read more about [importing data](/docs/fetching-data/) or the [Data Store API](/docs/data-store-api/)

```html
<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
  </Layout>
</template>

<page-query>
query {
  post(id: "1") {
    title
  }
}
</page-query>
```

Read more about querying data in [pages](/docs/querying-data#query-data-in-pages) or [templates](/docs/querying-data#query-data-in-templates)

#### Usage in any component

`<page-query>` only works for pages and templates. But you can use a `<static-query>` block to retrieve data in any other component. The results will be available as a `$static` object in your templates.

```html
<template>
  <Layout>
    <h1>{{ $static.post.title }}</h1>
  </Layout>
</template>

<static-query>
query {
  post(id: "1") {
    title
  }
}
</static-query>
```

Read more about querying data in [components](/docs/querying-data#query-data-in-components)

## Pages and page context

Every page that is created programmatically can have its own context with any data. The page context will be available as a `$context` object in your templates.

```html
<template>
  <Layout>
    <h1>{{ $context.title }}</h1>
  </Layout>
</template>
```

Read more about the [Pages API](/docs/pages-api/)

## Local JSON and YAML files

Gridsome includes webpack loaders for importing [JSON](https://www.json.org/) and [YAML](https://yaml.org/) files into your components.

```html
<template>
  <Layout>
    <h1>{{ myData.title }}</h1>
  </Layout>
</template>

<script>
import myData from '~/data/my-data.yaml'

export default {
  data () {
    return {
      myData
    }
  }
}
</script>
```
