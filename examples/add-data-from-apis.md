---
title: Use data from any APIs
filepath: gridsome.server.js
filetype: js
order: 2
---
```js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    // Fetch data from APIs
    const { data } = await axios.get('https://any.api.com')

    // Create a new GraphQL content type
    const posts = store.addContentType({
      typeName: 'Post',
      route: '/blog/:year/:title'
    })

    // Add data to the new content type
    for (const item of data) {
      posts.addNode({
        id: item.id,
        title: item.title,
        date: item.date,
        content: item.content
      })
    }
  })
}
```
