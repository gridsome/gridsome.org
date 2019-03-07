<template>
  <Layout>
      <Section>
        <h1 class="text-center">Why Gridsome</h1>
        <p class="lead text-center container-md">
          Gridsome makes it easy and fun for developers to create ultra fast, beautiful websites without needing to become a performance expert.
        </p>
      </Section>
      <home-features />
      <home-tabs />
      <home-fast />
  </Layout>
</template>

<script>

import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeTabs from '@/components/home/HomeTabs.vue'
import HomeFast from '@/components/home/HomeFast.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'

export default {
  components: {
    HomeIntroSimple,
    HomeFeatures,
    HomeTabs,
    HomeFast,
    HomeBlog,
    HomeHowItWorks,
  },
}
</script>


