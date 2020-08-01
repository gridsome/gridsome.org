# Add custom fonts

## Using CDN Fonts (Typekit, Google Fonts, etc)

The easiest way to add a CDN-hosted font is by inserting it directly into your global head. Add this to your `src/main.js`to insert a CDN font:

```js
export default function (Vue, { head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto'
  })
}
```

## Self-Hosting Open Source Typefaces

Self-hosting open source fonts, as explained [in the docs](https://github.com/KyleAMathews/typefaces):
- Self-hosting is significantly faster. Loading a typeface from Google Fonts or other hosted font service adds an extra (blocking) network request. While testing, we’ve found replacing Google Fonts with a self-hosted font can improve a site’s speedindex by ~300 milliseconds on desktop and 1+ seconds on 3g. This is a big deal.
- Your fonts load offline. It’s annoying to start working on a web project on the train or airplane and see your interface screwed up because you can’t access Google Fonts.
- Go beyond Google Fonts. Some typefaces aren’t on Google Fonts like Clear Sans, Cooper Hewitt, and Aleo.
- All web(site|app) dependencies should be managed through NPM whenever possible. This is the modern way.

The Typefaces project has already taken care of scripting all the Google Fonts and Font Squirrel collections into NPM packages. You can see all the fonts available [in the repo](https://github.com/KyleAMathews/typefaces).

Once you know what font you want to use, it's just a simple NPM install. For example, if want to use Open Sans:

```sh
npm i -d typeface-open-sans
```

Then you simply require the package in your `./src/main.js` file:

```js
require('typeface-open-sans')
```

And you're all done!

## Local Fonts

It's important to note that the [aliases](/docs/directory-structure#aliases) mentioned in the Directory Structure don't work in your `<style>` tags because they aren't included into the Webpack bundle, so you need to use a relative path to them.

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
