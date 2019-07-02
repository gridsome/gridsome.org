# Collections
**Collections are data added to the local GraphQL data layer**. A collection can be for example Blog posts, Tags, Products etc.
You can browse available collections in the **schema tab** inside the local [GraphQL explorer](/docs/data-layer#the-graphql-explorer).


## Adding collections

Collections can be added from local Markdown files, Headless CMSs, content APIs etc. This can be done with [Source Plugins]() or with [Data store API]().

This examples creates a collection with the **Data Store API**:

```js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://api.example.com/posts')

    const contentType = store.addCollection('Post')

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title
      })
    }
  })
}
```

When a collection is added you get two schemas in the GraphQL data layer..
- `Post` that 
- `allPost` 


Learn more about the Data Store API.

## Looping collections

Looping collections can be done in any Pages and Components.
To loop a collection you need to query a `allCollection`. You can also add pagination to loops.

This example gets all posts from a `Post` collection:

```html
<template>
  <Layout>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      {{ edge.node.id }}
      {{ edge.node.title }}
    </div>    
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node { 
        id
        title
      }
    }
  }
}
</page-query>
```

## Collection routes

Define collections routes in `gridsome.config.js`. Gridsome will by default look for a `CollectionName.vue` file in **src/templates** and use that as **template** for the collection route.

```js
// gridsome.config.js
module.exports = {
  collectionRoutes: {
  	Post : '/blog/:year/:month/:title',
    Tag: {
      path: '/tags/:title',
      component: './src/templates/CustomTag.vue'
    }
	}
}
```

### Route params

Any custom field from the current `node` will be possible to use as route params. The `node.date` field has a set of shorthand helpers; `:year`, `:month` and `:day`. Access field values in deep objects or arrays by separating properties or indexes with double underscores (`__`). Field values are slugified by default, but the original value will be available as **{fieldname}_raw**.

- `:id` resolves to `node.id`
- `:value` resolves to `node.value` *(slugified value)*
- `:value_raw` resolves to `node.value` *(original value)*
- `:object__value` resolves to `node.object.value`
- `:array__3__id` resolves to `node.array[3].id`


## Collection templates

The `page-query` in templates also has a set of variables that can be used in the query. Any custom fields from the current `node` are available as variables. Access field values in deep objects or arrays by separating properties or indexes with double underscores (`__`).

- `$id` resolves to `node.id`
- `$value` resolves to `node.fields.value`
- `$object__value` resolves to `node.fields.object.value`
- `$array__3__id` resolves to `node.fields.array[3].id`

```html
<template>
  <div>
  	<h1 v-html="$page.post.title" />
  	<div v-html="$page.post.content" />
  </div>
</template>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    title
    content
  }
}
</page-query>
```