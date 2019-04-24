<template>
	<Section primary="true">
		<h2 class="container text-center">
      JAMstack development simplified with Vue.js
    </h2>
    <p class="lead text-center container-md">
    	Gridsome makes it painlessly easy to build <g-link to="/docs/jamstack">JAMstack</g-link> websites using data from multiple sources such as Content API's, Headless CMSs and other web services.
    </p>
		<div class="home-examples">
			<Examples />
		</div>
	</Section>
</template>

<script>
import Examples from '~/components/Examples.vue'
export default {
	components: {
		Examples
	}
}
</script>

<style>
.home-examples {
	margin: 0 auto;
	max-width: 960px;
}

</style>