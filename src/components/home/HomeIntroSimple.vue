<template>
  <Section class="home-intro" dots="true">
    <div class="text-center container-md">

        <div class="home-message">
          <g-link to="/blog/2019/02/19/gridsome-v05"><span>🎉 Gridsome v0.5 released &rarr;</span></g-link>
        </div>
        

        <h1 class="home-intro__title"> 
            Build incredible fast websites <br class="hide-for-small" />& apps with Vue.js
        </h1>

        <p class="lead">
          Gridsome is a Vue.js-powered, open source developer framework for <br class="hide-for-small" />building websites and apps that load instantly
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
.home-message {
  margin-bottom: 1.5rem;

  a {
    display: inline-block;
    padding: 2px 15px;
    border: 1px solid var(--border-color);
    border-radius: 99px;
    opacity: .75;
    transition: box-shadow .3s, opacity .3s;
    &:hover {
      opacity: 1;
      box-shadow: var(--glow);
    }
  }
}
</style>
