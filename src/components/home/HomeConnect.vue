<template>
  <Section class="home-connect">
    <div class="grid-cols flex grid-cols--2 grid-cols--gap-large">
      <div class="text-center">
        <h2>Connect the modern web</h2>
        <p class="lead">
          The modern web is decoupled and modular. Gridsome makes it painlessly easy to build <g-link to="/docs/jamstack/">JAMstack</g-link> websites using data from multiple sources such as Content API's, Headless CMSs, and other web services.
        </p>
        <p><g-link to="/plugins/">Browse Gridsome Plugins</g-link></p>
      </div>
       <div>
        <Connect />
      </div>
    </div>
  </Section>
</template>

<script>
import Connect from '~/components/Connect.vue'

export default {
  components: {
    Connect
  }
}
</script>

<style lang="scss">
.home-connect {
  @media screen and (min-width: 850px) {
    & {
      padding: 1%;
    }
  }
 .grid-cols {
    > div:first-child {
      padding: 0 5%;
    }
  }
}

</style>
