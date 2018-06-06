# Plugins API

## Browser plugins

Export a function in your entry that will receive the Vue instance and plugin options.

```js
export default function (Vue, options) {
  Vue.gridsome.element()
  Vue.gridsome.element.use.mixin()
  Vue.gridsome.element.use.directive()
  Vue.gridsome.element.provide.directive()
  Vue.gridsome.element.decorator()
  Vue.gridsome.layer()
  Vue.gridsome.layer.use.mixin()
  Vue.gridsome.layer.use.directive()
  Vue.gridsome.layer.provide.directive()
  Vue.gridsome.layer.decorator()
  Vue.gridsome.source()
}
```

## Node.js plugins

Add a `gridsome.js` file at root in your package that exports a function.

```js
module.exports = function (api, options) {
  api.color()
  api.breakpoint()
  api.chainWebpack()
  api.configureDevServer()
}
```
