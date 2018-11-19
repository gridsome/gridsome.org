# Gridsome configuration 配置

一个基本的配置如下：

A basic `gridsome.config.js` file would look something like this:

```js
export default {
  siteName: 'Gridsome',
  siteUrl: 'https://www.gridsome.org',
  siteDescription: 'Gridsome is a blazing-fast static site generator...'
}
```

## Configuration options 选项

#### siteName 站点名称

- Type `string`
- Default `<dirname>`

选择站点的名称

Set a name for your project. The name is typically used in the title tag.

#### siteDescription 站点描述
- Type `string`
- Default `''`

给你的站点一个很好的描述

The description is used as description on your frontpage.

#### siteUrl 站点网址

- Type `string`
- Default `''`

#### pathPrefix 路径前缀
- Type `string`
- Default `'/'`

网站默认使用域名根目录

Gridsome assumes your project is served from the root of your domain.
Change this option to `'/my-app'` if your project will be hosted in a
subdirectory called `my-app`.

#### titleTemplate 标题模板

- Type `string`
- Default `%s - <siteName>`

设置标题模板，可以依次自定义标题

Set a template for the title tag. The `%s` placeholder is replaced with title
from metaInfo you set in your pages.

#### icon 图标

- Type `string | Object`
- Default `'src/favicon.png'`

默认网页图标是`src/favicon.png`，触摸屏也是一样。你可以自定义图标，网页图标尺寸会自动压缩为16，32，96。触摸屏为 76, 152, 120, 167, 180。

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

触摸屏不同尺寸定义方法 Use a different image for touch icons:

```js
{
  icon: {
    favicon: 'src/my-favicon.png',
    touchicon: 'src/my-touchicon.png'
  }
}
```

旧设备定义方法 Define custom sizes and disable effects on iOS < 7 devices:

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

#### chainWebpack 链式配置

- Type `Function`

使用`chainWebpack`更新设置，类型为函数。

A function that will receive an instance of ChainableConfig powered by
[webpack-chain](https://github.com/neutrinojs/webpack-chain).

#### plugins 插件

- Type `Array`
- Default `[]`

请查看插件部分

[Read more about using plugins](/docs/plugins)

## Advanced

#### host 主机

- Type `string`
- Default `'localhost'`

#### port 端口

- Type `number`
- Default `8080`
