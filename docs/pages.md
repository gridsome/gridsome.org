# Pages 页面

所有`src/pages`目录下的`vue`文件将生成网页。根据文件位置和名称生成对应的访问链接，链接自动改为小写加短横线格式。

All `.vue` files in the `src/pages` directory will become the pages for your
website. The page URL is generated based on the location and name of the file.
The path will be lowercased and slugified automatically. So if have a file with
the name `AboutUs.vue`, it will get the slug `about-us`. Files named `Index.vue`
are treated like `index.html` files and will not get a slug. As an example:
`src/pages/features/Index.vue` will become `/features` and
`src/pages/features/Awesome.vue` will become `/features/awesome`.

页面模板必须要包裹在布局组件中。

Page templates should be wrapped in a layout component like:

```html
<template>
  <Layout title="Hello">
    Welcome to my website...
  </Layout>
</template>
```

#### Setting the HTML head title 设置头标题

使用`vue-meta`设置元信息。

Gridsome uses **vue-meta** to manage meta info.

```html
<script>
export default {
  metaInfo: {
    title: 'My title'
  }
}
</script>
```

[Read more about vue-meta.](https://github.com/declandewet/vue-meta)

#### Querying data with GraphQL 查询数据

每一个页面可以使用`<page-query>`查询数据。结果存储在`$page`属性中。

Every page component can have a `<page-query>` block with a GraphQL query
to fetch data from data sources. The results will be stored in a
`$page` property inside the page component.

```html
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node._id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Blog {
  allWordPressPost (limit: 5) {
    edges {
      node {
        _id
        title
      }
    }
  }
}
</page-query>
```
