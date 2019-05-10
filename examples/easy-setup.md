---
title: Get data from CMS & APIs with source plugins
filepath: gridsome.config.js
filetype: js
order: 3
---
```js
module.exports = {
  siteName: 'My Gridsome Website',
  siteDescription: '...is faster than yours',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        host: 'cdn.contentful.com',
        typeName: 'Contentful',
        routes: {
          'Team': '/team/:slug',
          'Events': '/events/:slug'
        }
      }
    },
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'YOUR_WEBSITE_URL',
        typeName: 'WordPress',
        routes: {
          post: '/blog/:year/:month/:day/:slug',
          post_tag: '/blog/tag/:slug' 
        }
      }
    }
  ]
}
```
