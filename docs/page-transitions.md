# Page transitions
Gridsome is currently mounting & unmounting the whole layout on route change. This happens because of how Gridsome deals with [Layouts](/docs/layouts). Layouts are added as wrapper components per page and template to make it possible to use [slots](https://vuejs.org/v2/guide/components-slots.html) and [props](https://vuejs.org/v2/guide/components-props.html) on the layout component.

This means that it is **not possible** to do **enter/leave** transitions for content while keeping header, but it is possible to use **enter transitions**.

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