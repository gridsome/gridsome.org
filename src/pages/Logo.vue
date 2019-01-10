<template>
  <Layout>
    <Section container="sm" class="text-center">
      <h1>Logo & assets</h1>

      <p>Right click to download SVG</p>

      <div class="logo-container">
      	<a href="/logos/logo-normal.svg" target="_blank">
      		<img src="/logos/logo-normal.svg" />
      	</a>
   	  </div>

   	  <div class="logo-container logo-container--dark">
      	<a href="/logos/logo-normal-dark.svg" target="_blank">
      		<img src="/logos/logo-normal-dark.svg" />
      	</a>
   	  </div>

   	  <div class="logo-container logo-container--dark">
      	<a href="/logos/logo-dark.svg" target="_blank">
      		<img src="/logos/logo-dark.svg" />
      	</a>
   	  </div>

   	 <div class="grid-cols mb">
  	  <div class="logo-container">
      	<a href="/logos/logo-circle-normal.svg" target="_blank">
      		<img src="/logos/logo-circle-normal.svg" />
      	</a>
   	  </div>
   	  <div class="logo-container">
      	<a href="/logos/logo-circle-dark.svg" target="_blank">
      		<img src="/logos/logo-circle-dark.svg" />
      	</a>
   	  </div>

   	  <div class="logo-container">
      	<a href="/logos/logo-circle-light.svg" target="_blank">
      		<img src="/logos/logo-circle-light.svg" />
      	</a>
   	  </div>
   	 </div>

   	 <h2>Colors</h2>

   	 <div class="colors mb">

   	 	<div class="colors__primary">
   	 		<span>#5ED3A2</span>
   	 	</div>

   	 	<div class="colors__primary_dark">
   	 		<span>#3BBA95</span>
   	 	</div>

   	 	<div class="colors__secondary">
   	 		<span>#0D2538</span>
   	 	</div>

   	 </div>

	 	 <h2>Graphics</h2>
	 	 <p>Feel free to change and use these graphics anywhere</p>
		 <a href="/assets/data-sources.png" target="_blank">
	     <img src="/assets/data-sources.png" />
	    </a>

      <a href="/assets/logo-poster.png" target="_blank">
        <img src="/assets/logo-poster.png" />
      </a>

      <a href="/assets/logo-poster-light.png" target="_blank">
        <img src="/assets/logo-poster-light.png" />
      </a>

      <a href="/assets/how-it-works.gif" target="_blank">
        <img src="/assets/how-it-works.gif" />
      </a>
    </Section>
  </Layout>
</template>

<style lang="scss">
.logo-container {
	text-align: center;
	background-color: var(--primary-bg);
	margin-bottom: var(--space);
	&--dark {
		background-color: var(--secondary-bg);
	}
	a {
		display: block;
		padding: 10%;
	}
	img {
		max-width: 320px;
		width: 100%;
		margin: 0 auto;
	} 
}

.colors {
	div {
		padding: 15% 5% 5px;
		display: inline-block;
		margin-right: 1rem;
		text-align: center;
		color:#FFF;
	}

	&__primary {
		background-color: var(--primary-color);
	}

	&__primary_dark {
		background-color: var(--primary-link-color);
	}


	&__secondary {
		background-color: var(--secondary-bg);
	}
}

</style>
