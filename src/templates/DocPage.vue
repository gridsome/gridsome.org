<template>
  <DocsLayout :subtitles="subtitles" :links="links">
    <VueRemarkContent class="post mb"></VueRemarkContent>
  </DocsLayout>
</template>

<page-query>
query ($id: ID!) {
  doc: docPage (id: $id) {
    title
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
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
    },
    subtitles() {
      // Remove h1, h4, h5, h6 titles
      let subtitles = this.$page.doc.subtitles.filter(function(value, index, arr){
        return [2,3].includes(value.depth)
      })
      return subtitles
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
