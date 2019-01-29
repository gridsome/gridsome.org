<template>
  <Section class="home-intro" dots="true" dark="true" style="padding-top: 0; padding-bottom: 0;">
    <div class="home-cols grid-cols grid-cols--2" >
      <div  style="padding-top: 22%; padding-bottom: 22%; padding-left: 10%;">    
        <h1 class="home-title"> 
            Build 
            <VueTyper :text="words" type-delay="30" caret-animation="smooth" />
            <br /> apps & websites
            <br /> with Vue.js
        </h1>

        <p class="home-links">
          <g-link  to="/docs" class="button primary">
            Get started
          </g-link>
          <g-link  to="/learn" class="button">
            Tutorial
          </g-link>
        </p>

        <p class="home-info">
          <span>Open-source MIT Licensed. </span>
          <a href="//github.com/gridsome/gridsome" target="_blank">
            <span>GitHub (v{{ $static.metaData.gridsomeVersion }})</span>
          </a>
        </p>
        
      </div>
      <div class="hide-for-small">
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
import LinesOut from '~/assets/images/home-lines-out.svg'
import LinesIn from '~/assets/images/home-lines-in.svg'
import Logo from '~/assets/images/home-logo.svg'

const words = ['blazing fast', 'future-ready', 'static & secure', 'beautiful']

export default {
  components: {
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

@media screen and (max-width: 750px) {
 .home-intro .grid-cols{
    grid-template-columns: repeat(1, 1fr);
  }
}

@keyframes Type {
  from  {
    transform: translateX(-5px);
    color: var(--primary-color);
  } to  { 
    color: currentColor;
  }
}

.vue-typer {
  display: inline-block;
  text-align: left;

  .custom.char {
    color: #FFF;
  }
  .custom.char.typed {
    animation: Type .3s;
  }

  .custom.caret {
    background-color: rgba(255,255,255,.5);
    margin: 0 2px;
    width: 2px;
  }
}

.home-cols {
  align-items: center;
}
.home-links {
  margin-top: 2.5rem;
}

.home-lead {
  font-weight: 300;
}

.home-title {
  line-height: 1.3;
  font-size: 2.2rem;
}

.home-info {
  font-size: .85rem;
  opacity: .6;
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
