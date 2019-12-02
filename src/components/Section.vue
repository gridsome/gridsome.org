<template>
  <section class="section bg-light z-40" :class="sectionClass">
    <div class="container mx-auto" :class="sectionClassInner">
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    sectionClass() {
      let classes = []
      return classes
    },
    sectionClassInner() {
      let classes = []
      return classes
    }
  }
}
</script>