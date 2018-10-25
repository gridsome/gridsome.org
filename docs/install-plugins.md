# How to install plugins

Gridsome plugins are npm packages. You install them with `npm` or `yarn` like this:

```bash
npm install @gridsome/source-contentful
```

Then in your site’s `gridsome.config.js` you add `@gridsome/source-contentful` to the plugins array like:

```js
module.exports = {
  plugins: [
    use: 'gridsome-source-contentful'
  ]
}
```

Plugins can also take options:

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'YOUR_SPACE', // required
        accessToken: 'YOUR_ACCESS_TOKEN', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}
```
