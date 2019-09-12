<template>
  <DocsLayout :subtitles="$page.doc.subtitles" :links="links">
    <VueRemarkContent class="post mb"></VueRemarkContent>
  </DocsLayout>
</template>

<page-query>
query DocPage ($id: ID!) {
  doc: docPage (id: $id) {
    title
    headings (depth: h1) {
      value
    }
    subtitles: headings (depth: h2) {
      value
      anchor
    }
  }
}
</page-query>

<script>
import links from '@/data/doc-links.yaml'

export default {
  computed: {
    links () {
      return links
    }
  },
  metaInfo () {
    const { title, headings } = this.$page.doc

    return {
      title: title || (headings.length ? headings[0].value : undefined)
    }
  }
}
</script>
