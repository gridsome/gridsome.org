---
title: Easy configuration
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
      use: '@gridsome/source-wordpress',  // Use source plugins to get data
      options: {
        baseUrl: 'YOUR_WEBSITE_URL', // required
        typeName: 'WordPress', // GraphQL schema name
        routes: {
          post: '/:year/:month/:day/:slug', // Create routes
          post_tag: '/tag/:slug' 
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-XXXXXXXXX-X'
      }
    }
  ]
}
```