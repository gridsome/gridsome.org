# Client-side data

Client-side data is data added after page load. This can be data coming from other internal pages, a REST API or a GraphQL API. It's important to ony load your data in the `mounted` hook to prevent it from beeing included in the generated markup.

## Fetch from internal pages

Fetch `page-query` results and [page context](http://localhost:8080/docs/pages-api#the-page-context) from other internal pages. The following example fetches data from `/other-page` and stores the results.

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

....Contributions are welcome!

## Fetch from GraphQL API

....Contributions are welcome!
