# How to install plugins

Gridsome plugins are npm packages. You install them with `npm` or `yarn` as dev dependencies like this:

- With npm: `npm install @gridsome/source-wordpress -D`
- With Yarn: `yarn add @gridsome/source-wordpress -D`

Then in your site’s `gridsome.config.js` you add an object to `plugins` with `use`, and `options` properies, where `use` will be `@gridsome/source-wordpress`:

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://www.example.com',
        typeName: 'WordPress'
      }
    }
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
