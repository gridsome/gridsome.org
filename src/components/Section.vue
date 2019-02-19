<template>
  <section class="section" :class="sectionClass">
    <div class="section--inner container" :class="sectionClassInner">
      <slot/>
    </div>
    <div v-if="dots" class="section__dots-bg dots-bg" />
  </section>
</template>

<script>
export default {
  props: ['dark', 'dots', 'container', 'framed', 'primary', 'sway' ],
  computed: {
    sectionClass() {
      let classes = []
      if(this.primary) classes.push('section--primary')
      if(this.dark) classes.push('section--dark')
      if(this.dots == 'top') classes.push('section--dots-top')
      return classes
    },
    sectionClassInner() {
      let classes = []
      if(this.framed) {
        classes.push('container--framed')
      }
      if(this.container) {
        classes.push('container-' + this.container)
      }
      return classes
    }
  }
}
</script>

<style lang="scss">
.section {
  padding: calc(2.5% + var(--space)) 0;
  position: relative;
  width: 100%;
  flex: 1;

  &--primary {
    background-color: var(--primary-bg);
  }


  &__dots-bg {
    height: 700px;
    max-width: 1287px;
    max-height: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 35px;
    left: 10px;
    right: 10px;
    z-index: 1;
  }

  &--dots-top {
    .section__dots-bg {
      bottom: auto;
      top:0;
      height: 380px;
    }
  }


  &--inner {
    position: relative;
    z-index: 2;
  }

  &--dark {
    color: rgba(255,255,255,.8);
    background: var(--secondary-bg);

    p {
      color: currentColor;
    }
    
    h1, h2, h3, h4, a {
      color: #FFF;
    }
  }
}
</style>
