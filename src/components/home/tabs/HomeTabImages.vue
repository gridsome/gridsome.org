<template>
 <div class="container container-md mb">
  
  <div class="mb text-center">
    <p class="lead">
      Use the built-in component <strong>g-image</strong> to add images that automatically resize, compress and lazy loads. It also adds responsive <strong>srcset</strong> versions.
    </p>
  </div>

  <div v-html="$static.example.content" />


</div>
</template>


<static-query>
query Example {
  example: examplePage (path: "/examples/g-image") {
    content
  }
}
</static-query>
