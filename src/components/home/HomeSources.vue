<template>
  <div class="source-animation text-center">
    <div class="source-animation__image">
      <g-image alt="cms" class="source-animation__image-cms" src="../assets/images/CMS.png" />
      <p>1. Connect to any data source</p>
    </div>
    <svg width="60" height="20" viewBox="0 0 60 20" class="source-animation__dot">
      <path d="M1 9.5H99" />
    </svg>
    <div>
      <div class="source-animation__logo">
        <Logo />
      </div>
      <p>2. Build. Vue.js, GraphQL, webpack</p>
    </div>
    <svg width="60" height="20" viewBox="0 0 60 20" class="source-animation__dot source-animation__dot--after">
      <path d="M1 9.5H99" />
    </svg>
    <div class="source-animation__image">
      <g-image alt="devices" class="source-animation__image-device" src="../assets/images/device.png" />
      <p>3. Deploy static site</p>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/logos/gridsome-small'

export default {
  components: {
    Logo
  }
}

</script>

<style lang="scss">
  .source-animation {
    display: flex;
    align-items: center;
    justify-content: center;

    &__image {
      max-width: 320px;
      margin: 0 10px;
    }

    &__logo {
      width: 80px;
      min-width: 80px;
      min-height: 80px;
      height: 80px;
      border-radius: 100%;
      display:flex;
      align-items:center;
      justify-content: center;
      margin: 10px;
      position: relative;
      animation: pulse 2s infinite;
      box-sizing: border-box;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.09);
      svg {
        fill: #fff;
        max-width: 40px;
      }
    }

    &__dot {
      stroke: #ccc;
      stroke-width: 5px;
      stroke-linecap: round;
      stroke-dasharray: 0 15;
      animation: stroke 300ms linear infinite;
    }

    &__dot--after {
       stroke: var(--primary-color);
    }
  }
</style>


