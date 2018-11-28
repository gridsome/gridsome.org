<template>
  <Section>
    <h2 class="text-center">Lightning-fast as default ⚡️🚀</h2>

    <p class="lead text-center container-sm ">
      Build sites a that are optimized with the <strong>PRPL-pattern</strong> to get perfect Google Lighthouse scores - Automagically
    </p>

    <div class="grid-cols grid-cols--2 container-md">
      <ul class="home-bullets">
        <li><Bullet /> No render-blocking assets</li>
        <li><Bullet /> Fast Time to Interactive</li>
        <li><Bullet /> Automatic code-splitting</li>
        <li><Bullet /> Automatic critical CSS</li>
        <li><Bullet /> Automatic next page prefetcing</li>
      </ul>
      <ul class="home-bullets">
        <li><Bullet /> Navigate without page reloads</li>
        <li><Bullet /> PWA-ready out-of-the-box</li>
        <li><Bullet /> Progressive image loading</li>
        <li><Bullet /> Automatic image resizing</li>
        <li><Bullet /> Pre-rendered SEO-friendly markup</li>
      </ul>
    </div>
  </Section>
</template>

<script>
import Bullet from '~/assets/images/bullet.svg'

export default {
  components: {
    Bullet
  }
}
</script>

<style lang="scss">
  .home-bullets {
    list-style: none;
    margin-bottom: 0;

    svg {
      vertical-align: middle;
      margin-top: -1px;
      color: var(--primary-color);
    }
  }
</style>