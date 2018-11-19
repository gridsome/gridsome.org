# Directory structure

基本文件结构

A basic Gridsome project would be structured like this:

```sh
.
├── package.json
├── gridsome.config.js
└── src
    ├── main.js
    ├── layouts
    │   └── Default.vue
    ├── pages
    │   ├── Index.vue
    │   └── Blog.vue
    └── templates
        └── BlogPost.vue
```

## The root directory 根目录

#### package.json 包配置文件

Contains information about which plugins is installed in your project.

#### gridsome.config.js 项目配置文件

This file contains configuration and options for installed plugins.

[Read more about project config](/docs/config)

## The src directory 源代码文件

#### main.js 主入口文件

主要用于安装插件，注册布局和组件。

Install Vue plugins etc. in this file if you want to. This file is
also the place to register layouts or components that you want to be
globally available.

#### Layouts directory 布局目录

布局组件

Create components in this directory if you want to share one or more
layouts for your pages or templates.

#### Pages directory 页面目录

页面组件，每一个组件对应一个页面。每个页面基于目录生成访问路径。比如主页面`src/pages/Index.vue`

All components in this directory becomes the pages for your website.
Each page will get its path based on the location of its `.vue` file.
`src/pages/Index.vue` will become the homepage for your website,
while `src/pages/AboutUs.vue` will be `example.com/about-us`.

#### Templates directory 模板目录

当导入外部数据源时，每个页面将会在本目录下查询器模板，模板名必须匹配`graphql`中的查询结构定义。

If you are importing an external data source, like posts from a
WordPress blog, into your project. Then each post would look for a
component in this directory for its template. The name of the
component file must match the node type in your GraphQL schema.

[Read more about layouts, pages and templates](/docs/layouts-pages-templates)

## Recommendation 建议

#### Shared or global components 共享和全局组件目录

Components that you want to use in several pages or templates can be
in a `src/components` directory.

#### Data files 数据文件

Data files like `.json` or `.yaml` can be stored in a `src/data`
directory.
