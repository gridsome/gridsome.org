<template>
  <g-link class="logo" to="/">
    <GridsomeLogo />
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

<style>
 .logo {
  margin-top: -4px;
 }
 .logo:hover {
 	opacity: .8;
 }
</style>
