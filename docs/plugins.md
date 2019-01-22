# Plugins
Gridsome plugins are **npm packages** added to Gridsome projects. Plugin options are added to `gridsome.config.js`.
Here is an example of a data source plugin added to Gridsome:

```js
module.exports = {
  siteName: 'My Project',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        index: ['README'],
        path: 'docs/**/*.md',
        typeName: 'DocPage',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
  ]
}
```

This data source plugin has been installed with the command line `yarn add @gridsome/source-filesystem`.
