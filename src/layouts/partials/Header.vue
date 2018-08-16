<template>
  <header class="flex-x flex-x--60 container">
    <Logo/>
    <Nav class="flex-fit" />
    <div> test </div>
  </header>
</template>

<script>
import Logo from './Logo'
import Nav from './Nav'

export default {
  components: {
    Logo,
    Nav
  }
}
</script>

<style>
header {
  z-index: 20;
  position: relative;
  min-height: 80px;
}
</style>
