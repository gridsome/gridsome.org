<template>
  <Section class="home-intro" dots="true" primary="true">
    <div class="flex grid-cols grid-cols--2">
      <div>
        <div style="padding: 0 5%">
          <div class="home-message" hidden>
            <g-link to="/blog/2019/02/19/gridsome-v05"><span>Introducing Gridsome Staging &rarr;</span></g-link>
          </div>

          <h1 class="home-intro__title post"> 
            JAMstack made simple with Vue.js
          </h1>

          <p class="home-lead lead post">
            Gridsome is a <strong>Vue.js-powered</strong> framework that makes it easy and fun for developers to create modern, static <strong>websites & apps</strong> that are <em><g-link to="/docs/fast-by-default">fast by default</g-link></em>.
          </p>

          <p class="home-links mb">
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

     
      </div>
      <div>
        <Examples />
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

export default {
  components: {
    Examples
  }
}
</script>

<style lang="scss">
.home-intro {
  border-top:0;
  
  .section__dots-bg {
    bottom:0;
  }
  
  &__title {
    font-size: 3.4rem;
    color: var(--primary-color);
    letter-spacing: -1px;
    font-weight: 600;
  }

  @media screen and (max-width: 850px) {
    &__title {
      font-size: 2.3rem;
    }
  }
}

.home-lead {
  font-size: 1.3rem;
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
</style>
