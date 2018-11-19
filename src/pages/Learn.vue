<template>
  <Layout>
    <home-features />
    <home-how-it-works />
    <home-tabs />
  	<Section container="md" class="post">
			<div>
				<Newsletter />
			</div>
  	</Section>
  </Layout>
</template>

<script>
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'
import HomeTabs from '@/components/home/HomeTabs.vue'
import Newsletter from '~/components/Newsletter'
export default {
	components: {
		HomeFeatures,
    HomeHowItWorks,
    HomeTabs,
		Newsletter
	}
}
</script>