# @gridsome/source-filesystem

> 变文件为查询，导数据到组件 Transform files into content that can be fetched with GraphQL in your components.

## Install 安装

- `yarn add @gridsome/source-filesystem`
- `npm install @gridsome/source-filesystem`

## Usage 使用

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        route: '/blog/:year/:month/:day/:slug'
      }
    }
  ]
}
```

文件源需要转换器对文件进行解析。上面的例子查询指定目录下的`markdown`文件，然后使用`tranformer-remark`进行转换。

A filesystem source will also require a transformer in order to parse the files. The example above is looking for a set of [Markdown](https://en.wikipedia.org/wiki/Markdown) files, so in order to let [Gridsome](https://gridsome.org) understand the content of the files, you must install [@gridsome/transformer-remark](https://www.npmjs.com/package/@gridsome/transformer-remark) as a dev dependency in your project. Gridsome will automatically transform the files for you as long as a transformer that supports your files is found in your `package.json`.

## Options 选项

#### path 路径

- Type: `string` *required*

Where to look for files. Should be a glob path.

#### typeName 类型名称

- Type: `string`
- Default: `'FileNode'`

类型和模板名称，用于`graphql`和`component`互动的接口。

The GraphQL type and template name. A `.vue` file in `src/templates` must match the `typeName` to have a template for it.

#### route 路由

- Type: `string`

通过路径结构生成动态路由。对一个数据源，只会生成一个包含全面访问节点的单一路由。可以使用`year`、`month`、`day`、`slug`参数。如果忽略，将基于每个文件的路径和文件名，自动生成路由

Define a dynamic route if your source is able to have a certain pathname structure. This will generate only a single route for all nodes from this source. Possible url params are `year`, `month`, `day` and `slug`. If omitted, a route for each file will be generated based on their path and filename.

#### index 索引页

- Type: `Array`
- Default: `['index']`

定义索引页的文件名。

Define which files to consider as index files. These files will not have their filename appear in its route path and will become the main `index.html` file of the directory. Make sure there is only one possible index file per directory if multiple index names are defined.
