---
title: Populating <head>
---
# Populating `<head>`
Gridsome uses [vue-meta](https://github.com/nuxt/vue-meta) to populate **Head**.

## Add global head metadata
Global head metadata is added in `src/main.js` by using `head.{property}.push()`

```js
export default function (Vue, { head }) {
  // Add inline CSS
  head.style.push({
    type: 'text/css',
    cssText: '.some-custom-css {color: red}'
  })

  // Add an external CSS file
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css'
  })

  // Add a meta tag
  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,XML,JavaScript'
  })
}
```

## Add head meta data to pages & templates
Page metadata is added inside page **.vue components**.
For example, `src/pages/About.vue` would look something like this:

```js
<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'About us',
    meta: [
      { name: 'author', content: 'John Doe' }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/index.css' },
    ]
    // etc...
  }
}
</script>
```

## How to overwrite from child component

If you need to overwrite meta tags, add `key` property.  
Gridsome is passing `tagIdKeyName: 'key'` to vue-meta as default option.  

```js
// parent component
{
  metaInfo: {
    meta: [
      { key: 'description', name: 'description', content: 'foo' }
    ]
  }
}
// child component
{
  metaInfo: {
    meta: [
      { key: 'description', name: 'description', content: 'bar' }
    ]
  }
}
```

## Available Properties

|Property  | Description | Link
|----------|-------|---------------
|style | Adds a style tag |[Docs](https://github.com/declandewet/vue-meta#style-object)
|script | Adds a script tag | [Docs](https://github.com/declandewet/vue-meta#script-object)
|meta  | Adds a meta tag | [Docs](https://github.com/declandewet/vue-meta#meta-object)
|title | Changes title text | [Docs](https://github.com/declandewet/vue-meta#title-string)
|titleTemplate | Dynamic title text |  [Docs](https://github.com/declandewet/vue-meta#titletemplate-string--function)
|link  | Adds a link tag | [Docs](https://github.com/declandewet/vue-meta#link-object)

