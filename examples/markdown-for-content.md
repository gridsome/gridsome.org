---
title: Markdown for data
filepath: gridsome.config.js
filetype: js
order: 2
---
```js
module.exports = {
  siteName: 'My Gridsome Website',
  siteDescription: '...is faster than yours',
  plugins: [
    { 
      // Example usage of Markdown for content
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md', // What files to use
        typeName: 'BlogPost', // GraphQL schema name
        route: '/posts/:title' // Create routes
        refs: {
          // Create relation between "tags" field.
          tags: { 
            typeName: 'Tag',
            route: '/tags/:title',
            create: true
          }
        }
      }
    },
  ]
}
```