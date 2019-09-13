# Page transitions

Gridsome is mounting & unmounting the whole layout on route change. This happens because of how Gridsome deals with [Layouts](/docs/layouts/). Layouts are just wrapper components per page. This means, by default, it's only possible to have **Enter transitions**.

✌️ If you want to keep, for example, Header and Footer between page transitions you'll need to [override App.vue](/docs/overriding-app/) and add a transition there.


## Create an Enter transition
To make [transitions](https://vuejs.org/v2/guide/transitions.html) work now you need to use only **Enter transitions**. You can do this by adding a `appear` attribute to `<transition>`.

Here is an example where we **fade in** content on route change in a [layout](/docs/layouts/):

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
