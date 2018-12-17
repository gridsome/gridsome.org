<template>
  <section class="section" :class="sectionClass">
    <div class="section--inner container" :class="sectionClassInner">
      <slot/>
    </div>


    <svg v-if="sway" class="section__sway" viewBox="0 0 1781 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0C1115 121.5 1121.5 -21.5 1781 15.9762V61H0V0Z" fill="#F3F7F9"/>
    </svg>
 
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

  &__sway {
    width: 100%;
    height: auto;
    position: absolute;
    left:0;
    right:0;
    bottom:-1px;
    z-index: 2;
  }

  &__sway + &__dots-bg {
    bottom:0;
  }

  &--inner {
    position: relative;
    z-index: 2;
  }

  &--dark {
    color: rgba(255,255,255,.8);
    text-shadow: 1px 1px 2px rgba(0,0,0,.1);
    background: var(--secondary-bg);

    p {
      color: currentColor;
    }
    
    h1,h2,h3,h4, a {
      color: #FFF;
    }
  }
}
</style>
