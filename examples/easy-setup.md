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
      }
    },
  ],
  // Setup templates for data collections.
  // This will automatically look for and use
  // a src/templates/{Collection}.vue file.
  templates: {
    ContentfulTeam: '/team/:slug',
    ContentfulEvent: '/event/:slug',
  }
}
```
