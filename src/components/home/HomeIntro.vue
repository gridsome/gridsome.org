<template>
  <Section dots="true" dark="true" dots-animation="true" class="text-center">
  <div class="container-md">
    
    <logo-animated />

    <h1>
      <div class="home-title container-sm">
        Build super fast, modern websites with Vue.js
      </div>
    </h1>

    <p class="home-lead lead  container-sm">
      Gridsome is a <strong>Vue-powered static site generator</strong> for building high-performance frontends <strong>for any CMS or data source</strong>
    </p>

    <p class="home-links">
      <g-link  to="/docs" class="button primary">
        Get started
      </g-link>
    </p>
  </div>

  </Section>
</template>

<style lang="scss">

.home-title {
  line-height: 1.3;
}
.home-info {
  font-size: .85rem;
}

</style>

<script>
import VueLogo from '~/assets/images/vue-logo.svg'
import LogoAnimated from '~/components/LogoAnimated.vue'

export default {
  components: {
    VueLogo,
    LogoAnimated
  }
}
</script>
