# Layouts

Layout components are used to wrap pages and templates. Layouts should contain components like headers, footers or sidebars that will be used across the site.

> Every layout should have a `<slot />` component. This is where the page and template content will be inserted.

```html
<!-- Layout -->
<template>
  <div>
    <header />
    <slot /> <!-- Page content will be inserted here  -->
    <footer />
  </div>
</template>
```


## Add layout to a page or template
When you have created a layout you need to import to your pages and templates. This is done inside the `<script>` tag.

```html
<!-- Page -->
<template>
  <Layout>
    Add page content here
  </Layout>
</template>

<script>
  import Layout from '~/layouts/Default.vue'
  export default {
  	components {
  	 Layout
  	}
  }
</script>

```


## Make a layout global
If you don't want to import the layout into every page or template you can make a layout global. To make a layout global go to `src/main.js` and import your layout file into this file.

For example: 
```javascript
// src/main.js

import Layout from '~/layouts/Default.vue'
```

Then make the layout global inside the export function.

```javascript
// src/main.js

import Layout from '~/layouts/Default.vue'

export default function (Vue, { head, router, isServer }) {
  Vue.component('Layout', Layout)
}
```

You can now use `<Layout>` anywhere in your Gridsome project without importing it to every page:

```html
<!-- Page -->
<template>
  <Layout>
    Add page content here
  </Layout>
</template>

<script>
  export default {
  }
</script>

```


## Passing Props to layouts
Since layouts work like components is it possible pass Props to layouts. For example a page can look like this:


```html
<!-- Page -->
<template>
  <Layout :sidebar="true">
    Add page content here
  </Layout>
</template>
```

This will pass a Prop to a layout with `sidebar = true`. In the **Layout component** this could look like this: 

```html
<!-- Layout -->
<template>
  <div>
    <div class="main-content">
      <slot />
    </div>
    <div v-if="sidebar">
      Lets show the sidebar!
    </div>
  </div>
</template>

<script>
  export default {
    props: ['sidebar']
  }
</script>
```


## Multiple content slots
To add multiple slots to a layout you need to name them. In this example have we added a sidebar slot that will only show if page has sidebar content.

```html
<!-- Layout -->
<template>
  <div>
    <slot /> <!-- Default slot  -->
    <div class="sidebar" v-if="$slots.sidebar">
      <slot name="sidebar" /> <!-- Sidebar slot  -->
    </div>
  </div>
</template>
```

Pages can now add content to this slot like this:

```html
<!-- Page -->
<template>
  <Layout>
    This is the default content

    <template slot="sidebar">
      This will be added to sidebar slot from the page
    </template>
  </Layout>
</template>
```