<template>
  <Section class="home-connect" dots="true">
    <div class="grid-cols flex grid-cols--2 grid-cols--gap-large">
      <div class="text-center">
        <h2>Connect the Modern Web</h2>
        <p class="lead">
          The Modern Web is decoupled and modular. Gridsome makes it easy to build <g-link to="/docs/jamstack">JAMstack</g-link> websites for any Headless CMS, APIs and modern web services with <strong>plugins.</strong>
        </p>
        <p><g-link to="/plugins">Browse Gridsome Plugins</g-link></p>
      </div>
      <div>
        <g-image src="~/assets/images/connect.png" width="1180" blur="10" retina="true" alt="The Modern Web" />
      </div>

    </div>
  </Section>
</template>

<script>

</script>

<style lang="scss">
.home-connect {
 .grid-cols {
    > div:first-child {
      padding: 0 3%;
    }
  }
}

</style>
