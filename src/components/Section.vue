<template>
  <section class="section" :class="sectionClass">
    <div class="section--inner" :class="sectionClassInner">
      <slot/>
    </div>
    <div class="dots-bg" v-if="dots"></div>
  </section>
</template>

<script>
export default {
  props: ['dark', 'dots', 'container'],
  computed: {
    sectionClass() {
      let classes = []
      if(this.dark) classes.push('section--dark')
      return classes
    },
    sectionClassInner() {
      let classes = []
      if(this.container) {
        classes.push('container-' + this.container)
      } else {
        classes.push('container')
      }
      return classes
    }
  }
}
</script>

<style lang="scss">
.section {
  padding: 5% 0;
  position: relative;

  &--inner {
    position: relative;
    z-index: 2;
  }

  &--dark {
    color: #FFF;
    background: linear-gradient(180deg, var(--primary-color) 0%,  var(--secondary-color) 100%);
    p {
      opacity: .85;
    }
  }
}
</style>
