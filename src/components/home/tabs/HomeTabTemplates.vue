<template>
 <div class="container container-md mb">
  
  <div class="mb text-center">
    <p>Any .vue files added to <code>/templates</code> directory will be the template to a <strong>GraphQL collection.</strong> F.ex <code>templates/WordPressPost.vue</code> will be the single page template for <strong>allWordPressPost</strong> collection.</p>
  </div>

  <div v-html="$static.example.content" />

</div>
</template>


<static-query>
query Example {
  example (path: "/examples/templates") {
    content
  }
}
</static-query>
