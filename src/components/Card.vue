<template>
  <div class="card" :class="{'card--has-link' : link}">
    <div class="card__inner">
      <slot />
    </div>
    <g-link v-if="link" class="card__link" :to="link">
      Read more
    </g-link>
  </div>
</template>

<script>
export default {
  props: ['link'],
  computed: {
    cardClasses() {
      let classes = []
      if(this.gradient) classes.push('gradient-' + this.gradient)
      return classes
    }
  }
}
</script>

<style lang="scss">
  .card {
    border: 1px solid var(--border-color-darker);
    padding: var(--space);
    border-radius: 4px;
    background-color: #FFF;
    transition: color.3s, box-shadow .3s, transform .3s;
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,.05);
    position: relative;
    z-index: 1;

    .section--dark & {
      background-color: var(--primary-link-color);
      border-color: rgba(0,0,0,.1);
    }


    &__link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.0;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 0;
    }

    a:not(.card__link) {
      position: relative;
      z-index: 1;
    }

    &--has-link:hover {
      transform: translateY(-3px);
      box-shadow: var(--glow);
      color: currentColor;
    }

    h2, h3, h4 {
      margin-bottom: .75rem;
    }
  }
</style>
