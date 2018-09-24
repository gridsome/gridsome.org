<template>
  <Section dots="true">

    <div class="home-tabs container text-center">
      <nav class="home-tabs__tabs tabs flex gap-15 flex--no-wrap flex--center mb" style="margin-top:-3%">
        <a class="active">Use GraphQL for data</a>
        <a>Automatic Page Routing</a>
        <a>Smart template system</a>
        <a>SEO-friendly HTML</a>
        <a>Auto image optimizing</a>
      </nav>
    </div>

    <div class="container container-md mb">
      <div class="mb text-center">
        <p class="lead">Pull data from any CMS or sources into a GraphQL layer, that can be explored in a local GraphQL Playground, and access it in any page or components. </p>
      </div>

      <div v-html="$static.example.content" />

    </div>

    <div class="container text-center">
      <g-link to="/docs" class="button">Get started</g-link>
      <a href="//github.com/gridsome/gridsome" class="button plain">GitHub</a>
    </div>

  </Section>
</template>


<static-query>
query Example {
  example: examplePage (path: "/examples/graphql-example") {
    content
  }
}
</static-query>

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
