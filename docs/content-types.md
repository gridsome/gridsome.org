# Collections
Collections are data added to the local GraphQL data layer. This can for example be blog posts or tags. Collections can be added with [Source Plugins]() or [Data store API]().

You can browse available collections in the **schema tab** inside the [GraphQL explorer](/docs/data-layer#the-graphql-explorer).


## Create a collection

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

## Listing a collection

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
  posts: allWordPressPosts {
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

Templates are used to display single nodes as pages. 

Setup **template** routes in `gridsome.config.js`. Gridsome will by default look for a `CollectionName.vue` file in **src/templates** folder if a route is set.

```js
//gridsome.config.js
module.exports = {
  routes: {
  	dynamic : {
  		...
  	},
  	collections: {
	  	Post : '/blog/:year/:month/:title',

	    Tag: {
	      path: '/tags/:title',
	      component: './src/templates/CustomTag.vue'
	    }
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