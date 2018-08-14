<template>
  <div class="source-animation">

    <svg width="100" height="20" viewBox="0 0 100 20" class="dot">
      <path d="M1 9.5H99" />
    </svg>

    <div class="gridsome-logo">
      <svg viewBox="0 0 53 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; "><defs><path d="M40.6821196,14.2130045 L40.6968696,14.1982545 L53,26.501385 L26.501385,53 L-1.42108547e-13,26.498615 L26.498615,7.10542736e-15 L30.4760128,3.97739781 L26.526295,7.92711562 L26.4990279,7.89984849 L7.89984849,26.4990279 L26.5009721,45.1001515 L45.1001515,26.5009721 L37.9981034,19.398924 L37.8254926,19.569396 L26.3921309,31.0539588 L22.6811377,27.3429656 L38.2466092,11.7774941 L40.6821196,14.2130045 Z" id="path-1"></path></defs> <g stroke="none" stroke-width="1" fill-rule="evenodd"><use id="Combined-Shape"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#path-1"></use></g></svg>
    </div>

    <svg width="100" height="20" viewBox="0 0 100 20" class="dot after">
      <path d="M1 9.5H99" />
    </svg>


  </div>
</template>

<style lang="scss" scoped>
  .dot {
    stroke: #ccc;
    stroke-width: 5px;
    stroke-linecap: round;
    stroke-dasharray: 0 15;
    animation: stroke 300ms linear infinite;
  }

  .after {
     stroke: #8FD46A;
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
    background: linear-gradient(180deg, #4DBA87 0%, #8FD46A 100%);
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
      box-shadow: 0 0 0 0 #4DBA87;
    }
    70% {
      box-shadow: 0 0 0 10px transparent;

    }
    100% {
      box-shadow: 0 0 0 0 transparent;

    }
  }
</style>


