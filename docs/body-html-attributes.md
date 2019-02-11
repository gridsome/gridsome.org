# Body & html attributes
Gridsome can use [vue-meta](https://github.com/declandewet/vue-meta) to modify `<body>` and `<head>` attributes.

## Change attributes globally
Global body or head attributes is added in `src/main.js`.

```js
export default function (Vue, { head }) {
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en' }
  
  // Add atributes to BODY tag
  head.bodyAttrs = { class: 'custom-body-class' }
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

