# Linking
Gridsome has a global `<g-link>` component that can be used anywhere to link between pages without page reloads (Single Page Application). It is a wrapper for **router-link** from Vue Router.

Learn more about [it heree](/docs/link).

## Link between pages
To link to `~/src/pages/About.vue` use `<g-link to="/about" />`.


## Link to external pages
To link to external links you need to use the normal `<a>` tag. `g-link` is only for internal pages.


## Active link class
Active links gets a `.active` class. [Exact links](https://router.vuejs.org/api/#exact) gets a `.active--exact` class. This can be changed with [options](/docs/link).
