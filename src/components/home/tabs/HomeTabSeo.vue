<template>
 <div class="container container-md mb">
  
  <div class="mb text-center">
    <p>Pull data from any CMS or sources into a GraphQL layer, that can be explored in a local GraphQL Playground, and access it in any page or components. </p>
  </div>

  <div v-html="$static.example.content" />

</div>
</template>


<static-query>
query Example {
  example (path: "/examples/graphql") {
    content
  }
}
</static-query>
