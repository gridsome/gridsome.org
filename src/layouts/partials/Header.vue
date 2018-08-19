<template>
  <header class="flex-x flex-x--60 container">
    <Logo/>
    <Nav class="flex-fit" />
    <div class="header-actions">
      
      <a href="https://github.com/gridsome/gridsome">
        <github-logo class="github-logo" />
      </a>

      <a href="#" class="button"> Get started </a>
    
    </div>
  </header>
</template>

<script>
import Logo from './Logo'
import Nav from './Nav'
import GithubLogo from '@/components/logos/github'

export default {
  components: {
    Logo,
    Nav,
    GithubLogo
  }
}
</script>

<style lang="scss">
  header {
    z-index: 20;
    position: relative;
    top:0;
    min-height: 90px;
    background-color: #FFF;
  }

  .github-logo {
    max-width: 20px;
    height: 20px;
    margin-top: -6px;
  }
</style>
