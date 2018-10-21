<template>
  <Layout>
  	<Section container="md" class="post">
      <div class="mb container-sm text-center">
        <h1>Tutorial coming soon...</h1>
        <p class="lead">We're writing an in-depth tutorial on how to build blazing fast websites that have top scores on Lighthouse with Gridsome & Vue.js.</p> 

      </div>
      <Newsletter />
  	</Section>
  </Layout>
</template>

<script>
import Newsletter from '~/components/Newsletter'
export default {
	components: {
		Newsletter
	}
}
</script>