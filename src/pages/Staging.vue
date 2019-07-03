<template>
  <Layout class="staging">
  	<div>
	  	<div class="container flex gap-15" style="min-height: 70px;">
	  		<div class="flex-fit flex gap-15">
	  			<strong>STAGING</strong>
	  			<span style="opacity: .6">A Gridsome Product</span>
	  		</div>
	  		<div class="flex gap-30">
	  			<a href="#">Overview</a>
	  			<a href="#">Pricing</a>
	  			<a href="#">Change log</a>
	  			<a href="#">Account</a>
	  			<a href="#" class="button small primary">Signup</a>
	  		</div>
	  	</div>
  	</div>
  	<Section dots="true" style="border-top:0; padding-top: 2%">
     	<div style="max-width: 1000px; margin: 0 auto">
	     	<div class="grid-cols grid-cols-2 flex">
	     		<div class="text-center">
	      		<h1 class="staging__title">A better way to preview your site before going live</h1>
	      		<p class="lead"> Gridsome Staging creates a real-time preview area for your clients, developers, and content creators.  </p>
	      		<a href="#" class="button primary button--large">Try for free</a>
	     		</div>
	     		<div>
	     			<g-image src="@/assets/images/staging.png" />
	     		</div>
	     	</div>
     	</div>
     </Section>
  </Layout>
</template>

<style lang="scss">
.staging {
	position: relative;

	&__title {
		font-size: 2.1rem;
		color: var(--primary-color);
	}

}
</style>
