<template>
  <DocsLayout :subtitles="$page.doc.subtitles" :links="links">
    <div class="post mb" v-html="$page.doc.content"></div>
    <p>
      <a :href="editLink" target="_blank">
        <Github />
        <span>Edit this page on GitHub</span>
      </a>
    </p>
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
import Github from '@/assets/images/github-logo.svg'

export default {
  components: {
    Github
  },
  computed: {
    links () {
      return links
    },
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