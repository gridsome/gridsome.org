<template>
 <div class="container container-md mb">
  
  <div class="mb text-center">
    <p class="lead">
      Use the built-in global component <code>&#x3C;g-image&#x3E;</code> to add images that automatically resizes, compress and lazy loads. Images are compressed to a 100px blurred version before it's lazy loaded into view.
    </p>
  </div>

  <div v-html="$static.example.content" />

  <g-image width="760" src="~/assets/images/example.jpg" />

</div>
</template>


<static-query>
query Example {
  example: examplePage (path: "/examples/g-image") {
    content
  }
}
</static-query>
