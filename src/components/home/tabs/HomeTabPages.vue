<template>
 <div class="container container-md mb">
  
  <div class="mb text-center">
    <p>Add a .vue file in <code>src/pages</code> directory and it will automatically be a route. For example, <code>src/pages/About.vue</code> will be <strong>mywebsite.com/about</strong>.
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
