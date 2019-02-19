# Project configuration

Gridsome requires `/gridsome.config.js` to work. Plugin and project settings are located here. A basic configuration file would look something like this:

```js
module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://www.gridsome.org',
  plugins: []
}
```
  
## siteName

- Type `string`
- Default `<dirname>`

Set a name for your project. The name is typically used in the title tag.

## siteDescription
- Type `string`
- Default `''`

The description is used as description on your frontpage.

## siteUrl

- Type `string`
- Default `''`

## pathPrefix
- Type `string`
- Default `'/'`

Gridsome assumes your project is served from the root of your domain.
Change this option to `'/my-app'` if your project will be hosted in a
subdirectory called `my-app`.

## titleTemplate

- Type `string`
- Default `%s - <siteName>`

Set a template for the title tag. The `%s` placeholder is replaced with title
from metaInfo you set in your pages.

## plugins

- Type `Array`
- Default `[]`

[Read more about using plugins](/docs/install-plugins)

## icon

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

## chainWebpack

- Type `Function`

A function that will receive an instance of ChainableConfig powered by
[webpack-chain](https://github.com/neutrinojs/webpack-chain).


## configureServer

- Type `Function`

Configure the development server.

[Read more about configuring the development server](/docs/server-api#apiconfigureserverfn)

## css.loaderOptions

- Type `Object`
- Default `{ sass: { indentedSyntax: true }, stylus: { preferPathResolver: 'webpack' } }`

Pass options to CSS-related loaders. For example:

```js
{
  css: {
    loaderOptions: {
      scss: {
        // options here will be passed to sass-loader
      },
      less: {
        // options here will be passed to less-loader
      }
    }
  }
}
```

Supported loaders are:

- [css-loader](https://github.com/webpack-contrib/css-loader)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [less-loader](https://github.com/webpack-contrib/less-loader)
- [stylus-loader](https://github.com/shama/stylus-loader)

## host

- Type `string`
- Default `'localhost'`

## port

- Type `number`
- Default `8080`
