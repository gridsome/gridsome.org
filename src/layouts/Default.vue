<template>
  <div class="antialiased relative bg-tint-secondary">
    <div class="bg-light z-20 relative text-dark mx-auto max-w-container-outer shadow">
      <Header :transparent="transparentHeader" />

      <slot name="intro" />

      <div class="mx-auto container flex z-20">
        <div
            :class="{'h-screen' : !isHome}"
            class="sidebar sticky overflow-y-auto top-0 w-sidebar pt-header -mt-header scroll-touch">
          <div class="sidebar-inner py-8 pr-3">
            <Nav />
            <slot name="sidebar" />
          </div>
        </div>
        <div class="flex-1">
          <div class="py-8 px-24">
            <slot />
          </div>
        </div>
        <div v-if="$slots.toc" class="sidebar overflow-y-auto sticky top-0 w-sidebar pt-header -mt-header h-screen">
          <div class="sidebar-inner pt-20 py-8 px-3">
            <div class="uppercase text-xs font-bold mb-3">On this page</div>
            <slot name="toc" />
          </div>
        </div>
      </div>
    </div>
    <Bg class="fixed top-0 w-full h-auto" />
  </div>
</template>

<script>
import Header from '@/layouts/partials/Header.vue'
import Nav from '@/layouts/partials/Nav.vue'
import Bg from '@/components/Bg.vue'

export default {
  components: {
    Header,
    Nav,
    Bg
  },
  computed: {
    isHome() {
      if(this.$route.name == 'home') return true;
    }
  },
  props: {
    transparentHeader: {
      type: Boolean,
      default: false
    }
  }
}
</script>