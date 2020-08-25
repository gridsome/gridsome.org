# Importing data

Gridsome lets you import data from any data source into the [GraphQL data layer](/docs/data-layer/).

## Import with source plugins

The easiest way to add data to Gridsome is to use **source plugins**. Gridsome data source plugins are added in `gridsome.config.js`. You can find available data source plugins in the [Plugins directory](/plugins).

Here is an example of the [file-system](/plugins/@gridsome/source-filesystem) source added to config:

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'DocPage'
      }
    }
  ]
}
```

`typeName` will be the name of the GraphQL collection and needs to be unique. This example will add a **DocPage** collection.

Every data source has different options, so take a look at their documentation to learn more.

## Import from APIs

Import data from any content APIs to the GraphQL data layer with the [Data store API](/docs/data-store-api/). To use the API you need a `gridsome.server.js` file in the root folder of your Gridsome project.

Here is an example `gridsome.server.js` file that imports data:

```js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { posts } = await axios.get('https://api.example.com/posts')

    const collection = actions.addCollection({
      typeName: 'BlogPosts'
    })

    for (const post of posts) {
      collection.addNode({
        id: post.id,
        title: post.title
      })
    }
  })
}
```

> Data is fetched when starting a development server or start of a production build. You need to restart the server for the changes in **gridsome.server.js** to take effect.

## Import from local files

*..contribute*

### Markdown

Import data into the GraphQL layer from markdown files by using the [transformer-remark](/plugins/@gridsome/transformer-remark) plugin.

```js
//gridsome.config.js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
      },
    },
  ],
};
```

For more details on how to use this plugin, refer to the [plugin page](/plugins/@gridsome/transformer-remark) on this site.

### Images

*..contribute*

### YAML

Import data from any yaml file to the GraphQL data layer with the [Data store API](/docs/data-store-api/). To use the API you need a `gridsome.server.js` file in the root folder of your Gridsome project.

First, install the node package `js-yaml` into your project:

```shell
npm install js-yaml --save-dev
```

Here's a sample YAML file you can import:

```yaml
# src/data/products.yaml
- name: Cheerios
  price: 2.99
- name: Lucky Charms
  price: 3.99
```

And this is an example `gridsome.server.js` file that imports the data from the yaml file above:

```js
const fs = require('fs');
const yaml = require('js-yaml');

const fileContents = fs.readFileSync('./src/data/products.yaml', 'utf8');
const products = yaml.safeLoad(fileContents);

module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection({
      typeName: 'Products'
    })

    for (const product of products) {
      collection.addNode(product);
    }
  })
}
```

### CSV

To import data from a CSV file, use one of the many CSV importers available for NodeJS. In this example, we use [csv-parse](https://www.npmjs.com/package/csv-parse). First we install our new package:

```shell
npm install csv-parse

# or

# yarn add csv-parse
```

Now in the `gridsome.server.js` file in the root of our project we can use `csv-parse`, along with the NodeJS `readFileSync` function, to import and process our data. The data for this example (`posts.csv`) would be a CSV file with a header row.

```js
//gridsome.server.js

const {readFileSync} = require('fs');
const parse = require('csv-parse/lib/sync');

module.exports = function (api) {
  api.loadSource(async (actions) => {
    const input = readFileSync('./src/data/posts.csv', 'utf8');

    const Posts = parse(input, {
      columns: true,
      skip_empty_lines: true,
    });

    const collection = actions.addCollection({
      typeName: 'Posts',
    });

    for (const post of Posts) {
      collection.addNode(post);
    }
  })
}
```

### JSON

Import data from any json file to the GraphQL data layer with the [Data store API](/docs/data-store-api/). To use the API you need a `gridsome.server.js` file in the root folder of your Gridsome project.

Here is an example `gridsome.server.js` file that imports json:

```js
module.exports = function (api) {
  api.loadSource(async actions => {
    const Blogs = require('./src/data/blogs.json');

    const collection = actions.addCollection({
      typeName: 'BlogPosts'
    })

    for (const blog of Blogs) {
      collection.addNode(blog);
    }
  })
}
```
