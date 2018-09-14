<template>
  <g-link class="logo" to="/" title="Back to home">
    <GridsomeLogo alt="Gridsome.org" />
  </g-link>
</template>

<script>
import GridsomeLogo from '@/components/logos/gridsome'
export default {
  components: {
    GridsomeLogo
  }
}
</script>

<style lang="scss">
 .logo {
  margin-top: -1px;
  
  &:hover {
 		opacity: .8;
 	}
 }
</style>
