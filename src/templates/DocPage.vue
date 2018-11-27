<template>
  <DocsLayout :subtitles="$page.doc.subtitles">
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
    subtitles: headings (depth: h2) {
      value
      anchor
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
  p > img {
    margin-bottom: 0;
  }
  
  h1, h2, h3 {
    padding-top: 6rem;
    margin-top: -5rem;
    position: relative;
    z-index: -1;

    a {
      float: left;
      position: relative;
      top: 0.12em;
      margin-left: -1.2em;
      font-size: 0.85em;
      text-align: center;
      width: 0.8em;
      opacity: 0.0;

      &::before {
        content: " ";
        position: absolute;
        top: 0;
        height: 100%;
        width: calc(100% + 0.5em);
      }

      &::after {
        display: none;
      }

      &:hover {
        text-decoration: none;
        border-bottom: 1px solid;
      }
    }

    &:hover a {
      opacity: 1.0;
    }
  }

  h2 {
    &::before {
      content: " ";
      display: block;
      margin-bottom: 1.5rem;
      border-top: 1px solid var(--border-color);
    }
  }

  ul > li > p {
    font-weight: 400;
  }
}
</style>
