# The GraphQL layer 查询层

Gridsome可以通过“源插件”使用任何数据源，这也是核心功能。所有数据通过`graphql`数据层处理，可以在`vue`组件中访问

Gridsome lets you connect to any data source by using **Source plugins**. This is the core functionality of Gridsome. All data coming from sources are pulled into a GraphQL layer that the Vue components can access.

**The GraphQL layer is only used in development and not not used in production for static sites. It only uses the GraphQL data for generating HTML files blazing fast**

![Git workflow](./images/graphql.png)

转换插件用于转换数据源中的内容节点。比如文件系统数据源中，我们使用`remark`插件添加对`markdown`文件的支持。

**Transformer plugins** is used to transform the content (Nodes) coming from the data sources. For example, for Filesystem source we have a Remark plugin that adds extra functionality to Markdown files.


## The GraphQL playground 游戏场

原生支持`graphql`游戏场，用于在开发模式下探索和测试查询。默认入口为`http://localhost:8080/___explore`

Every Gridsome project has a GraphQL playground they can use to explore and test queries when in development mode. This can usually be opened by going to `http://localhost:8080/___explore`.


## Add GraphQL to Pages 将数据添加到页面

每一个页面可以包含一个`<page-query>`块，使用`graphql`语言查询数据。结果存储在组件的`$page`属性中。

Every **Page** can have a `<page-query>` block with a GraphQL query
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


## Add pagination to GraphQL queries 添加分页

组件中内置了`graqhql`的分页查询功能。

Gridsome has built-in component and functionality to paginate GraphQL queries.

```html
<template>
  <Layout>
    <ul>
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node._id">
        <h2>{{ node.title }}</h2>
        <g-link :to="node.path">Read more</g-link>
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>

<page-query>
query Blog ($page: Int) {
  allWordPressPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        _id
        title
        path
      }
    }
  }
}
</page-query>
```
Learn more about pagination [here](/docs/pagination)


## Add GraphQL to Components

Every **Component** can have a `<static-query>` block with a GraphQL query
to fetch data from data sources. The results will be stored in a
`$static` property inside the component.

```html
<template>
  <div v-html="$static.example" />
</template>

<static-query>
query Example {
  example: examplePage (path: "/docs/example") {
    content
  }
}
</static-query>

```

## Add GraphQL to templates

对于`wordpress`类的数据源，可以使用模板用于页面布局。如果查询定义了节点`WordPressPost`，可以创建对应的`src/templates/WordPressPost.vue`模板文件。

Templates are used for page layout for the "single" endpoint of a data source like for example a WordPress blog post. If you have a node type called `WordPressPost`, then you can create a file
in `src/templates/WordPressPost.vue`.

```html

<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content">
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  wordPressPost (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
```