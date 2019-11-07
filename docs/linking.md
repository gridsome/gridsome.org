# Linking

The `<g-link>` component is available globally in all your Pages, Templates & Components. It's a wrapper for [router-link](https://router.vuejs.org/api/#router-link-props) from Vue Router.

## How it works

`<g-link>` uses IntersectionObserver to prefetch linked pages when link is in view. **This makes browsing around in a Gridsome site very fast because the clicked page is already downloaded.**

## How to use

### Link between pages

The following example links to the `src/pages/About.vue` page:

```html
<g-link to="/about/">About us</g-link>
```

Always add a trailing slash when linking to other internal pages. Because the HTML file for the page is a `index.html` file in a directory. Paths generated for nodes already include a trailing slash.

You do not need to include the [`pathPrefix`](/docs/config#pathprefix) option in the `<g-link>` path.

### Link to external pages

To link to external links you need to use the normal tag:

```html
<a href="https://www.example.com">www.example.com</a>
```

### Link to #anchor links

To link to **#anchor** links you need to use the normal `<a href="#anchor">` tag.

## Options

```html
<!-- Link with string path -->
<g-link to="/about/">About us</g-link>

<!-- Link with variable path -->
<g-link :to="node.path">Read more</g-link>
```

|Property |Default|Description|
|---------|-------|-----------|
|to       |*required*|[Guide →](https://router.vuejs.org/api/#to)|
|exact    |				|[Guide →](https://router.vuejs.org/api/#exact)|
|active-class|active				|[Guide →](https://router.vuejs.org/api/#active-class)|
|exact-active-class|active--exact				|[Guide →](https://router.vuejs.org/api/#exact-active-class)|
