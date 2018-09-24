<template>
 <div class="container container-md mb">
  
  <div class="mb text-center">
    <p class="lead">
      Connect to any CMS or sources and access data with <strong>GraphQL</strong>. <br class="hide-for-small" />This enabled you to only work with the data you need.
    </p>
  </div>

  <div v-html="$static.example.content" />

</div>
</template>


<static-query>
query Example {
  example: examplePage (path: "/examples/graphql") {
    content
  }
}
</static-query>
