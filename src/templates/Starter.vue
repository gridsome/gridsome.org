<template>
  <Starters class="starter">
    <div class="grid-cols grid-cols--2">
      <div class="starter__image" style="order:2" v-if="$page.starter.screenshot">
        <g-image :src="$page.starter.screenshot" />
      </div>
      <div class="starter__content">
        
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
      </div>

    </div>
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
    platforms {
      title
      logo
    }
    author {
      title
      path
    }
    path
    screenshot (width: 900)
  }
}
</page-query>
