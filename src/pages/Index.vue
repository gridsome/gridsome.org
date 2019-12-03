<template>
  <Layout transparent-header>
    <template slot="intro">
      <Intro />
    </template>

    <template slot="sidebar">
      <template v-if="links" v-for="(group, i1) in links">
        <h3 class="menu-item" :key="`title-${i1}`">{{ group.title }}</h3>
        <template v-for="(item, i2) in group.items">
          <g-link :exact="item.link == '/docs/'" class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`">
            {{ item.title }}
          </g-link>
        </template>
      </template>
    </template>

    <template slot="toc">
      <h3>On this page</h3>
    </template>

    <h2>Why Gridsome?</h2>
  </Layout>
</template>

<script>
import links from '@/data/doc-links.yaml'
import LazyHydrate from 'vue-lazy-hydration'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeExamples from '@/components/home/HomeExamples.vue'
import HomeCommunity from '@/components/home/HomeCommunity.vue'
import HomeConnect from '@/components/home/HomeConnect.vue'
import Intro from '@/components/Intro.vue'

export default {
  components: {
    LazyHydrate,
    HomeHowItWorks,
    HomeExamples,
    HomeCommunity,
    HomeConnect,
    HomeFeatures,
    HomeBlog,
    Intro
  },
  computed: {
    links () {
      return links
    },
  },
  
  metaInfo: {
    title: 'Modern Site Generator for Vue.js'
  }
}
</script>

