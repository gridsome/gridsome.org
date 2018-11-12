# Client API

Create a `gridsome.client.js` at root in your project or plugin that exports a function. The function will receive the Vue instance, plugin options and a context. The context has references to options for the Vue app, the VueRouter instance and VueMeta options. The file is loaded on the server and in the browser as default.

```js
/**
 * @param Vue                 Vue instance
 * @param options             Plugin options
 * @param context.appOptions  Options for the Vue instance
 * @param context.router      The router instance
 * @param context.head        VueMeta info objet
 * @param context.isClient
 * @param context.isServer
 */
export default function (Vue, options, context) {
  // ...
}
```

## Using the Client API in `src/main.js`

Export a default function in `src/main.js` to use the Client API. The only difference here is that it will only have access to the Vue instance and the context. The function will be called after all plugins.

#### Example usage

```js
import Bootstrap from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function (Vue) {
  Vue.use(Bootstrap)
}
