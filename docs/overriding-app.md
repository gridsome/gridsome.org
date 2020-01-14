# Overriding App.vue

The `App.vue` file is the main component that wraps all your pages and templates. You can override the default file by having your own `App.vue` file in your `src` directory. Overriding it is useful if you want to have a layout that is shared across all your pages. Or if you want to have a `<transition>` component around the `<router-view>`.

*Note: you must restart `gridsome develop` after adding a custom `App.vue` file.*

## Add global metadata

The default `App.vue` component inserts the `siteName` and `siteDescription` as global metadata. You need to insert these yourself when having a custom `App.vue` component:

```html
<template>
  <router-view />
</template>

<static-query>
query {
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

## Share a layout across all pages

Having a layout component that is shared across all your pages is very useful. The following example wraps a layout component around `<router-view>`. The layout will not be re-rendered when you navigate between pages.

```html
<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script>
import MainLayout from '~/layouts/Main.vue'

export default {
  components: {
    MainLayout
  }
}
</script>
```

## Page transitions

A custom `App.vue` file can also be used to have transition effects for your pages and templates.

```html
<template>
  <transition>
    <router-view />
  </transition>
</template>
```

[Read more about route transitions](https://router.vuejs.org/guide/advanced/transitions.html)
