# Body & html attributes
Gridsome uses [vue-meta](https://github.com/declandewet/vue-meta) to modify `<body>` and `<head>` attributes.

## Change attributes globally
Global body or head attributes is added in `src/main.js`.

```js
export default function (Vue, { head, router, isServer }) {
  head.htmlAttrs.push({
    lang: 'en'
  })

  head.bodyAttrs.push({
    class: 'custom-body-class',
  })
}
```


## Change attributes per page
Custom attributes per page is added inside **.vue components**.
For example, `src/pages/About.vue` would look something like this:

```js
export default {
  name: 'About',
  metaInfo: {
    title: 'About us',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'custom-body-class'
    }
  }
}
```

