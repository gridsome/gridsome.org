<template>
  <Section class="intro" dots="true" primary="true">
    <div class="intro__top text-center">
      <div class="intro__message" hidden>
        <g-link to="/blog/2019/02/19/gridsome-v05"><span>Introducing Gridsome Staging &rarr;</span></g-link>
      </div>

      <h1 class="intro__title post"> 
        JAMstack made simple with Vue.js
      </h1>

      <p class="intro__lead lead post mb">
        Gridsome is a <strong>Vue.js-powered</strong> framework that makes it easy and fun for developers to create modern, static <strong>websites & apps</strong> that are <em><g-link to="/docs/fast-by-default">fast by default</g-link></em>.
      </p>

      <p class="intro__links text-center">
        <g-link  to="/docs" class="button primary button--large">
          Get started
        </g-link>
      </p>

      <p class="intro__info mb-x2">
        <span>Open source MIT Licensed. </span>
        <a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener">
        <span>GitHub (v{{ $static.metaData.gridsomeVersion }})</span>
        </a>
      </p>
    </div>
    <div class="intro__examples mb">
      <Examples />
    </div>
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
import Examples from '~/components/Examples.vue'

export default {
  components: {
    Examples
  }
}
</script>

<style lang="scss">
.intro {
  border-top:0;

  &__top {
    padding: 2.5vh 0 5vh;
  }

  &__title {
    font-size: 3rem;
    color: var(--primary-color);
    letter-spacing: -1px;
    font-weight: 600;
    @media screen and (max-width: 850px) {
      &__title {
        font-size: 2.3rem;
      }
    }
  }

  &__lead {
    font-size: 1.4rem;
    max-width: 900px;
    margin: 0 auto;
  }

  &__info {
    font-size: .85rem;
    margin-top: -.5rem;
    opacity: .7;
  }

  &__examples {
    max-width: 1100px;
    margin: 0 auto;
  }

  &__message {
    margin-bottom: 1.5rem;
    a {
      display: inline-block;
      background-color: var(--code-color);
      text-decoration: none;
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

  .section__dots-bg {
    bottom:0;
  }
}
</style>
