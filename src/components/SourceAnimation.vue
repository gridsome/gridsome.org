<template>
  <div class="source-animation">

    <svg width="100" height="20" viewBox="0 0 100 20" class="dot">
      <path d="M1 9.5H99" />
    </svg>

    <div class="gridsome-logo">
      <Logo />
    </div>

    <svg width="100" height="20" viewBox="0 0 100 20" class="dot after">
      <path d="M1 9.5H99" />
    </svg>


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

  .source-animation {
    display: flex;
    align-items: center;
  }

  .gridsome-logo {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    position: relative;
    text-align: center;
    padding: 15px;
    margin: 10px;
    animation: pulse 2s infinite;
    box-sizing: border-box;
    background: linear-gradient(180deg, var(--secondary-color) 0%, var(--primary-color) 100%);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.09);
    svg {
      fill: #fff;
    }
  }

  @keyframes stroke {
    to{stroke-dashoffset:-15;}
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--primary-color);
    }
    70% {
      box-shadow: 0 0 0 10px transparent;

    }
    100% {
      box-shadow: 0 0 0 0 transparent;

    }
  }
</style>


