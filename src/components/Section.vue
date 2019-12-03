<template>
  <section class="section z-40 relative" :class="sectionClass">
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