```html
<template>
  <Layout>
    <h1 v-html="$page.post.title"/>
    <div v-html="$page.post.content"/>
  </Layout>
</template>

<style lang="scss">
	h1 { font-size: 32px }
</style>

<page-query>
query WordPressPost ($path: String!) {
  post: wordPressPost (path: $path) {
    title
    content
  }
}
</page-query>
```
