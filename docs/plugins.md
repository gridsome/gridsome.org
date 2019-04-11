# Plugins

## Installing plugins

Gridsome plugins are **npm packages**. Install a plugin with [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com). Then activate it by adding it to the `plugins` array in `gridsome.config.js`. A plugin entry in the `plugins` array can either be a string or an object. Use an object with `use` and `options` properties if the plugin requires options. The `use` property is the name of the plugin.

Example commands for installing plugins:

- npm: `npm install @gridsome/source-filesystem`
- Yarn: `yarn add @gridsome/source-filesystem`

Here is an example which uses a plugin with options:

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        typeName: 'Post'
      }
    }
  ]
}
```

The following example uses a plugin with its default options:

```js
module.exports = {
  plugins: [
    '@gridsome/plugin-critical'
  ]
}
```

## Using local plugins

Create a folder with an `index.js` file somewhere in your project. The `use` property can have an absolute path to the folder or a relative path starting with `~/`, where `~` is an alias for your project root folder.

```js
module.exports = {
  plugins: [
    {
      use: '~/path/to/folder',
      options: {}
    }
  ]
}
```
