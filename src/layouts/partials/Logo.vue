<template>
  <g-link class="logo" to="/" title="Back to home">
    <Logo alt="Gridsome.org" />
  </g-link>
</template>

<script>
import Logo from '~/assets/images/gridsome-logo.svg'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
 .logo {
  svg{
  	max-width: 160px;
  	height: auto;
  	margin-top: -3px;
  }
  &:hover {
 		opacity: .8;
 	}
 }
</style>
