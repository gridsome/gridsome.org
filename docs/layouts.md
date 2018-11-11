# Layouts

Layout components are used to wrap pages and templates. Layouts should contain components like headers, footers or sidebars that will be used across the site.

```html
<template>
  <div>
    <header />
    <h1 v-html="title" />
    <slot /> <!-- Page content will be inserted here  -->
    <footer />
  </div>
</template>
```
