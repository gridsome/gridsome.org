<template>
  <Layout class="layout-homepage">

    <LazyHydrate when-idle>
      <home-intro-simple />
    </LazyHydrate>
    
    <LazyHydrate ssr-only>
      <home-how-it-work-simple />
    </LazyHydrate>
    
    <LazyHydrate ssr-only>
      <home-features />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <home-examples />
    </LazyHydrate>

    <LazyHydrate ssr-only>
      <home-community />
    </LazyHydrate>

    <LazyHydrate ssr-only>
      <home-blog />
    </LazyHydrate>
  </Layout>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'
import HomeHowItWorkSimple from '@/components/home/HomeHowItWorkSimple.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeExamples from '@/components/home/HomeExamples.vue'
import HomeCommunity from '@/components/home/HomeCommunity.vue'

export default {
  components: {
    LazyHydrate,
    HomeIntroSimple,
    HomeHowItWorkSimple,
    HomeExamples,
    HomeCommunity,
    HomeFeatures,
    HomeBlog
  },
  
  metaInfo: {
    title: 'Vue.js-powered Static Site Generator'
  }
}
</script>

<style>
.layout-homepage header{
  border-color: transparent;  
}
</style>


