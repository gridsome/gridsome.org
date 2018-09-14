# Link

The `g-link` component is available globally in all your templates. It's a wrapper for [router-link](https://router.vuejs.org/api/#router-link-props) from Vue Router.

```html
<!-- Link with string path -->
<g-link to="/about">About us</g-link>

<!-- Link to a named route -->
<g-link :to="{ name: 'about' }">About us</g-link>

<!-- Link with variable path -->
<g-link :to="node.path">Read more</g-link>
```

|Property |Default| |
|---------|-------|-|
|to       |*required*
