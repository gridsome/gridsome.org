<template>
 <div class="container container-md mb">
  
  <div class="mb text-center">
    <p>
      Connect to any CMS, APIs or local files, like Markdown, and access it from a <strong>GraphQL layer</strong>. Insert data to any <strong>.vue</strong> file with only the fields you need.
    </p>
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
