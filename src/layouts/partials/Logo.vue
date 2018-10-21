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
  svg{
  	max-width: 150px;
  	height: auto;
  	margin-top: -4px;
  }
  &:hover {
 		opacity: .8;
 	}
 }
</style>
