<template>
  <DocsLayout>
    <div v-html="$page.doc.content"></div>
  </DocsLayout>
</template>

<graphql>
query DocPage ($path: String!) {
  doc: docPage (path: $path) {
    content
    title: headings (depth: h1) {
      value
    }
  }
}
</graphql>

<script>
export default {
  metaInfo () {
    const { title } = this.$page.doc

    return {
      title: title.length ? title[0].value : undefined
    }
  }
}
</script>
