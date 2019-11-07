<template>
  <div class="connect">
    
    <transition name="fade">
      <div class="connect__slide" key=1 v-if="activeSlide == 0"><g-image class="connect__logos" src="~/assets/images/connect-logos.png" width="1180" blur="10" retina="true" alt="The Modern Web Logos" /></div>
      <div  class="connect__slide"key=2 v-else-if="activeSlide == 1"><g-image class="connect__logos" src="~/assets/images/connect-logos-2.png" width="1180" blur="10" retina="true" alt="The Modern Web Logos 2" /></div>
      <div class="connect__slide" key=3 v-else-if="activeSlide == 2"><g-image class="connect__logos" src="~/assets/images/connect-logos-3.png" width="1180" blur="10" retina="true" alt="The Modern Web Logos 3" /></div>
    </transition>
    
    <g-image class="connect__main" src="~/assets/images/connect-bg.png" width="1180" blur="10" retina="true" alt="The Modern Web Background" />

    <svg class="connect__dots" width="958" height="833" viewBox="0 0 958 833" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M470 127.683C470 181.683 470.371 187.786 477.5 243.183" stroke="#2AD6A1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 30"/>
      <path d="M176.401 253.252C235.5 246 284.5 253.252 373 304" stroke="#2AD6A1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 30"/>
      <path d="M94.5 470.683C165.776 425.389 421.5 546.683 470.865 513.08" stroke="#2AD6A1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 30"/>
      <path d="M453.5 680.183C412.5 680.183 362.22 620.869 352.74 594.887" stroke="#2AD6A1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 30"/>
      <path d="M818 614.183C719.5 725.683 653.174 630.762 565.175 603.762" stroke="#2AD6A1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 30"/>
      <path d="M775.5 270.183C699 292.183 689.433 312.527 623.372 349.107" stroke="#2AD6A1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 30"/>
      <path d="M791.835 441.342C732.834 454.842 741.333 494.842 683.334 510.342" stroke="#2AD6A1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 30"/>
    </svg>


  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: 0
    }
  },

  mounted () {
    this._counter = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % 3
    }, 1500)
  },

  destroyed () {
    clearTimeout(this._counter)
  }
}
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s, transform 1s;
  transform: translateY(0);
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(5px);
}

.connect {
  position: relative;

  img {
    margin: 0;
    width: 100%;
  }

  svg,
  &__slide,
  &__logos {
    width: 100%;
    left:0;
    top:0;
    height: 100%;
    position: absolute;
  }
  svg
   path {
    stroke-linecap: round;
    stroke-dasharray: 0.5 30;
    stroke: var(--primary-color-dark);
    animation: DotsAnim 600ms linear infinite;
    opacity: .6;
  }

}

@keyframes DotsAnim{
  100% {
      stroke-dashoffset: -30;
  }
}
</style>