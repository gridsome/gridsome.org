<template>
  <Section class="home-intro" dots="true">
    <div class="text-center">

        <div class="home-message" hidden>
          <g-link to="/blog/2019/02/19/gridsome-v05"><span>🎉 Gridsome v0.5 released &rarr;</span></g-link>
        </div>
        

        <h1 class="home-intro__title"> 
            Build incredible fast <br class="hide-for-small" />websites & apps
        </h1>

        <p class="lead  container-md">
         Gridsome is a <strong>Vue.js-powered</strong>, modern site generator for building the fastest possible websites for any CMS, APIs or Markdown-files.
        </p>

        <p class="home-info">
          <span>Open-source MIT Licensed. </span>
          <a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener">
            <span>GitHub (v{{ $static.metaData.gridsomeVersion }})</span>
          </a>
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

<static-query>
query HomeIntro {
  metaData {
    gridsomeVersion
  }
}
</static-query>

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
    font-size: 3rem;
    color: var(--primary-color);
  }

  @media screen and (min-width: 1200px) {
    &__title {
      font-size: 3.6rem;
    }
  }

  @media screen and (max-width: 750px) {
    &__title {
      font-size: 1.8rem;
    }
  }
}

.home-info {
  font-size: .85rem;
  margin-top: -.5rem;
  opacity: .7;
}

.home-message {
  margin-bottom: 1.5rem;

  a {
    display: inline-block;
    background-color: var(--primary-bg);
    padding: 2px 15px;
    border: 1px solid var(--border-color-darker);
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
