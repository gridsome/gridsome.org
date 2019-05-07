<template>
  <Starters class="starter">
      <div class="starter__header flex mb">
        <g-image class="starter__header-platform-logo" v-if="$page.starter.platforms" :src="$page.starter.platforms.logo" />

        <strong class="starter__header-title">WordPress Default</strong>
        <span class="starter__header-author">By Tommy Vedvik</span> 
        <div class="flex gap-10" style="margin-left: auto">
          <a class="button button--small">View on Github</a>
          <a class="button button--small">Live preview</a>
          <a class="button button--small primary">Install</a>
        </div>
      </div>
      <div class="starter__image" style="order:2" v-if="$page.starter.screenshot">
        <g-image :src="$page.starter.screenshot" />
      </div>
      <div class="starter__content">
        
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
      logo (width: 30, height: 30)
    }
    author {
      title
      path
    }
    path
    screenshot (width: 1000, height: 500)
  }
}
</page-query>

<style lang="scss">
.starter {
  &__header {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: var(--space);
  }
  &__header-title {
    margin-right: 1rem;
  }
  &__header-author {
    color: rgba(0,0,0,.5);
  }
  &__header-platform-logo {
    margin: 0 1rem 0 0;
  }
  &__image {
    img {
      border-radius: 5px;
      box-shadow: var(--glow);
    }
  }
}
</style>
