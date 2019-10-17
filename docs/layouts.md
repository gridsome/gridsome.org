# App structure

A basic app structure looks like this:

![App layout](./images/app-layout.png)


## App.vue

**App.vue is the component that wraps all content.** It usually contains components that are used across the site like **Header & Footer**. It requires a `<router-view>` component for displaying content.


### Basic App.vue

```html
<template>
  <div id="app">
    <Header /> 
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
```
👋 `~/` is an alias to `/src` folder.

### Add page transition

```html
<template>
  <transition name="slide-left">
    <router-view />
  </transition>
</template>

<style>


</style>
```

### Passing props to App.vue

You can pass props to App layout from any page or component. This is useful if you want to change behavior in App layout for a single page.

```html
<style>
export default {
  appProps: {
    transparentHeader: true
  }
}
</style>
```

## Index.html

This is the file that is used to generate all files.

Gridsome adds **index.html** automatically and is not required in your `/src` folder. You can override it by adding an **index.html** file in `/src` folder with this content:

```html
<!DOCTYPE html>
<html ${htmlAttrs}>
  <head>
    ${head}
  </head>
  <body ${bodyAttrs}>
    ${app}
    ${scripts}
  </body>
</html>
```