---
title: Progressive Images
filepath: src/components/AnyVueComponent.vue
filetype: vue
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
