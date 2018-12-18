<template>
  <Section dots="true" dark="true" sway="true" style="padding-top: 0; padding-bottom: 0;">
    <div class="grid-cols grid-cols--2" style="max-width: 1080px; margin: 0 auto;">
      <div class="text-center" style="padding-top: 18%; padding-bottom: 18%;">    
        <h1>
          <span class="home-title">
            Build super fast, modern websites with Vue.js
          </span>
        </h1>

        <p class="home-lead lead" style="padding-left: 3%; padding-right: 3%">
          Gridsome is a <strong>Vue-powered static site generator</strong> for building CDN-ready websites and apps for any headless CMS, local files or APIs
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
            <span>GitHub (v0.3.6)</span>
          </a>
        </p>
      </div>
      <div class="hide-for-small" style="padding-top: 3%;">
        <div class="home-anim">
          <div class="home-anim__source-logos"><g-image alt="Logos" src="~/assets/images/cms-logos.png" /></div>
          <div class="home-anim__lines-in"> <lines-in /> </div>
          <div class="home-anim__lines-out"> <lines-out  /> </div>
          <div class="home-anim__logo"> <Logo /> </div>
        </div>
      </div>
    </div>

  </Section>
</template>

<script>
import LinesOut from '~/assets/images/home-lines-out.svg'
import LinesIn from '~/assets/images/home-lines-in.svg'
import Logo from '~/assets/images/home-logo.svg'

export default {
  components: {
    LinesOut,
    LinesIn,
    Logo
  }
}
</script>

<style lang="scss">

.home-title {
  line-height: 1.3;
  font-size: 1.9rem;
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

  > div {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  &__logo svg  {
    animation: pulseSvg 1500ms ease-out infinite;
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