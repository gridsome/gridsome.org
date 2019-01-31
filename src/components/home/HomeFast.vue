<template>
  <Section dots="true" sway="true">
    <h2 class="text-center">High performance baked-in ⚡️🚀</h2>

    <p class="lead text-center container-md ">
       Gridsome makes it easy and fun for developers to create fast, beautiful websites without needing to become a performance expert.
    </p>

    <div class="grid-cols grid-cols--2 container-md mb">
      <ul class="bullet-list">
        <li><Bullet /> Insanely fast page loading by default</li>
        <li><Bullet /> Automatic code-splitting</li>
        <li><Bullet /> Automatic critical CSS export</li>
        <li><Bullet /> Automatic next page prefetching</li>
      </ul>
      <ul class="bullet-list">
        <li><Bullet /> Progressive image loading</li>
        <li><Bullet /> Built-in image compression</li>
        <li><Bullet /> Built-in asset minification</li>
        <li><Bullet /> Offline-ready PWA support</li>
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