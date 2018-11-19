<template>
  <g-link class="logo" to="/" title="Back to home">
    <Logo alt="gridsome.netlify.com" />
  </g-link>
</template>

<script>
import Logo from '@/components/logos/linuxing3'
export default {
  components: {
    Logo
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
