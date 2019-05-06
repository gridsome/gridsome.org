<template>
  <Starters>
    <g-link to="/starters" class="mb" style="display:block;">← All Starters</g-link>
    <h1>{{ $page.starter.title }}</h1>
    <VueMarkdown v-if="readme" :source="readme" />
  </Starters>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Starters from '~/layouts/Starters.vue'

const cache = {}

export default {
  components: {
    VueMarkdown,
    Starters
  },

  data () {
    return {
      readme: null,
      isLoading: true
    }
  },

  async mounted () {
    const { repo } = this.$page.starter
    const url = `https://api.github.com/repos/${repo}/readme`

    if (cache[repo]) {
      this.readme = cache[repo]
      this.isLoading = false
      return
    }

    this.isLoading = true

    const res = await fetch(url)
    const json = await res.json()
    const readmeRes = await fetch(json.download_url)
    
    this.readme = cache[repo] = await readmeRes.text()
    this.isLoading = false
  }
}
</script>

<page-query>
query Starters ($id: String!) {
  starter(id: $id) {
    title
    repo
  }
  defaultStarters: allStarter (order: ASC, perPage: 4) {
    edges {
      node {
        id
        title
        description
        preview
        repo
        platforms {
          title
          logo
        }
        author {
          title
          path
        }
        path
        screenshot (width: 560, height: 664)
      }
    }
  },
  starters: allStarter (order: ASC, skip: 4) {
    edges {
      node {
        id
        title
        description
        preview
        repo
        author {
          title
          path
        }
        path
        screenshot (width: 560, height: 664)
      }
    }
  }
}
</page-query>