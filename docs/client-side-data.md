# Client-side data

Client-side data is data added after page load. This can be data coming from other internal pages, a REST API or a GraphQL API. It's important to only load your data in the `mounted` hook to prevent it from being included in the generated markup.

## Fetch from internal pages

Fetch `page-query` results and [page context](/docs/pages-api#the-page-context) from other internal pages. The following example fetches data from `/other-page` and stores the results.

```js
export default {
  data () {
    return {
      otherPage: null
    }
  },
  async mounted () {
    try {
      const results = await this.$fetch('/other-page')
      this.otherPage = results.data
    } catch (error) {
      console.log(error)
    }
  }
}
```

The `fetch` method can also be imported from `gridsome`.

```js
import { fetch } from 'gridsome'

export default {
  async mounted () {
    const results = await fetch('/other-page')
    console.log(results.data)
  }
}
```

Read more about the [$fetch() method](/docs/client-api#fetchpath).

## Fetch from REST API

```js
import axios from 'axios'

export default {
  data () {
    return {
      todos: null
    }
  },
  async mounted () {
    try {
      const results = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      )

      this.todos = results.data
    } catch (error) {
      console.log(error)
    }
  }
}
```

## Fetch from GraphQL API

....Contributions are welcome!

## Fetch from local YAML files

The following example fetches local YAML files within .vue templates:

1. Create a YAML file in `/src/data` folder. For example: `products.yaml`
2. Add `import products from @/data/products.yaml` before `export default` function.
3. Add the data from the YAML file to the data layer by creating a new object key `products` and defining it with the just imported `products`. Since the object key and the value are the same, we can destructure to just `products`.

```html
<template>
  <ul v-for="product in products">
    <li v-html="product.title"/>
  </ul>
</template>

<script>
import products from '@/data/products.yaml'

export default {
  data() {
    return {
      products
    }
  }
}
</script>
```

## Fetch from local JSON files

The following example fetches local JSON data within .vue templates:

1. Create a JSON file in `/src/data` folder. For example: `users.json`
2. Add `import users from @/data/users.json` before `export default` function.
3. Add the data from the JSON file to the data layer by creating a new object key `users` and defining it with the just imported `users`. Since the object key and the value are the same, we can destructure to just `users`.

```html
<template>
  <ul v-for="user in users">
    <li v-html="user.name"/>
  </ul>
</template>

<script>
import users from '@/data/users.json'

export default {
  data() {
    return {
      users
    }
  }
}
</script>
```
