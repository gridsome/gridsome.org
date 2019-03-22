<template>
  <Section class="home-intro" dots="true">
    <div class="text-center">

        <div class="home-message" hidden>
          <g-link to="/blog/2019/02/19/gridsome-v05"><span>🎉 Gridsome v0.5 released &rarr;</span></g-link>
        </div>
        

        <h1 class="home-intro__title post"> 
          Build, design, deploy at full speed
        </h1>

        <p class="home-lead lead post">
          Gridsome is a <strong>Vue.js-powered <vue-logo width="30" height="30" /></strong>  modern site generator that helps developers build insanely fast, modern <strong>JAMstack websites and PWAs</strong> </strong>
        </p>

        <p class="home-links">
          <g-link  to="/docs" class="button primary button--large">
            Get started
          </g-link>
        </p>

        <p class="home-info">
          <span>Open source MIT Licensed. </span>
          <a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener">
            <span>GitHub (v{{ $static.metaData.gridsomeVersion }})</span>
          </a>
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
import VueLogo from '~/assets/images/vue-logo.svg'

export default {
  components: {
    Ecosystem,
    VueLogo,
  }
}
</script>

<style lang="scss">
.home-intro {
  &__title {
    font-size: 3rem;
    color: var(--primary-color);

    a {
      color: var(--primary-color);
      opacity: 1;
    }
  }

  @media screen and (max-width: 850px) {
    &__title {
      font-size: 2rem;
    }
  }
}

.home-lead {
  font-size: 1.3rem;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 850px) {
    & {
      font-size: 1.05rem;
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
