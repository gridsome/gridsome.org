<template>
  <Section class="home-intro" dots="true" dark="true" style="padding-top: 0; padding-bottom: 0;">
    <div class="home-cols grid-cols grid-cols--2" style="max-width: 1080px; margin: 0 auto;">
      <div class="text-center" style="padding-top: 20%; padding-bottom: 20%;">    
        <h1 class="home-title">
            <span>Modern website <br>development made </span>
            <vue-typer :text="['easy','fun','fast']" caret-animation="smooth"></vue-typer>
        </h1>

        <p class="home-lead " style="padding-left: 7%; padding-right: 7%;">
          Gridsome is a Vue.js-powered, modern site generator for building the fastest possible websites for any Headless CMS, APIs or Markdown-files.
        </p>

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
import { VueTyper } from 'vue-typer'
import LinesOut from '~/assets/images/home-lines-out.svg'
import LinesIn from '~/assets/images/home-lines-in.svg'
import Logo from '~/assets/images/home-logo.svg'

export default {
  components: {
    LinesOut,
    LinesIn,
    Logo,
    VueTyper
  }
}
</script>

<style lang="scss">

@media screen and (max-width: 750px) {
 .home-intro .grid-cols{
    grid-template-columns: repeat(1, 1fr);
  }
}

.vue-typer {
  min-width: 85px;
  display: inline-block;
  text-align: left;

  .custom.char {
    color: currentColor;
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

.home-lead {
  font-weight: 300;
}

.home-title {
  line-height: 1.3;
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
