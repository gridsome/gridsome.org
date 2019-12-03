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
      <ul>
        <li>Why Gridsome?</li>
        <li>How it works</li>
        <li>What is JAMstack</li>
        <li>Git-based Workflow</li>
        <li>Gridsome VS Nuxt</li>
        <li>Gridsome VS Gatsby</li>
        <li>Contributors</li>
        <li>Newsletter</li>

      </ul>
    </template>

    <h2 class="text-xl font-bold mb-5">Why Gridsome?</h2>
    <p class="text-xl">Gridsome is a free and open source Vue.js-powered framework for building websites & apps that are fast by default 🚀.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <h2 class="text-xl font-bold mb-5">What is JAMstack?</h2>

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

