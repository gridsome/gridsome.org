<template>
  <Layout>
    
    <DocLinks slot="sidebar" />

    <template name="default">
      <VueRemarkContent class="post mb"></VueRemarkContent>
    </template>

    <template slot="toc">
      <ul v-if="subtitles.length > 0 && subtitles[0].depth !== 3">
        <li class="submenu__item text-xs mb-1 block font-mono" :class="{'ml-2 text-xs' : subtitle.depth === 3}" v-for="subtitle in subtitles" :key="subtitle.value">
          <a class="submenu__link" :href="subtitle.anchor">
            {{ subtitle.value }}
          </a>
        </li>
      </ul>
    </template>
  </Layout>
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
import Intro from '@/components/Intro.vue'
import DocLinks from '@/components/DocLinks.vue'
import Github from '~/assets/images/github-logo.svg'

export default {
  components: {
    Intro,
    Github,
    DocLinks
  },
  computed: {
    subtitles() {
      // Remove h1, h4, h5, h6 titles
      let subtitles = this.$page.doc.subtitles.filter(function(value, index, arr){
        return [2,3].includes(value.depth)
      })
      return subtitles
    },
    currentPath () {
      return this.$route.matched[0].path
    },
    editLink () {
      let path = this.currentPath
      if((path.match(new RegExp("/", "g")) || []).length == 1) path = path + '/README'
      return `https://github.com/gridsome/gridsome.org/blob/master${path}.md`
    },
    items () {
      return this.links.reduce((acc, group) => (acc.push(...group.items), acc), [])
    },
    currentIndex () {
      return this.items.findIndex(item => {
        return item.link.replace(/\/$/, '') === this.$route.path.replace(/\/$/, '')
      })
    },
    nextPage () {
      return this.items[this.currentIndex + 1]
    },
    previousPage () {
      return this.items[this.currentIndex - 1]
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
