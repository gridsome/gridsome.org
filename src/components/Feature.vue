<template>
  <div class="feature">
    <div class="feature__icon" :class="iconClasses">
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
