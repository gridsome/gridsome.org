<template>
  <Section class="home-intro" dots="true">
    <div class="grid-cols grid-cols--2 flex">
      <div class="text-center">

          <div class="home-message" hidden>
            <g-link to="/blog/2019/02/19/gridsome-v05"><span>🎉 Gridsome v0.5 released &rarr;</span></g-link>
          </div>

          <h1 class="home-intro__title post"> 
            <em>Faster</em> development, <em>faster</em> websites
          </h1>

          <p class="home-lead lead post">
            Gridsome is a <strong>Vue.js-powered</strong> framework that makes it easy and fun for developers to create beautiful, modern <strong>websites & apps</strong> that are <em>fast by default</em>.
          </p>

          <p class="home-links">
            <g-link  to="/docs" class="button primary button--large">
              Get started
            </g-link>
          </p>

          <p class="home-info">
            <code>
              <span>Open source MIT Licensed. </span>
              <a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener">
              <span>GitHub (v{{ $static.metaData.gridsomeVersion }})</span>
              </a>
            </code>
          </p>
      </div>
      <div>
        <Connect />
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
import VueLogo from '~/assets/images/vue-logo.svg'
import Connect from '~/components/Connect.vue'

export default {
  components: {
    VueLogo,
    Connect
  }
}
</script>

<style lang="scss">
.home-intro {
  border-top:0;
  padding: calc(15px + 1%) 0;
  
  &__title {
    font-size: 3em;
    color: var(--primary-color);
  }

  @media screen and (max-width: 850px) {
    &__title {
      font-size: 2.4rem;
    }
  }

  @media screen and (max-width: 550px) {
    &__title {
      font-size: 2rem;
    }
  }
}

.home-lead {
  font-size: 1.3rem;
  padding: 0 2%;
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
