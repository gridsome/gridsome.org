---
title: Use Markdown for data
filepath: gridsome.config.js
filetype: js
order: 4
---
```js
module.exports = {
  siteName: 'My Markdown Blog',
  siteDescription: 'Gridsome 💚 Markdown',
  plugins: [
    { 
      // Example usage of Markdown for content
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md', // What files to use
        typeName: 'Post', // GraphQL type name
        route: '/posts/:year/:title' // Create routes
        refs: {
          // Create relation between a "tags" field.
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