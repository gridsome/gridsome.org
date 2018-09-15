<template>
  <div class="card">
    <div class="card__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
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
    border: 1px solid #ddd;
    padding: var(--space);
    border-radius: 4px;
    background-color: #FFF;
    transition: color.3s, box-shadow .3s, transform .3s;
    color: #444;
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,.05);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 2px 2px 10px 0 rgba(0,0,0,.1);
      color: currentColor;
    }

    
    &__read-more {
      text-transform: uppercase;
      font-size: .7rem;
      font-weight: 500;
      letter-spacing: 2px;
      opacity: .7;
    }

    h2, h4 {
      margin-bottom: .66rem;
    }
  }
</style>
