<template>
  <div class="card" :class="{'card--has-link' : link}">
    <div class="card__title" v-if="title">
      <span>{{ title }}</span>
    </div>
    <div v-if="image" class="card__image">
      <g-image :src="image" />
    </div>
    <div class="card__inner">
      <slot />
    </div>
    <slot name="outer" />
    <g-link v-if="link" class="card__link" :to="link">
      Read more
    </g-link>
  </div>
</template>

<script>
export default {
  props: ['link', 'image', 'title'],
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
    border-radius: 4px;
    background-color: var(--light-bg);
    transition: color.3s, box-shadow .3s, transform .3s;
    position: relative;
    z-index: 1;

    &__title {
      text-align: center;
      width: 100%;
      margin-top: -15px;

      span {
        display: inline-block;
        padding: 2px 12px;
        background-color: var(--dark-bg);
        color: #FFF;
        border-radius: 3px;
        text-transform: uppercase;
        font-weight: 500;
        font-size: .8rem;
        letter-spacing: 1px;
      }
    }

    &__image {
      border-radius: 4px 4px 0 0;
      overflow: hidden;
      border-bottom: 1px solid var(--border-color);
      img {
        margin: 0;
        width: 100%;
      }
    }

    &__inner {
     padding: var(--space);
     overflow: hidden;
     position: relative;
    }

    &[class*='container']  &__inner {
      padding-left: 0;
      padding-right: 0;
    }

    .section--dark & {
      background-color: var(--dark-bg);
      border-color: rgba(255,255,255,.1);
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
      margin-bottom: .5rem;
    }

    p:not(:last-child) {
      margin-bottom: 1.2rem;
    }
  }
</style>
