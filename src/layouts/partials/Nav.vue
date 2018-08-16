<template>
  <nav class="main-nav flex-x flex-x--30 flex-no-wrap">
    <Link to="/docs">
      Docs
    </Link>
    
    <Link to="/tutorial">
      Tutorial
    </Link>

    <Link to="/plugins">
      Plugins
    </Link>

    <Link to="/blog">
      Blog
    </Link>

    <Link to="/docs">
      Get started
    </Link>
  </nav>
</template>

<style lang="scss">
  .main-nav a:not(.active) {
    color: currentColor;
  }
</style>
