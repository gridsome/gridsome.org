# Add data from anywhere *

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

> You need to restart server for changes in **gridsome.server.js** to take affect. It's only used when starting a development server or start of a production build.


## Add data from Rest API
..
## Add data from GraphQL API
..
## Add custom site meta
..
## Add data from local files
..
### YAML
..
### CSV
..
### JSON