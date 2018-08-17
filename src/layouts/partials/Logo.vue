<template>
  <Link class="logo" to="/">
    <Logo />
  </Link>
</template>

<script>
import Logo from '@/components/logos/gridsome'
export default {
  components: {
    Logo
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
