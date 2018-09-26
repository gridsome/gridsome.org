<template>
  <PluginsLayout>
    <div class="post" v-html="$page.doc.content"></div>
  </PluginsLayout>
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
import PluginsLayout from '@/layouts/Plugins'

export default {
  components: {
    PluginsLayout
  },
  metaInfo () {
    const { title } = this.$page.doc

    return {
      title: title.length ? title[0].value : undefined
    }
  }
}
</script>


