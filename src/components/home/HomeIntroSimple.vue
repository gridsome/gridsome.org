<template>
  <Section class="intro" dots="true">
    <div class="intro__top grid-cols grid-cols--2 grid-cols--full-md flex">

      <div>
        <Connect style="max-width: 580px; margin: 0 auto" />
      </div>

      <div style="padding: 0 var(--space-x2) ;">
        <div class="intro__message mb" hidden></div>

        <h1 class="intro__title post"> 
          Build fast JAMstack
          <br class="hide-for-small"/>websites & apps 
          <br class="hide-for-small"/>with Vue.js
        </h1>
        <p class="intro__lead lead post mb" style="padding-right: 5%">
          Gridsome is a <strong>Vue.js-powered framework</strong> that helps developers build modern websites & PWAs for any Headless CMS, Content APIs or Markdown files.
        </p>
        <p class="intro__links">
          <g-link  to="/docs" class="button primary button--large">
            Get started
          </g-link>
        </p>

        <p class="intro__info">
          <span>Open-source MIT Licensed. </span>
          <a href="//github.com/gridsome/gridsome" target="_blank">
            <span>GitHub (v{{ $static.metaData.gridsomeVersion }})</span>
          </a>
        </p>

      </div>

      
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
import Connect from '~/components/Connect.vue'

export default {
  components: {
    Examples,
    Connect
  }
}
</script>

<style lang="scss">
.intro {

  padding: var(--space) 0;

  @media screen and (max-width: 850px) {
    & {
      text-align: center;
    }
  }

  &__title {
    font-size: 2.8rem;
    color: var(--primary-color-dark);
    letter-spacing: -1px;
    font-weight: 600;
    @media screen and (max-width: 850px) {
      & {
        font-size: 2.2rem;
      }
    }

    @media screen and (max-width: 550px) {
      & {
        font-size: 2rem;
      }
    }
  }

  &__info {
    font-size: .9rem;
    color: rgba(0,0,0,.7);
  }

  &__examples {
    max-width: 1100px;
    margin: 0 auto;
  }

  &__message {
    margin-bottom: 1.5rem;
    a {
      display: inline-block;
      background-color: var(--primary-color-dark);
      text-decoration: none;
      padding: 4px 15px;
      border-radius: 99px;
      &:hover {
        background-color: rgba(0,0,0,.3);
      }
    }
  }
}
</style>
