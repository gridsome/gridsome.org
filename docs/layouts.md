# App structure

The App structure have two parts.

2. **App.vue** - The global layout that usually contains Header & footer.
1. **Index.html** - The file that mounts App.vue into `<body>`.


![App layout](./images/app-layout.png)


## App.vue

**App.vue is the component that wraps all content.** It usually contains components that are used across the site like **Header & Footer**. It requires a `<router-view>` component. This is where the content will be displayed.


### Basic App.vue

```html
<template>
  <router-view />
</template>

<static-query>
query App {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  }
}
</script>
```

### Add page transition

```html
<template>
  <transition>
    <router-view />
  </transition>
</template>
```

### Passing props

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
Gridsome adds **index.html** automatically and is not required in your project folder.

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