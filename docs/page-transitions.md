# Page transitions
By default, Gridsome is currently mounting & unmounting the whole layout on route change. This happens because of how Gridsome deals with [Layouts](/docs/layouts). Layouts are added as wrapper components per page and template to make it possible to use [slots](https://vuejs.org/v2/guide/components-slots.html) and [props](https://vuejs.org/v2/guide/components-props.html) on the layout component.

This means that it is **not intended** to do **enter/leave** transitions for content while keeping header, but it is possible to use **enter transitions**.

### Create an Enter transition
To make [transitions](https://vuejs.org/v2/guide/transitions.html) work now you need to use only **Enter transitions**. You can do this by adding a `appear` attribute to `<transition>`.

Here is an example where we **fade in** content on route change in a [layout](/docs/layouts):

```html 
<template>
  <div id="main-wrapper">
    <header />
      <transition name="fade" appear>
        <main> <!-- a wrapper for slot is needed -->
          <slot /> <!-- the content -->
        </main>
      </transition>
    <footer />
  </div>
</template>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
```

### Create an Enter transition while keeping a Header on the page

In case you want a Header that is not part of the transition, you may choose to render it above the [Layout](/docs/layouts), replacing Gridsome's [default render function](https://github.com/gridsome/gridsome/blob/952148db357c2ca80db5977a90f6ffadd588601f/gridsome/app/app.js#L24) using the [Client API](/docs/client-api).

`gridsome.client.js`:
```js
import MyHeader from '@/components/MyHeader.vue'

export default function (Vue, options, context) {
  Vue.component('my-header', MyHeader)

  context.appOptions.render = h => {
    return h('div', {}, [
      h('my-header'),
      h('transition', { attrs: { name: 'page-fade', mode: 'out-in' } }, [
        h('router-view', { attrs: { id: 'app' } })
      ])
    ])
  }
}
```
`@/components/MyHeader.vue`:
```
<template>
  <ClientOnly>
    <header />
  </ClientOnly>
</template>

<style>
.page-fade-enter-active {
  transition: opacity 0.5s;
}

.page-fade-enter {
  opacity: 0;
}
</style>
```
