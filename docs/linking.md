# Linking
The `g-link` component is available globally in all your templates. It's a wrapper for [router-link](https://router.vuejs.org/api/#router-link-props) from Vue Router.

`g-link` uses Intersection Observer to prefetch linked pages when link is in view. This makes browsing around in Gridsome very fast because the clicked page is already downloaded.


## How to use

### Link between pages
To link to `~/src/pages/About.vue` use `<g-link to="/about" />`.

### Link to external pages
To link to external links you need to use the normal `<a href="https://url">` tag.

### Link to #anchor links
To link to #anchor links you need to use the normal `<a href="#anchor">` tag.


## Options

```html
<!-- Link with string path -->
<g-link to="/about">About us</g-link>

<!-- Link to a named route -->
<g-link :to="{ name: 'about' }">About us</g-link>

<!-- Link with variable path -->
<g-link :to="node.path">Read more</g-link>
```

|Property |Default|Description|
|---------|-------|-----------|
|to       |*required*|[Guide →](https://router.vuejs.org/api/#to)|
|exact    |				|[Guide →](https://router.vuejs.org/api/#exact)|
|active-class|active				|[Guide →](https://router.vuejs.org/api/#active-class)|
|exact-active-class|active--exact				|[Guide →](https://router.vuejs.org/api/#exact-active-class)|
