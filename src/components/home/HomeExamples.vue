<template>
	<Section primary="true">
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
	max-width: 1050px;
}

</style>