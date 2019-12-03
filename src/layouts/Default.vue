<template>
  <div class="antialiased bg-light text-dark relative">
    
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
        <div class="py-8 px-20">
          <slot />
        </div>
      </div>
      <div v-if="$slots.toc" class="sidebar sticky top-0 w-sidebar pt-header -mt-header h-screen">
        <div class="sidebar-inner py-32 py-8 px-3">
          <div class="uppercase text-xs font-bold mb-3">On this page</div>
          <slot name="toc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/layouts/partials/Header.vue'
import Nav from '@/layouts/partials/Nav.vue'
export default {
  components: {
    Header,
    Nav,
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