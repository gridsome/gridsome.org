---
title: How to integrate Vuex with Modules with Gridsome - Shopping Cart Example
slug: vuex-modules-with-gridsome
author: [dozy.io]
date: 2020-06-01
tags: ['vuex']
excerpt: 'Vuex coupled with Gridsome provides a state management pattern you can use across your static site. This post will expand on default documentation to explain how you can use Vuex to seperate your sites state into modules.'
---

## What is Vuex? Why should I use it with Gridsome?

Vuex is a state management pattern and library that can be used a centralized store for your components within an application. It provides a single source of truth to your application and reduces the complications of passing events and props through multiple components.

There is already documentation on [how to add Vuex to Gridsome](/docs/client-api/#appoptions) but this tutorial will extend on this so that you can modularize your Vuex state, getters, actions and mutations.

You may want to use Vuex with Gridsome if for example you were building a static frontend to an ecommerce store with Vue handling the shopping cart functionality. You may also want to handle the state of a popup banner for example - this where Vuex modules come into play as you can seperate the state into individual components.

It is highly recommended that you visit the [Vuex Website](https://vuex.vuejs.org) for more information as Vuex may well be overkill for your needs when a simple [store pattern](https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch) would suffice.


## What we are going to build

First we'll go through how to set up Gridsome with Vuex and modules and then will expand on this with a shopping cart example.

![example shopping cart](./Gridsome-with-Vuex-Shopping-Cart.gif)


A full working example is available here:
[https://gridsome-vuex-shopping-cart.netlify.app/](https://gridsome-vuex-shopping-cart.netlify.app/)

Source code available for the example shopping cart here:
[https://github.com/dozyio/gridsome-shopping-cart-vuex](https://github.com/dozyio/gridsome-shopping-cart-vuex)

## Setting Up Gridsome with Vuex and modules

#### Create a new Gridsome project

```
gridsome create example-site
```

#### Install the required dependencies

Installing `Vuex` is straightforward. Simply run the following command:

```sh
yarn add vuex
```

#### Setup

To use `Vuex` with modules you'll need to create a couple of directories, add few files and modify your `main.js`.

`Create the Vuex store and modules directory`

```sh
mkdir -p src/store/modules
```

In this example setup we'll add a cart module for use in the example later in the blog post. Additional modules can be added via `import` and adding them to the list of `modules`.

`Create src/store/index.js`
```js
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        cart
    },
    strict: debug
});
```

`Create src/store/modules/cart.js`
```js
const state = () => ({
})

const getters = {
}

const actions = {
}

const mutations = {
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
```

Finally we'll add the Vuex store to the `main.js`

`main.js`
```js
import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import store from '~/store'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)
  appOptions.store = store

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
```

At this point we have Vuex setup using modules within Gridsome!

## Shopping Cart Example

The following shopping cart example will show how to setup products using markdown with shopping cart functionality and state managed by Vuex. For the Vuex state to be persistant across page reloads and also across tabs we'll install `vuex-persistedstate` and `vuex-shared-mutations`.

#### Step 1 - Install dependencies

```sh
yarn add vuex
yarn add @gridsome/source-filesystem --dev
yarn add @gridsome/transformer-remark --dev
yarn add vuex-persistedstate
yarn add vuex-shared-mutations
```

#### Step 2 - Create a few products

`Create products directory`
```sh
mkdir -p content/products
```

`Create 1st product - content/products/awesome-red-widgets-book.md`
```markdown
---
title: Awesome Red Widgets Book
author: J. Bloggs
slug: awesome-red-widgets-book-by-j-bloggs
price: £9.99
excerpt: 'The industry standard book on Widgets - must read if work with red widgets.'
---
From the author who wrote "Blue Widgets - what you need to know" and "Why Is My Widget Purple?" comes the next industry stardard book on the design of Red Widgets
```

`Create 2nd product - content/products/blue-widgets-book.md`
```markdown
---
title: The Blue Widgets Book
author: J. Bloggs
slug: blue-widgets-book-by-j-bloggs
price: 12.99
excerpt: 'Blue widgets - The only book on the subject that everyone is talking about .'
---
The 2020 best seller on blue widgets and why they are such a necessity.
```

#### Step 3 - Gridsome Config

Gridsome needs to be configured on how to process the Markdown products. For this you'll need to set up the plugins and templates in `gridsome.config.js`.

`gridsome.config.js`
```js
module.exports = {
      siteName: 'Gridsome With Vuex Modules - Shopping Cart Example',
      plugins: [
          {
              // Create products from markdown files
              use: '@gridsome/source-filesystem',
              options: {
                  typeName: 'Product',
                  path: './content/products/**/*.md'
              }
          }
      ],
      templates: {
          Product: '/:name',
      },
      transformers: {
          remark: {}
      }
  }
```

#### Step 4 - Set up the Vuex store and cart module

Setting up the Vuex store is very similar to the above setup but with a few changes. Notably we import the `vuex-persistedstate` plugin, in addition we also require the `vuex-share-mutations` wrapped in `process.isClient` as the the shared mutations uses `window` which isn't available during the static site build. We also configure shared mutations on `cart/add` and `cart/remove` so that the Vuex mutations are shared between browser tabs.

`src/store/index.js`
```js
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cart from './modules/cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

var store = {
    plugins: [],
    modules: {
        cart
    },
    strict: debug
}

if (process.isClient){
    //workaround for window not defined
    //use require here instead of import at top of file
    const sharedMutations = require('vuex-shared-mutations').default
    store.plugins.push(createPersistedState({ fetchBeforeUse: true }))
    store.plugins.push(sharedMutations({ predicate: ['cart/add', 'cart/remove']}))
}

export default new Vuex.Store(store)
```

In the `cart.js` module we create a few getters and create the add and remove mutations. We'll use namespaces for Vuex as it is then easy to call `cart/add` and `cart/remove`

`src/store/modules/cart.js`
```js
const state = () => ({
    products: [],
})

const getters = {
    getProducts: state => {
        return state.products
    },
    count: state => {
        return state.products.length
    },
    total: state => {
        let total = 0;
        state.products.forEach(product => {
            total += Number(product.price.replace('£',''))
        })
        return total
    }
}

const actions = {
}

const mutations = {
    add(state, payload) {
        state.products.unshift(JSON.parse(JSON.stringify(payload)))
    },
    remove(state, payload) {
        state.products.splice(payload,1)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
```
#### Step 5 - Create components, templates, pages and layout

First we'll create a couple of components. `CartTop` will show how many items are in the shopping cart as well as link to `Cart` page. We'll also create a `CartTotal` component that will calculate the total price for the shopping cart.

`src/components/CartTop.vue`

```html
<template>
    <div>
        <ClientOnly>
            <g-link to="/cart/"><span>Cart ({{ countProducts }} item<span v-if="countProducts == 0 || countProducts > 1">s</span>)</span></g-link>
        </ClientOnly>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        //mapping getters from cart vuex module
        ...mapGetters('cart', {
            getProducts: 'getProducts',
            countProducts: 'count'
        }),
    },
}
</script>
<style scoped>
</style>
```

`src/components/CartTotal.vue`

```html
<template>
    <span>&pound;{{ total }}</span>
</template>
<script>
import { mapGetters } from 'vuex'
import CartTotal from '~/components/CartTotal'

export default {
    computed: {
        //mapping getters from cart vuex module
        ...mapGetters('cart', {
            total: 'total'
        }),
    },
}
</script>

<style scoped>
</style>
```

Here we create the product template. It includes an `addToCart` method which is used to commit to the Vuex store which in turn uses the shared mutation `cart/add` which we created in step 4. As the site is static we can't query the product's GraphQL layer in the shopping cart so we have to pass all the product properties we would like to use i.e. name, price, path, etc.

`src/templates/Product.vue`
```html
<template>
    <layout>
        <h1>{{ $page.product.name }}</h1>
        <h4>by {{ $page.product.author }}</h4>
        <div v-html="$page.product.content" />
        <div v-html="$page.product.price" />
        <button v-on:click="addToCart()">Add To Cart</button>
    </layout>
</template>
<page-query>
    query Product($id: ID!) {
        product: product(id: $id) {
            id
            name
            content
            path
            price
            author
            excerpt
            content
        }
    }
</page-query>
<script>
export default {
    methods: {
        addToCart() {
            //Add the product to the Vuex cart module's state.
            //This has to include all fields you want to use at a later point
            //due to not being able to query the product on a static site
            this.$store.commit('cart/add', {
                id: this.$page.product.id,
                name: this.$page.product.name,
                price: this.$page.product.price,
                path: this.$page.product.path,
                }
            )
        }
    }
}
</script>
<style scoped>
</style>
```

Next we create the Cart page which includes a method to remove products from the cart. We also import use the `CartTotal` component created above.

`src/pages/Cart.vue`
```html
<template>
    <Layout>
        <h1>Shopping Cart</h1>
        <hr>
        <ClientOnly>
            <div v-if="!countProducts">Empty Shopping Cart</div>
            <table v-if="countProducts" class="cart-table">
                <thead>
                    <tr><th>Product</th><th>Price</th><th></th></tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in getProducts">
                        <td><g-link :to="product.path">{{ product.name }}</g-link></td>
                        <td>{{ product.price }}</td>
                        <td><button v-on:click="removeFromCart(index)">X</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </ClientOnly>
        <hr>
        <ClientOnly>
            <div v-if="countProducts">Total: <CartTotal /></div>
        </ClientOnly>
    </Layout>
</template>
<script>
import { mapGetters } from 'vuex'
import CartTotal from '~/components/CartTotal'

export default {
    components: {
        CartTotal
    },
    metaInfo: {
        title: 'Shopping Cart'
    },
    computed: {
        //mapping getters from cart vuex module
        ...mapGetters('cart', {
            getProducts: 'getProducts'
        }),
        countProducts () {
            return this.getProducts.length
        }
    },
    methods: {
        removeFromCart(index){
            this.$store.commit('cart/remove', index)
        }
    }
}
</script>
<style scoped>
.cart-table {
    width: 100%;
    text-align: left;
}
</style>
```

Next we create the index page to show a list of products.

`src/pages/Index.vue`
```html
<template>
    <Layout>
        <h1>Shop Homepage</h1>
        <div v-for="edge in $page.products.edges" :key="edge.node.id">
            <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
        </div>
        <Pager :info="$page.products.pageInfo"/>
        <footer>Source code available here - <a href="https://github.com/dozyio/gridsome-shopping-cart-vuex">https://github.com/dozyio/gridsome-shopping-cart-vuex</a></footer>
    </Layout>
</template>
<page-query>
    query($page: Int){
        products: allProduct(perPage: 10, page: $page) @paginate {
            pageInfo {
                totalPages
                currentPage
            }
            edges {
                node {
                    id
                    name
                    path
                }
            }
        }
    }
</page-query>
<script>
import { Pager } from 'gridsome'

export default {
    components: {
        Pager
    },
    metaInfo: {
        title: 'Shop Home'
    }
}
</script>

<style scoped>
footer { margin-top: 2em; }
</style>
```

Finally create the default layout which includes the CartTop component created previously.

`src/layouts/Default.vue`

```html
<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <CartTop />
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import CartTop from "~/components/CartTop"
export default {
    components: {
        CartTop
    }
}
</script>
<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
```

#### Step 6 - Build the site

```sh
gridsome develop
```

or

```sh
gridsome build
```

## Source Code

The source code for the shopping cart can be downloaded from the following URL:
[https://github.com/dozyio/gridsome-shopping-cart-vuex](https://github.com/dozyio/gridsome-shopping-cart-vuex)

## Conclusion

At this point the Gridsome will have generated your static site with shopping cart. This obviously needs to be extended for production (i.e. taxes, currency, shipping, handling payments etc) but it should give you good overview and starting point for developing with Gridsome using Vuex with modules.

