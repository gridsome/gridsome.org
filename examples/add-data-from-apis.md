---
title: Use data from any APIs
filepath: gridsome.server.js
filetype: js
order: 2
---
```js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Fetch data from APIs
    const { data } = await axios.get('https://any.api.com')

    // Create a new GraphQL Collection
    const posts = addCollection('Post')

    // Add data to the new collection
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
