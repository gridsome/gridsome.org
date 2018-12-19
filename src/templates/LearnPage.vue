<template>
  <DocsLayout :subtitles="$page.doc.subtitles" :links="links">
    <div class="post mb" v-html="$page.doc.content"></div>
  </DocsLayout>
</template>

<page-query>
query LearnPage ($path: String!) {
  doc: learnPage (path: $path) {
    path
    content
    title: headings (depth: h1) {
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
import links from '@/data/learn-links.yaml'

export default {
  computed: {
    links () {
      return links
    },
  },
  metaInfo () {
    const { title } = this.$page.doc

    return {
      title: title.length ? title[0].value : undefined
    }
  }
}
</script>