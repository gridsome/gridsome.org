<template>
  <Section class="home-intro" dots="true">
    <div class="text-center container-md">
        <h1 class="home-intro__title"> 
            Build incredible fast websites <br class="hide-for-small" />& apps with Vue.js
        </h1>

        <p class="lead">
          Gridsome is a Vue.js-powered, open source developer framework for <br class="hide-for-small" />building websites and apps that load instantly anywhere.
        </p>

        <p class="home-links">
          <g-link  to="/docs" class="button primary button--large">
            Get started
          </g-link>
        </p>
    </div>
    <Ecosystem />
  </Section>
</template>

<script>
import Ecosystem from '~/components/Ecosystem.vue'

export default {
  components: {
    Ecosystem
  }
}
</script>

<style lang="scss">
.home-intro {
  &__title {
    line-height: 1.3;
    font-size: 2rem;
    color: var(--primary-color);
  }
}
</style>
