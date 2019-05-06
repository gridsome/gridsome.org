# Client-side data

Client-side data is data added after page load. This can be data coming from other internal pages, or a Rest API or a GraphQL API. Client-side data is not generated in the build process and is not a part of the markup

**Gridsome sites are static and serverless when deployed.**  To get real-time updates from a database (dynamic data) you'll need to fetch data from an external API after page load.

Best practice for this is to have a placeholder where the content will be added (A spinner or ) and then update that content when content is fetched. You can also just use static content as placeholder and then update it with dynamic data when it's fetched.

We recommend to use the [axios](https://github.com/axios/axios) package to add dynamic data to Gridsome. Install **axios** with `npm install axios --save` to get started.

## Fetch from internal pages

```js
export default {
  data () {
    return {
      otherPage: null
    }
  },
  mounted () {
    this.$fetch('/other-page').then(results => {
      this.otherPage = results.data
    })
  }
}
```

## Query from external Rest API

....Contributions are welcome!

## Query from external GraphQL API

....Contributions are welcome!

## Dynamic content and eCommerce stores

A good example of using dynamic content with Gridsome is eCommerce stores. While most of the site is static you probably want prices and quantity to be dynamic.

This means you can generate 99% of your eCommerce site at build time and then pull inn dynamic data when users are visiting for example a product page or starts filtering products.

```js
import axios from 'axios'

export default {
  data () {
    return {
      price: null,
      quantity: null
    }
  },
  mounted () {
    axios.get(`https://api.shop.com/product/${this.$page.product.id}`)
      .then(({ data }) => {
        this.price = data.price
        this.quantity = data.quantity
      })
  }
}
```