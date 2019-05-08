# Fetching data
Fetch content from local files or external APIs and store the data in a local database. A unified GraphQL Data layer lets you extract only the data you need from the database and use it in your Vue.js components.

![Fetching data](./images/fetching-data.png)


## Use data source plugins
Gridsome data source plugins are added in `gridsome.config.js`. You can find available data source plugins in the [Plugins directory](/plugins).


Here is an example of the [file-system](/plugins/source-filesystem) source added to config:
```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        index: ['README'],
        path: 'docs/**/*.md',
        typeName: 'DocPage',
      }
    },
    {
      // another data source
    },
  ]
}
```

`typeName` will be the name of the GraphQL collection and needs to be unique. This example will add a **DocPage** collection.

Every data source has different options, so take a look at their documentation to learn more.


## Add data from APIs

Gridsome adds data to the GraphQL data layer with the **Data store API** and the `api.loadSource` function. To use the API you need a `gridsome.server.js` file in the root folder of your Gridsome project.



Learn more about the [Data store API here](/docs/data-store-api)

A typical `gridsome.server.js` will look something like this:

```js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://api.example.com/posts')

    const contentType = store.addContentType({
      typeName: 'BlogPosts'
    })

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title
      })
    }
  })
}
```

> Data is feched when starting a development server or start of a production build. You need to restart server for changes in **gridsome.server.js** to take effect.


## Add data from local files
..

### Markdown
..

### Images
..

### YAML

#### Using import

Here is a simple example on how you can use YAML files within .vue templates:
1. Create a YAML file in `/src/data` folder. Let it be `products.yaml`
2. Add `import products from @/data/products.yaml` before `export default` function.
3. Add the data from the YAML file to the data layer by creating a new object `products` and defining it with the just imported `products`.

The code will look like this:
```html
<template>
  <ul v-for="product in products">
    <li v-html="product.title"/>
  </ul>
</template>

<script>
import products from '@/data/products.yaml'

export default {
  data() {
    return {
      products: products
    }
  }
}
</script>
```

#### Using GraphQL

To do the same with GraphQL you need to use `gridsome.server.js`. Your file should look like this:

``` JS
const path = require('path')
const fs = require('fs-extra')
const yaml = require('js-yaml')

module.exports = function (api) {
  api.loadSource(async store => {

    const productsPath = path.join(__dirname, 'src/data/products.yaml')
    const productsRaw = await fs.readFile(productsPath, 'utf8')
    const productsJson = yaml.safeLoad(productsRaw)
    const products = store.addContentType({
      typeName: 'Product',
      route: '/product/:id'
    })

    productsJson.forEach(({ id, name: title, ...fields }) => {
      products.addNode({
        id,
        title,
        fields,
        internal: {
          origin: productsPath
        }
      })
    })

  })
}
```

Then you can query `Product` with GraphQL within Vue templates. Like this:
```html
<template>
  <ul v-for="product in $page.products">
    <li><g-link :to="product.path" v-html="product.title"/></li>
  </ul>
</template>

<page-query>
query Products ($path: String!) {
  products: allProduct (path: $path) {
    id
    title
    path
    content
  }
}
</page-query>
```

### CSV
..

### JSON
