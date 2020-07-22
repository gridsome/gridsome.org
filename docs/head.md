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
    href: 'https://some-server.com/external-styleheet.css'
  })
  
  // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: 'https://some-server.com/external-script.js',
    body: true
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
      {
        name: 'author',
        content: 'John Doe'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: '/css/index.css'
      }
    ]
    // etc...
  }
}
</script>
```

If you wish to access `this` or data on a component/page, make `metaInfo` a function:

```js
<script>
export default {
  name: 'Post Template',
  metaInfo() {
    return {
      title: this.$page.post.name,
      meta: [
        { name: 'author', content: this.$page.post.author }
      ],
      // etc...
    }
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
      {
        key: 'description',
        name: 'description',
        content: 'foo'
      }
    ]
  }
}
// child component
{
  metaInfo: {
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'bar'
      }
    ]
  }
}
```

## Available Properties

|Property  | Description | Link
|----------|-------|---------------
|style | Adds a style tag |[Docs](https://vue-meta.nuxtjs.org/api/#style)
|script | Adds a script tag | [Docs](https://vue-meta.nuxtjs.org/api/#script)
|meta | Adds a meta tag | [Docs](https://vue-meta.nuxtjs.org/api/#meta)
|title | Changes title text | [Docs](https://vue-meta.nuxtjs.org/api/#title)
|titleTemplate | Dynamic title text | [Docs](https://vue-meta.nuxtjs.org/api/#titletemplate)
|link | Adds a link tag | [Docs](https://vue-meta.nuxtjs.org/api/#link)
