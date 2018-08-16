<template>
  <Layout>

    <Section dots="true" class="text-center">

      <div class="container-md">
        <h1 >Build better, faster, mobile-first websites with Vue.js</h1>
        
        <p>Gridsome is a static JAMstack framework for building blazing fast, offline-ready, PWA frontends with Vue.js and GraphQL</p>
      </div>
      <div class="container">
        <Source-animation />
      </div>
      
    </Section>

    <Section dots="true" dark="true">
      DARK SECTIONGridsome is a static JAMstack framework for building blazing fast, offline-ready, PWA frontends with Vue.js and GraphQL
    </Section>

  </Layout>
</template>

<script>
import SourceAnimation from '@/components/SourceAnimation.vue'

export default {
  components: {
    SourceAnimation
  }
}
</script>

<style>

</style>
