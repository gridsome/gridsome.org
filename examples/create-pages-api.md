---
title: Create Pages API
filepath: gridsome.server.js
filetype: js
order: 10
---
```html
<template>
  <Layout>
    <!-- Use the built-in Image component
    for progressive images -->

    <g-image src="~/assets/images.jpg" width="500" />

    <!-- This will render a small 
    ultra-compressed, blurred inline base64 image
    before it's lazy loaded into view with
    Intersection Observer -->
  </Layout>
</template>
```
