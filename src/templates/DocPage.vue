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

<page-query>
query DocPage ($path: String!) {
  doc: docPage (path: $path) {
    path
    content
    title: headings (depth: h1) {
      value
    }
  }
}
</page-query>

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

<style lang="scss">
.docs-page {
  h2::before, h3::before {
    content: "";
    display: block;
  }

  h2::before {
    height: 3.0em;
  }

  h3::before {
    height: 1.5em;
  }

  ul > li > p {
    font-weight: 400;
  }
}
</style>
