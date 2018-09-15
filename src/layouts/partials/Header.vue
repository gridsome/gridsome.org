<template>
  <header class="flex gap-30 container-full">
    <Logo />

    <Nav class="flex-fit" />
    
    <nav class="header-actions flex gap-15">

      <a href="//discord.gg/daeay6n">
        Discord
      </a>

      <a href="//github.com/gridsome/gridsome">
        GitHub
      </a>

      <g-link to="/docs" class="button small hide-for-small">
        Get started
      </g-link>

    </nav>

  
  </header>
</template>

<script>
import Logo from './Logo'
import Nav from './Nav'

export default {
  components: {
    Logo,
    Nav,
  }
}
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top:0;
  min-height: var(--header-height);
  background-color: #FFF;
  border-bottom: 1px solid transparent;
  
  .has-sidebar & {
    border-bottom: 1px solid var(--border-color);
    position: fixed;
    top:0;
  }
}


@media screen and (max-width: 750px) {
  header {
    box-shadow: 0 0 10px 0 rgba(0,0,0,.15);
  }
  .header-actions {
    margin-left: auto!important;
    font-size: .9rem;
  }
}
</style>
