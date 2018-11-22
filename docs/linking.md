# Linking
Gridsome has a global `<g-link>` component that can be used anywhere to link between pages without page reloads. It is a wrapper for **router-link** from Vue Router.

Learn about the [Link API here](/docs/link).

### Link between pages
To link to `~/src/pages/About.vue` use `<g-link to="/about" />`.


### Link to external pages
To link to external links you need to use the normal `<a href="https://url">` tag.

### Link to #anchor links
To link to #anchor links you need to use the normal `<a href="#anchor">` tag.


### Active link class
Active links gets a `.active` class. [Exact links](https://router.vuejs.org/api/#exact) gets a `.active--exact` class. This can be changed with [options](/docs/link).

### Auto page prefetching
`<g-link>` uses Intersection Observer to prefetch linked pages when link is in view. This makes browsing around a Gridsome site very fast because the clicked page is already downloaded.

