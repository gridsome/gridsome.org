<template>
  <Layout>
    <div v-html="$page.doc.content"></div>
  </Layout>
</template>

<graphql>
query DocPage ($path: String!) {
  doc: docPage (path: $path) {
    content
  }
}
</graphql>
