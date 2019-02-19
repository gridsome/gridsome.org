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
    padding: calc(var(--space) * 2);
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

    h2, h3, h4, p {
      margin-bottom: 1rem;
    }
  }
</style>
