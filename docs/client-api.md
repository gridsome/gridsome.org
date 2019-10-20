# Client API

The client API lets you install Vue plugins, register components and directives and modify the options passed to the Vue instance. You can also add router hooks and HTML metas. Start by exporting a default function in a `src/main.js` file in your project to use the Client API.

> The function exported by `src/main.js` will be executed after all plugins.

```js
import Bootstrap from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function (Vue, context) {
  Vue.use(Bootstrap)
}
```

## Usage in plugins

Create a `gridsome.client.js` at root in the plugin directory that exports a function. The function will receive the plugin options as second argument and the context as the third.

```js
export default function (Vue, options, context) {
  // ...
}
```

## The client context

The context has references to options for the Vue app, the VueRouter instance and VueMeta options. The file is loaded on the server and in the browser as default.

### appOptions

- Type: `Object`

Options passed to the main **Vue Instance** like `new Vue(appOptions)`.
Here is an example where we add **Vuex** store to the Vue instance.

```js
import Vuex from 'vuex'

export default function (Vue, { appOptions }) {
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
}
```

### router

- Type: `VueRouter`

Interact with the router.

```js
export default function (Vue, { router }) {
  router.beforeEach((to, from, next) => {
    // Do stuff before next page load
    next()
  })
}
```

Read more about the [Vue router](https://router.vuejs.org/api/#router-instance-methods) methods.

### head

- Type: `Object`

Allows you to manage your websites' metadata.

```js
export default function (Vue, { head }) {
  head.script.push({
    src: 'https://www.example.com/my-script.js'
  })
}
```

Read more about [populating &lthead&gt](/docs/head/)

## Component Injections

These methods are injected into every component.

### $fetch(path)

Fetch `page-query` results and [page context](http://localhost:8080/docs/pages-api#the-page-context) from internal pages

```js
export default {
  data () {
    return {
      otherPageData: null
      otherPageContext: null
    }
  },
  async mounted () {
    try {
      const results = await this.$fetch('/other-page')

      this.otherPageData = results.data
      this.otherPageContext = results.context
    } catch (error) {
      console.log(error)
    }
  }
}
```

### $url(path)

Generates URL including `pathPrefix`. Useful for creating internal links without `g-link`.

```html
<a :href="$url('/page')"></a>
```

```html
<a href="/path-prefix/page"></a>
```

## Process Injections

These properties are injected into the client process.

### isClient

- Type: `boolean`

```js
if (process.isClient) {
  // browser only code
}
```

### isServer

- Type: `boolean`

```js
if (process.isServer) {
  // server only code
}
```

