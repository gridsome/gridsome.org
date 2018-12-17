<template>
  <Section dots="true" dark="true" sway="true" style="padding-top: 0; padding-bottom: 0;">
    <div class="grid-cols grid-cols--2" style="max-width: 1080px; margin: 0 auto;">
      <div class="text-center" style="padding-top: 20%; padding-bottom: 20%; padding-right: 5%">    
        <h1>
          <span class="home-title">
            Build super fast, modern websites with Vue.js
          </span>
        </h1>

        <p class="home-lead lead">
          Gridsome is a <strong>Vue-powered static site generator</strong> for building high performance <strong>websites</strong> <strong> for any headless CMS, files or APIs</strong>
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
          Open-source MIT Licensed. 
          <a href="//github.com/gridsome/gridsome" target="_blank">
            <span>GitHub (v0.3.5)</span>
          </a>
        </p>
      </div>
      <div class="hide-for-small">
        <div class="cms">
        <g-image alt="Data source logos" src="~/assets/images/cms-logos.png" />

        <svg width="477" height="470" viewBox="0 0 477 470" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M113 194.5L159.5 287.5" stroke="#44C492" stroke-opacity="0.2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 15"/>
          <path d="M56 223L143 304" stroke="#44C492" stroke-opacity="0.2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 15"/>
          <path d="M193.5 188.5L185.5 283" stroke="#44C492" stroke-opacity="0.2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 15"/>
          <path d="M258 131.5L198 285" stroke="#44C492" stroke-opacity="0.1" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 15"/>
          <path d="M346 200.5L219.5 302.5" stroke="#44C492" stroke-opacity="0.1" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 15"/>
          <path d="M134 121.5L172.5 285" stroke="#44C492" stroke-opacity="0.1" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 15"/>
          <path d="M271 212L206.867 302.546" stroke="#44C492" stroke-opacity="0.2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 15"/>
          <path d="M320 272.5L229 311.272" stroke="#44C492" stroke-opacity="0.2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 15"/>
          <path d="M296.5 334L227.5 334" stroke="#44C492" stroke-opacity="0.2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 15"/>
        </svg>

        <svg class="lines-out" width="477" height="470" viewBox="0 0 477 470" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M84 419L149.5 359.5" stroke="#44C492" stroke-opacity="0.2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 15"/>
        </svg>

        <svg class="logo" width="477" height="470" viewBox="0 0 477 470" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="133" y="281" width="98" height="98" rx="49" fill="url(#paint0_linear)"/>
          <circle opacity="0.4" cx="182" cy="330" r="68.5" stroke="#5FB096"/>
          <circle opacity="0.15" cx="182" cy="330" r="85.5" stroke="#5FB096"/>
          <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M182.659 356.969C198.768 356.392 209.968 342.391 209 329.864C208.776 327.262 206.475 325.246 203.875 325.371C201.276 325.496 199.27 327.71 199.395 330.317C199.759 337.93 192.937 347.231 182.169 347.53C182.038 347.534 181.908 347.543 181.781 347.557C181.85 347.556 181.92 347.555 181.99 347.553C184.592 347.489 186.753 349.551 186.817 352.16C186.877 354.621 185.05 356.689 182.659 356.969Z" fill="url(#paint1_linear)"/>
          <path d="M192.104 330.194C192.104 327.523 194.284 325.357 196.972 325.357H204.065C206.753 325.357 209 327.523 209 330.194C209 332.866 206.753 335.032 204.065 335.032H196.972C194.284 335.032 192.104 332.866 192.104 330.194Z" fill="white"/>
          <path d="M177.221 330.202C177.221 327.526 179.386 325.357 182.054 325.357C184.722 325.357 186.888 327.526 186.888 330.202C186.888 332.877 184.722 335.046 182.054 335.046C179.386 335.046 177.221 332.877 177.221 330.202Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M186.754 307.567C186.862 310.174 184.842 312.376 182.241 312.484C171.017 312.951 164.165 321.773 164.499 330.149C164.602 332.757 162.621 334.955 160.021 335.059C157.42 335.163 155.134 333.059 155.03 330.451C154.486 316.801 165.852 303.307 181.85 303.042C184.45 302.934 186.646 304.96 186.754 307.567Z" fill="white"/>
          <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M155.015 329.945C155.079 346.438 168.576 357.337 182.222 357C184.824 356.936 186.881 354.769 186.817 352.16C186.753 349.551 184.592 347.489 181.99 347.553C173.437 347.764 164.873 341.028 164.498 330.546C164.398 332.976 162.488 334.96 160.021 335.059C157.42 335.163 155.134 333.059 155.03 330.452C155.023 330.283 155.018 330.114 155.015 329.945Z" fill="url(#paint2_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="248" y1="310" x2="157.993" y2="265.739" gradientUnits="userSpaceOnUse">
          <stop stop-color="#27A59B"/>
          <stop offset="1" stop-color="#4BCB8F"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="206.831" y1="335.55" x2="130.7" y2="355.958" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.89"/>
          <stop offset="1" stop-color="white" stop-opacity="0.51"/>
          </linearGradient>
          <linearGradient id="paint2_linear" x1="180.28" y1="349.388" x2="139.809" y2="305.699" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.8"/>
          </linearGradient>
          </defs>
        </svg>

        </div>
      </div>
    </div>

  </Section>
</template>

<style lang="scss">

.home-title {
  line-height: 1.3;
}
.home-info {
  font-size: .85rem;
  opacity: .6;
}

.cms {
  position: relative;
  transform: translateZ(0);

  img {
    display: block;
    position: relative;
    z-index: 1;
  }

  svg {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
  }

  svg.logo  {
    animation: pulseSvg 1500ms ease-out infinite;
  }

  svg path {
    stroke-width: 5px;
    stroke-linecap: round;
    stroke-dasharray: 0 20;
    animation: stroke 800ms linear infinite;
  }

  svg.lines-out path {
    stroke-width: 7px;
    animation: stroke-invert 400ms linear infinite;
  }
}

</style>

<script>
//import VueLogo from '~/assets/images/vue-logo.svg'
//import LogoAnimated from '~/components/LogoAnimated.vue'

export default {

}
</script>
