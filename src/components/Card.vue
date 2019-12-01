<template>
  <div class="card" :class="{'card--has-link' : link}">
    <g-link v-if="link" class="card__link" :to="link">
      Read more
    </g-link>
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

</style>
