<template>
  <div class="connect">
    <g-image class="connect__logos" src="~/assets/images/connect-logos.png" width="1180" blur="10" retina="true" alt="The Modern Web" />
    <g-image class="connect__main" src="~/assets/images/connect-bg.png" width="1180" blur="10" retina="true" alt="The Modern Web" />
    <connect-dots />
  </div>
</template>

<script>
import ConnectDots from '~/assets/images/connect-dots.svg'
export default {
  components: {
    ConnectDots
  }
}
</script>

<style lang="scss">
.connect {
  position: relative;


  img {
    margin:0;
  }

  svg,
  &__logos {
    width: 100%;
    left:0;
    top:0;
    height: 100%;
    position: absolute;
  }

   svg path {
    stroke-width: 9px;
    stroke-linecap: round;
    stroke-dasharray: 0 30;
    stroke: var(--primary-color);
    opacity: 0.5;
    animation: stroke 400ms linear infinite;
  }
}
</style>