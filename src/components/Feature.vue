<template>
  <div class="feature">
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
      if(this.gradient) classes.push('gradint-' + this.gradient)
      return classes
    }
  }
}
</script>

<style lang="scss">
  .feature {
    text-align:center; 

    svg.icon {
      width: 32px;
      height: 32px;
      margin: 0 auto var(--space);
      opacity: .5;
      stroke-width: 1.6!important;
      path {
        stroke-width: 1.6!important;
      }
    }

    h3 {
      margin-bottom: 1rem;
      padding: 0 1rem;
      line-height: 1.4;
    }
  }
</style>
