<template>
  <div class="source-animation">
    <div>
      <g-image alt="cms" class="cms" src="../assets/images/CMS.png" />
    </div>
    <svg width="60" height="20" viewBox="0 0 60 20" class="dot">
      <path d="M1 9.5H99" />
    </svg>
    <div class="gridsome-logo">
      <Logo />
      <div class="text-rotate">
        <span>Vue.js</span>
      </div>
    </div>
    <svg width="60" height="20" viewBox="0 0 60 20" class="dot after">
      <path d="M1 9.5H99" />
    </svg>
    <div>
      <g-image alt="devices" class="cms" src="../assets/images/device.png" />
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

<style lang="scss" scoped>
  .source-animation {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cms {
    max-width: 330px;
    margin: 10px 10px 0 10px;
    display: block;
  }

  .dot {
    stroke: #ccc;
    stroke-width: 5px;
    stroke-linecap: round;
    stroke-dasharray: 0 15;
    animation: stroke 300ms linear infinite;
  }

  .after {
     stroke: var(--primary-color);
  }

  .gridsome-logo {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    position: relative;
    text-align: center;
    padding: 15px;
    margin: 10px;
    animation: pulse 2s infinite;
    box-sizing: border-box;
    background: linear-gradient(180deg, var(--primary-color) 0%,  var(--secondary-color) 100%);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.09);
    svg {
      fill: #fff;
    }
  }

  .text-rotate {
    position: absolute;
    left:0;
    font-size: .9rem;
    right:0;
    top: 120%;
  }

</style>


