<template>
  <nav class="main-nav flex gap-15">
    <g-link to="/docs">
      <icon-docs />
      <span class="main-nav__label">Docs</span>
    </g-link>
    
    <!--
    <g-link to="/learn">
      <icon-learn />
      <span class="main-nav__label">Learn</span>
    </g-link> -->

    <g-link to="/plugins">
      <icon-plugins />
      <span class="main-nav__label">Plugins</span>
    </g-link>

    <g-link to="/blog">
      <icon-blog />
      <span class="main-nav__label">Blog</span>
    </g-link>
  </nav>
</template>

<script>
import IconPlugins from '@/assets/images/icon-plugins.svg'
import IconBlog from '@/assets/images/icon-blog.svg'
import IconDocs from '@/assets/images/icon-docs.svg'
import IconLearn from '@/assets/images/icon-learn.svg'

export default {
  components: {
    IconPlugins,
    IconLearn,
    IconDocs,
    IconBlog
  }
}
</script>

<style lang="scss">
.main-nav {
  margin-top: 3px;
  svg {
    display: none;
  }

  &__label {
    text-transform: uppercase;
    font-size: 0.78rem;
    letter-spacing: 1px;
  }
}

@media screen and (max-width: 750px) {
  .main-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--primary-bg);
    color: var(--secondary-bg);
    margin-right: 0 !important;
    justify-content: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    min-height: 60px;
    flex-wrap: nowrap !important;
    padding: 5px var(--space);

    svg {
      display: block;
    }
  }
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .main-nav {
    padding-bottom: var(--space);
  }
}
</style>
