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
    margin-bottom: 2rem;

    h3 {
      margin-bottom: .5rem;
      line-height: 1.4;
    }
    
  }
</style>
