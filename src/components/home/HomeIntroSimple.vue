<template>
  <Section class="home-intro" dots="true">
    <div class="grid-cols grid-cols--2 flex container" style="max-width: 1150px;">
        <div style=" padding-right: 6%;">
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
              Get started
            </g-link>
          </p>

        </div>

        <div class="bg">
          <svg class="dots" width="755" height="844" viewBox="0 0 755 844" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17.103" cy="239.103" r="17.103" fill="#04A775"/>
          <circle cx="737.103" cy="237.103" r="17.103" fill="#04A775"/>
          <circle cx="737.103" cy="624.103" r="17.103" fill="#04A775"/>
          <circle cx="17.103" cy="607.103" r="17.103" fill="#04A775"/>
          <circle cx="364.103" cy="826.103" r="17.103" fill="#04A775"/>
          <circle cx="376.27" cy="17.103" r="17.103" fill="#04A775"/>
          </svg>

          <svg class="circle" width="815" height="816" viewBox="0 0 815 816" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="407.396" cy="408.3" r="402.396" stroke="#A1D3C3" stroke-opacity="0.52" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 30"/>
          </svg>


          <g-image class="home-image" blur="10" src="~/assets/images/JAMSTACK.png"/>
        </div>

    
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
const words = ['insanely fast', 'JAMstack', 'static & secure', 'future-ready']

export default {
  components: {
    Ecosystem,
    VueLogo,
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



.bg {
  position: relative;
  .circle,
  .dots {
    position: absolute;
    z-index: 0;
    left:0;
    top: -10%;
    margin-left: -6%;
    height: 100%;
    width: 87%;
  }
  .dots {
    width: 80%;
    margin-left: -3%;
  }
  .circle {
    animation: spin 30s linear infinite;
    z-index: -1;
  }
  .dots {
    animation: spin 15s linear infinite;
  }


  .home-image {
    position: relative;
    z-index: 1;
  }
}

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


.home-image {
  max-width: 100%;
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
