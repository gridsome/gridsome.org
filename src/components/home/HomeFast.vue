<template>
  <Section dots="true" class="post">
    <h2 class="text-center">High performance baked-in ⚡️🚀</h2>

    <p class="lead text-center container-md ">
       Gridsome makes it easy and fun for developers to create fast, beautiful websites without needing to become a performance expert.
    </p>

    <div class="grid-cols grid-cols--2 container-md mb">
      <ul class="bullet-list">
        <li><Bullet /> Automatic code-splitting</li>
        <li><Bullet /> Automatic critical CSS export</li>
        <li><Bullet /> Automatic link prefetching</li>
      </ul>
      <ul class="bullet-list">
        <li><Bullet /> Built-in Progressive image support</li>
        <li><Bullet /> Built-in image compression</li>
        <li><Bullet /> Built-in asset minification</li>
      </ul>
    </div>

    <p class="home-links text-center">
      <g-link  to="/docs/" class="button primary button--large">
        Get started
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
