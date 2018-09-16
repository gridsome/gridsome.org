<template>
  <DocsLayout>
    <div class="post docs-page mb" v-html="$page.doc.content"></div>
    <p>
      <a :href="editLink" target="_blank">
        Edit this page on GitHub
      </a>
    </p>
  </DocsLayout>
</template>

<graphql>
query DocPage ($path: String!) {
  doc: docPage (path: $path) {
    path
    content
    title: headings (depth: h1) {
      value
    }
  }
}
</graphql>


<script>
export default {
  computed: {
    editLink () {
      const path = this.$page.doc.path
      return `https://github.com/gridsome/gridsome.org/blob/master${path}.md`
    }
  },
  metaInfo () {
    const { title } = this.$page.doc

    return {
      title: title.length ? title[0].value : undefined
    }
  }
}
</script>
