<template>
  <Layout>
    <home-intro />
    <home-features />
    <home-fast />
    <home-how-it-works />
    <home-tabs />
    <home-blog />
  </Layout>
</template>

<script>

import HomeIntro from '@/components/home/HomeIntro.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeTabs from '@/components/home/HomeTabs.vue'
import HomeFast from '@/components/home/HomeFast.vue'

import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'

export default {
  components: {
    HomeIntro,
    HomeFeatures,
    HomeTabs,
    HomeFast,
    HomeBlog,
    HomeHowItWorks,
  },
  
  metaInfo: {
    title: 'Vue.js-powered static site generator',
    meta: [
      { name: 'description', content: 'Gridsome is an open-source, Vue-powered modern site generator that builds performance into every website automatically. Gridsome makes it easy and fun for developers to create fast, beautiful websites without needing to become a performance expert.'
      }
    ],
  }
}
</script>


