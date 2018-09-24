<template>
  <Section dots="true">

    <div class="home-tabs container text-center">
      <nav class="home-tabs__tabs tabs flex gap-30 flex--no-wrap flex--center mb" style="margin-top:-3%">
        <a class="active">Use GraphQL for data</a>
        <a>Automatic Page Routing</a>
        <a>Smart template system</a>
        <a>SEO-friendly HTML</a>
      </nav>
    </div>

    <div class="container container-md mb">
      <div class="mb text-center">
        <p class="lead">Pull data from any CMS or sources into a internal GraphQL database, and access it in any page or components with a query. </p>
      </div>

      <div class="flex-fit">
          <pre v-text="example" />
      </div>

    </div>

    <div class="container text-center">
      <g-link to="/docs" class="button">Get started </g-link>
      <a href="//github.com/gridsome/gridsome" class="button plain">GitHub</a>
    </div>

  </Section>
</template>

<script>

import Example from 'raw-loader!@/data/graphql-example.txt'

export default {
  computed: {
    example() {
      return  Example
    },
  },
}
</script>

<style lang="scss">

.home-tabs {
  background-color: rgba(255,255,255,.9);
  position: sticky; 
  top:-1px;
  &__tabs {
    padding: 10px 0;
  }
}

</style>
