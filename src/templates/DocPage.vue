<template>
  <DocsLayout>
    <div v-html="$page.doc.content"></div>
  </DocsLayout>
</template>

<graphql>
query DocPage ($path: String!) {
  doc: docPage (path: $path) {
    content
  }
}
</graphql>
