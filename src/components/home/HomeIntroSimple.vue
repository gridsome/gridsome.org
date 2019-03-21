<template>
  <Section class="home-intro" dots="true" dark="true">
    <div class="grid-cols grid-cols--2 flex container" style="max-width: 1150px;">
        <div style="">
          <div class="home-message" hidden>
            <g-link to="/blog/2019/02/19/gridsome-v05"><span>🎉 Gridsome v0.5 released &rarr;</span></g-link>
          </div>
          

          <h1 class="home-intro__title post"> 
            Build
            <VueTyper :text="words" :type-delay="30" caret-animation="smooth" />
            <br />
            websites & apps <br />
            with Vue.js<br />
          </h1>

          <p class="lead">
           Gridsome is a free & open source Vue.js-powered developer framework for building <strong>the fastest possible websites & apps</strong> for any data sources.
          </p>

          <p class="home-links">
            <g-link  to="/docs" class="button primary button--large">
              Get started →
            </g-link>
          </p>

        </div>

        <div class="bg">
          <div class="home-anim">
            <div class="home-anim__source-logos"><g-image alt="Logos" blur="1" src="~/assets/images/cms-logos.png" /></div>
            <div class="home-anim__lines-in"> <lines-in /> </div>
            <div class="home-anim__lines-out"> <lines-out  /> </div>
            <div class="home-anim__logo"> <Logo /> </div>
          </div>
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
import Ecosystem from '~/components/Ecosystem.vue'
import VueLogo from '~/assets/images/vue-logo.svg'
import LinesOut from '~/assets/images/home-lines-out.svg'
import LinesIn from '~/assets/images/home-lines-in.svg'
import Logo from '~/assets/images/home-logo.svg'
const words = ['insanely fast', 'JAMstack', 'static & secure', 'future-ready']

export default {
  components: {
    Ecosystem,
    VueLogo,
    LinesOut,
    LinesIn,
    Logo,
    VueTyper: process.isServer
      ? { inheritAttrs: false, render: h => h('span', null, [words[0]]) }
      : () => import('vue-typer').then(({ VueTyper }) => VueTyper)
  },

  data () {
    return { words }
  }
}
</script>

<style lang="scss">



.home-intro {
  .vue-typer {
    .custom.char {
      color: currentColor;
    }
  }
}

.home-intro {
  &__title {
    font-size: 2.7rem;
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


.home-anim {
  position: relative;
  transform: translateZ(0);

  img {
    display: block;
    position: relative;
    z-index: 1;
  }

  > div:not(.home-anim__source-logos) {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  &__lines-in svg path {
    stroke-width: 4px;
    stroke-linecap: round;
    stroke-dasharray: 0 20;
    animation: stroke 800ms linear infinite;
  }

  &__lines-out path {
    stroke-width: 7px;
    stroke-linecap: round;
    stroke-dasharray: 0 20;
    animation: stroke-invert 400ms linear infinite;
  }

}
</style>
