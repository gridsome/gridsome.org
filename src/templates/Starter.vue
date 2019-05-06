<template>
  <Starters class="starter">
    <g-link to="/starters" class="mb" style="display:block;">← All Starters</g-link>    
    <div style="width: 80%;" v-if="isLoading">
      <Skeleton />
      <Skeleton style="height: 15px" />
      <Skeleton style="height: 15px; width: 80%; opacity: .6;" />
      <Skeleton style="height: 15px; width: 85%; opacity: 1;"  />
      <Skeleton style="height: 15px; width: 85%; opacity: 1;"  />
      <Skeleton style="height: 15px; width: 65%; opacity: 1;"  />
      <Skeleton style="height: 15px; width: 55%; opacity: 1;"  />
      <Skeleton style="height: 15px; width: 75%; opacity: 1;"  />
    </div>

    <div v-html="readme" />
  </Starters>
</template>

<script>
import markdown from '../utils/markdown'
import Starters from '~/layouts/Starters.vue'
import Skeleton from '~/components/Skeleton.vue'

const cache = {}

export default {
  components: {
    Starters,
    Skeleton
  },

  data () {
    return {
      readme: '',
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
    const markdownSource = await readmeRes.text()

    this.readme = cache[repo] = markdown(markdownSource)
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