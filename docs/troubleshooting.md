# Troubleshooting

## window is not defined

Gridsome generates HTML in a Node.js environment where the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface is not available. Packages or components which refer it during initial execution will fail in the build process.

**Using `window` in local components**

One rule within SSR and Vue is to never reference the `window` in the `created` hook.

```html
<script>
export default {
  data () {
    return {
      width: window.innerWidth // This will fail
    }
  },
  created () {
    this.width = window.innerWidth // This will fail
  },
  mounted () {
    this.width = window.innerWidth // This is okay
  }
}
</script>
```

**Third-party components which uses `window`**

Import the component dynamically and wrap it with `<ClientOnly>`.

```html
<template>
  <Layout>
    <ClientOnly>
      <Slider>
        <div>Slide 1</div>
      </Slider>
    </ClientOnly>
  </Layout>
</template>

<script>
export default {
  components: {
    Slider: () => import('slider-component')
  }
}
</script>
```

**Third-party packages which uses `window`**

Import the packages in the `mounted` hook.

```html
<script>
export default {
  mounted () {
    import('some-package').then(m => {
      m.default()
    })
  }
}
</script>
```

## Hydration errors

Vue fails silently in production mode and doesn't give a warning about where hydration failed. Set `mode` to `development` in `chainWebpack` to activate warnings:

```js
chainWebpack (config) {
  config.mode('development')
}
```

**Find invalid HTML**

Firefox does a really good job at detecting invalid HTML markup. Open the `View Page Source` window and look for elements marked on red. **This will not work in development.**

**Common mistakes**

Nested paragraphs caused by custom HTML in `p` elements. Use a `div` instead:

```html
- <p v-html="$page.post.content" />
+ <div v-html="$page.post.content" />
```

Tables missing the `tbody` element:

```html
<table>
+ <tbody>
    <tr>
      <td></td>
    </tr>
+ </tbody>
</table>
```

## Problems after upgrading

If you have problems after upgrading try remove `.cache` and `node_modules` folder and run `yarn` again.
