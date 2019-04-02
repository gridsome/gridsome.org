<template>
  <Section class="home-connect" dots="true">
    <div class="grid-cols flex grid-cols--2 grid-cols--gap-large">
      <div class="text-center">
        <h2>Connect the Modern Web</h2>
        <p class="lead">
          The Modern Web is decoupled and modular. With Gridsome you are no longer locked in by the CMS. Gridsome makes it easy to build websites by using any content APIs and modern web services with <g-link to="/plugins">plugins</g-link>.
        <p>
          <g-link to="/plugins">Go to Gridsome Plugins</g-link>
        </p>
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
