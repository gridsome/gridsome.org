# Routing

Gridsome uses [vue-router] (https://router.vuejs.org/) for routing.


## Page routing

All `.vue` files in the `src/pages` directory will become the pages for your
website. The page URL is generated based on the location and name of the file. The path will be lowercased and slugified automatically. Files named `Index.vue` are treated like `index.html` files and will not get a slug.

Examples:

- `/src/pages/Index.vue` will be **/**
- `/src/pages/About.vue` will be **/about**
- `/src/pages/OurTeam.vue` will be **/our-team**
- `/src/pages/features/Index.vue` will be **/features**
- `/src/pages/features/Awesome.vue` will be **/features/awesome**


## Routing for data source plugins

Data sources adds routing automatically with settings. These could be different for each plugin so check the plugin documentation how to use route.

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        route: '/blog/:year/:month/:day/:slug'
      }
    }
  ]
}
```

## Route params
Available route params are `:id`, `:title`, `:slug` and any custom fields from the current `node`. 
The `node.date` field has a set of shorthand helpers; `:year`, `:month` and `:day`. Access field values in deep objects or arrays by separating properties or indexes with double underscores (`__`). Field values are slugified by default, but the original value will be available as **{fieldname}_raw**.

- `:id` resolves to `node.id`
- `:value` resolves to `node.fields.value`
- `:value_raw` resolves to `node.fields.value` (Value without slugify)
- `:object__value` resolves to `node.fields.object.value`
- `:array__3__id` resolves to `node.fields.array[3].id`

## Routing for custom data sources
When you add a custom data source you need to use the `route` option inside `addContentType()` **OR** use `path` option inside `addNode()`. `route` will be used for all posts and `path` will be set per post. It's only possible to use one of them. If both are used `route` will be prioritized.

Learn more about [fetching custom data here](/docs/fetching-data)

```js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://api.example.com/posts')

    const contentType = store.addContentType({
      typeName: 'BlogPosts'
      route: 'blog/:slug'  // add this for one dynamic route...
    })

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title
        path: `blog/${item.slug}` //... or this for a route per item
      })
    }
  })
}
```

