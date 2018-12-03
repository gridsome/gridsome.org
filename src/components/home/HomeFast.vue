<template>
  <Section>
    <h2 class="text-center">Lightning-fast as default ⚡️🚀</h2>

    <p class="lead text-center container-md ">
        Gridsome builds the fastest possible websites. It pre-builds all pages at build time using the <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/" target="_blank">PRPL-pattern</a> to get perfect page scores.
    </p>

    <div class="grid-cols grid-cols--2 container-md">
      <ul class="home-bullets">
        <li><Bullet /> No render-blocking assets</li>
        <li><Bullet /> Super fast Time to Interactive</li>
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