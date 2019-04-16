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
    // Get data from APIs
    const { data } = await axios.get('https://any.api.com')

    // Create a new content type
    const posts = store.addContentType({
      typeName: 'BlogPosts' // GraphQL collection name
      route: '/blog/:slug' // Set route (optional)
    })

    // Add a reference between a 'author' field and an 'Author' collection
    posts.addReference('author', 'Author')

    // Add data coming from API to the new content type
    for (const item of data) {
      posts.addNode({
        id: item.id,
        title: item.title
        author: item.author
      })
    }
  })
}
```
