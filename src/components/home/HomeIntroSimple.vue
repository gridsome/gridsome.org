<template>
  <Section class="home-intro" dots="true">
    <div class="text-center">

        <div class="home-message" hidden>
          <g-link to="/blog/2019/02/19/gridsome-v05"><span>🎉 Gridsome v0.5 released &rarr;</span></g-link>
        </div>
        

        <h1 class="home-intro__title post"> 
          Build faster, better, safer websites
        </h1>

        <p class="home-lead lead container-md post">
          Gridsome is an open-source <strong>Vue.js-powered</strong> modern site generator for 
          building extremely fast, secure JAMstack sites and apps
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
    font-size: 2.9rem;
    color: var(--primary-color);

    a {
      color: var(--primary-color);
      opacity: 1;
    }
  }

  @media screen and (max-width: 750px) {
    &__title {
      font-size: 1.8rem;
    }
  }
}

.home-lead {
  font-size: 1.35rem;
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
