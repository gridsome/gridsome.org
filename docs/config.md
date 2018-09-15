# Project configuration

A basic `gridsome.config.js` file would look somthing like this:

```js
export default {
  siteName: 'Gridsome',
  siteUrl: 'https://www.gridsome.org',
  siteDescription: 'Gridsome is a blazing-fast static site generator...'
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

#### baseUrl
- Type `string`
- Default `'/'`

Gridsome assumes your project is serverd from the root of your domain.
Change this option to `'/my-app/'` if your project will be hosted in a
subdirectory called `my-app`. The baseUrl is allways `'/'` when developing
locally.

#### titleTemplate

- Type `string`
- Default `%s - <siteName>`

Set a template for the title tag. The `%s` placeholder is replaced with title
from metaInfo you set in your pages.

#### chainWebpack

- Type `Function`

A function that will receive an instance of ChainableConfig powered by
[webpack-chain](https://github.com/neutrinojs/webpack-chain).

#### plugins

- Type `Array`
- Default `[]`

[Read more about using plugins](/docs/plugins)

## Advanced

#### host

- Type `string`
- Default `'localhost'`

#### port

- Type `number`
- Default `8080`
