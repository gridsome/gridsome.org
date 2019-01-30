# Using CDN Fonts (Typekit, Google Fonts, etc)

The easiest way to add a CDN-hosted font is by inserting it directly into your global head. Add this to your `src/main.js`to insert a CDN font:

```js
export default function (Vue, { head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto'
  })
}
```

# Local Fonts
It's important to note that the [aliases](/docs/directory-structure#aliases) mentioned in the Directory Structure don't work in your `<style>` tags because they aren't included into the Webpack bundle, so you need to use relative pathing to them.

Given the following directory:

```sh
└── src/
    ├── main.js
    ├── layouts/
    │   └── Default.vue
    └── assets/
        └── Helvetica.ttf
```

You would import your font like this from `Default.vue`:

```html
<style lang="sass">
  @font-face {
    font-family: Northwell;
    src: url('../assets/Northwell.otf');
    font-weight: normal;
  }
</style>
```
