---
title: Easy configuration
filepath: gridsome.config.js
filetype: js
order: 1
---
```js
module.exports = {
  siteName: 'My Gridsome Website',
  siteDescription: '...is faster than yours',
  plugins: [
    {
      // Example usage of a Data Source plugin
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'YOUR_WEBSITE_URL', // required
        typeName: 'WordPress', // GraphQL schema name
        perPage: 100, // How many posts to load per request
        concurrent: 10, // How many requests simultaneous

        // Create routes for WordPress post types
        routes: {
          post: '/:year/:month/:day/:slug',
          post_tag: '/tag/:slug' 
        }
      }
    },
  ]
}
```