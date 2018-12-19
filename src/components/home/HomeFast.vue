<template>
  <Section dots="true" sway="true">
    <h2 class="text-center">High performance baked-in ⚡️🚀</h2>

    <p class="lead text-center container-md ">
        Gridsome builds the fastest possible websites. It pre-builds all pages at build time using the <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/" target="_blank">PRPL-pattern</a> to get close to perfect page scores.
    </p>

    <div class="grid-cols grid-cols--2 container-md mb">
      <ul class="bullet-list">
        <li><Bullet /> No render-blocking assets</li>
        <li><Bullet /> Super fast Time to Interactive</li>
        <li><Bullet /> Automatic code-splitting</li>
        <li><Bullet /> Automatic critical CSS</li>
        <li><Bullet /> Automatic next page prefetching</li>
      </ul>
      <ul class="bullet-list">
        <li><Bullet /> Navigate without page reloads</li>
        <li><Bullet /> PWA-ready out-of-the-box</li>
        <li><Bullet /> Progressive image loading</li>
        <li><Bullet /> Automatic image resizing</li>
        <li><Bullet /> Pre-rendered SEO-friendly markup</li>
      </ul>
    </div>
    <p class="home-links text-center">
      <g-link  to="/docs" class="button primary">
        Get started
      </g-link>
      <g-link  to="/learn" class="button">
        Tutorial
      </g-link>
    </p>
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