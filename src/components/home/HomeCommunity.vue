<template>
  <Section>
  	<h2 class="text-center mb-x2">Gridsome Sponsors</h2>
    <div class="grid-cols container container-md grid-cols--2">
    	<Card class="sponsor text-center">
	      <g-image src="~/assets/images/logo-netlify.svg" alt="Netlify"/>
	      <p>Thanks to <a href="https://netlify.com"  rel="noopener" target="_blank">Netlify</a> for sponsoring Gridsome hosting infrastructure.</p>
    	</Card>
      <Card class="sponsor text-center">
	      <g-image src="~/assets/images/logo-algolia.svg" alt="Algolia"/>
	      <p>Thanks to <a href="https://algolia.com"  rel="noopener" target="_blank">Algolia</a> for sponsoring search for Plugins and Documentation</p>
    	</Card>
    </div>
  </Section>
</template>

<style lang="scss">
.sponsor {
	img {
		max-height: 35px;
		width: auto;
	}
}
</style>
