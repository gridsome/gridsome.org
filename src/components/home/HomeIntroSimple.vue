<template>
  <Section class="intro" dots="true">
    <div class="intro__top text-center">
      <div class="intro__message" hidden>
        <g-link to="/blog/2019/02/19/gridsome-v05"><span>Introducing Gridsome Staging &rarr;</span></g-link>
      </div>

      <h1 class="intro__title post"> 
        <em>Faster</em> development, <em>faster</em> websites
      </h1>

      <p class="intro__lead lead post mb">
        Gridsome is a <strong>Vue.js-powered static site generator</strong> that makes it easy and fun for developers to create modern <strong>websites & apps</strong> that are <em><g-link to="/docs/fast-by-default">fast by default</g-link></em>.
      </p>

      <p class="intro__links text-center">
        <g-link  to="/docs" class="button primary button--large">
          Get started
        </g-link>
      </p>

      <p class="intro__info">
        <span>Open source MIT Licensed. </span>
        <a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener">
          <span>GitHub (v{{ $static.metaData.gridsomeVersion }}) </span>
        </a>
      </p>
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

  &__title {
    font-size: 3.3rem;
    color: var(--primary-color);
    letter-spacing: -1px;
    font-weight: 600;
    @media screen and (max-width: 850px) {
      & {
        font-size: 2.5rem;
      }
    }
  }

  &__lead {
    font-size: 1.4rem;
    max-width: 900px;
    margin: 0 auto;
  }

  &__info {
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
}
</style>
