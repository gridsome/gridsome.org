<template>
  <div class="antialiased bg-light text-dark">
    <Header />
    <Intro v-if="showIntro" />
    <div class="mx-auto container flex">
      <div class="sidebar sticky overflow-y-auto top-0 w-56 pt-16 -mt-16 h-screen border-r border-seperator scroll-touch">
        <div class="sidebar-inner py-8 px-3">
          <Nav />
          <slot name="sidebar" />
        </div>
      </div>
      <div class="flex-1">
        <div class="py-8 px-10">
          <slot />
        </div>
      </div>
      <div v-if="$slots.toc" class="sidebar sticky top-0 w-56 pt-16 -mt-16 h-screen">
        <div class="sidebar-inner py-32 py-8 px-3">
          Read more...
          <slot name="toc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/layouts/partials/Header.vue'
import Nav from '@/layouts/partials/Nav.vue'
import Intro from '@/components/Intro.vue'
export default {
  components: {
    Header,
    Nav,
    Intro
  },
  props: {
    showIntro: {
      type: Boolean,
      default: false
    }
  }
}
</script>