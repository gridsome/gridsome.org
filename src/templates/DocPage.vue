<template>
  <DocsLayout :subtitles="$page.doc.subtitles" :links="links">
    <div class="post mb" v-html="$page.doc.content"></div>
    <p>
      <a :href="editLink" target="_blank" class="github-edit-link">
        <Github />
        <span>Edit this page on GitHub</span>
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
    subtitles: headings (depth: h2) {
      value
      anchor
    }
  }
}
</page-query>

<script>
import links from '@/data/doc-links.yaml'
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

<style lang="scss">
.github-edit-link {
  font-size: .9rem;
  font-weight: normal;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
  
  &:not(:hover) {
    color: var(--primary-link-color);
  }

  svg {
    margin-right: .5rem;
  }
}
</style>