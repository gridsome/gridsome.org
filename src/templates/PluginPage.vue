<template>
  <DocsLayout :links="links">
    <div class="post" v-html="$page.doc.content"></div>
  </DocsLayout>
</template>

<page-query>
query PluginPage ($path: String!) {
  doc: pluginPage (path: $path) {
    content
    title: headings (depth: h1) {
      value
    }
  }
}
</page-query>

<script>
import links from '@/data/plugin-links.yaml'

export default {
  computed: {
    links () {
      return links
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


