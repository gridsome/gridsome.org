# Project configuration

A basic `gridsome.config.js` file would look something like this:

```js
module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://www.gridsome.org',
  plugins: []
}
```

## Configuration options

#### siteName

- Type `string`
- Default `<dirname>`

Set a name for your project. The name is typically used in the title tag.

#### siteDescription
- Type `string`
- Default `''`

The description is used as description on your frontpage.

#### siteUrl

- Type `string`
- Default `''`

#### pathPrefix
- Type `string`
- Default `'/'`

Gridsome assumes your project is served from the root of your domain.
Change this option to `'/my-app'` if your project will be hosted in a
subdirectory called `my-app`.

#### titleTemplate

- Type `string`
- Default `%s - <siteName>`

Set a template for the title tag. The `%s` placeholder is replaced with title
from metaInfo you set in your pages.

#### icon

- Type `string | Object`
- Default `'src/favicon.png'`

Gridsome will use any image located at `src/favicon.png` as favicon and
touchicon by default, but you can define another path or sizes etc. The icon
should be a square and minimum 16 pixels. The favicon will be resized to 16, 32,
96 pixels. And the touchicon will be resized to 76, 152, 120, 167, 180 pixels by
default.

```js
{
  icon: 'src/my-icon.png'
}
```

Use a different image for touch icons:

```js
{
  icon: {
    favicon: 'src/my-favicon.png',
    touchicon: 'src/my-touchicon.png'
  }
}
```

Define custom sizes and disable effects on iOS < 7 devices:

```js
{
  icon: {
    favicon: {
      src: 'src/my-favicon.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: 'src/my-touchicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  }
}
```

#### chainWebpack

- Type `Function`

A function that will receive an instance of ChainableConfig powered by
[webpack-chain](https://github.com/neutrinojs/webpack-chain).

#### plugins

- Type `Array`
- Default `[]`

[Read more about using plugins](/docs/install-plugins)

## Advanced

#### host

- Type `string`
- Default `'localhost'`

#### port

- Type `number`
- Default `8080`
