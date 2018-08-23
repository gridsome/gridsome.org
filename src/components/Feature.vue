<template>
  <div class="feature">
    <div class="feature__icon" :class="iconClasses">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    </div>
    <div class="feature__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'gradient'],
  computed: {
    iconClasses() {
      let classes = []
      if(this.gradient) classes.push('gradient-' + this.gradient)
      return classes
    }
  }
}
</script>

<style lang="scss">
  .feature {
    text-align:center; 

    &__icon {
      width: 50px;
      height: 50px;
      border-radius: 99px;
      margin: 0 auto 30px;
      background-color: #ccc;
      display:flex;
      align-items:center;
      justify-content:center;
      svg {
        margin-top:-3px;
      }
    }

    &__inner {
      flex: 1;
    }

    h3 {
      margin-bottom: 1rem;
      padding: 0 1rem;
      line-height: 1.4;
    }
  }
</style>
