 <template>

 <div class="animated-logo" @click="resetLogo">

	 	<svg viewBox="0 0 571 571" fill="none" xmlns="http://www.w3.org/2000/svg">
	    
	    <path v-if="loaded"  fill-rule="evenodd" clip-rule="evenodd" d="M336.069 47.9847C337.213 75.5545 315.814 98.8323 288.272 99.9773C169.379 104.92 97.2433 198.202 100.776 286.774C101.876 314.346 80.4393 337.589 52.896 338.69C25.3527 339.791 2.13283 318.332 1.03307 290.761C-4.72425 146.423 110.902 7.33977 284.13 0.138347C311.672 -1.00661 334.926 20.4149 336.069 47.9847Z" fill="#53D096"/>
	    
	    <path v-if="loaded" fill-rule="evenodd" clip-rule="evenodd" d="M0.954018 272.303C0.10351 275.958 -0.346192 279.768 -0.346191 283.682C-0.346185 458.77 142.461 574.569 287.353 570.999C314.91 570.321 336.7 547.408 336.022 519.823C335.344 492.238 312.455 470.426 284.898 471.105C196.146 473.291 107.292 404.996 99.9635 298.019C95.7718 320.403 76.5939 337.743 52.8953 338.69C25.3519 339.791 2.1321 318.332 1.03233 290.761C0.786404 284.595 0.761956 278.44 0.954018 272.303Z" fill="#53D096" fill-opacity="0.66"/>
	    
	    <path v-if="loaded" fill-rule="evenodd" clip-rule="evenodd" d="M568.963 284.064C567.642 256.503 544.251 235.231 516.717 236.553C489.184 237.875 467.934 261.29 469.255 288.852C473.112 369.351 400.851 467.7 286.787 470.863C285.401 470.901 284.03 470.996 282.675 471.145C283.416 471.136 284.157 471.123 284.898 471.105C312.455 470.426 335.344 492.238 336.022 519.823C336.662 545.843 317.31 567.706 291.984 570.673C462.561 564.588 575.373 417.848 568.963 284.064Z" fill="#53D096" fill-opacity="0.44"/>
	   
	    <path v-if="loaded" class="test4" d="M234.296 287.326C234.296 259.034 257.233 236.099 285.496 236.099C313.759 236.099 336.696 259.034 336.696 287.326C336.696 315.617 313.759 338.552 285.496 338.552C257.233 338.552 234.296 315.617 234.296 287.326Z" fill="#53D096"/>

	   	<path v-if="loaded" class="test3" d="M372.939 287.251C372.939 259.001 398.382 236.099 429.767 236.099L512.587 236.099C543.972 236.099 569.415 259.001 569.415 287.251C569.415 315.502 543.972 338.403 512.587 338.403H429.767C398.382 338.403 372.939 315.502 372.939 287.251Z" fill="#53D096"/>

	  </svg>

  </div>
</template>

<script>
export default {
	data() {
		return {
			loaded: false
		}
	},
	mounted() {
		setTimeout(() => {
			this.loaded = true
		}, 300)
	},
	methods: {
		resetLogo() {
			this.loaded = false

			setTimeout(() => {
				this.loaded = true
			}, 300)
		}
	}
}

</script>

<style lang="scss">
$easing: cubic-bezier(0.19, 1, 0.22, 1);

.animated-logo {
	width: 80px; 
	margin: 0 auto 1.5rem;
	cursor: pointer;

	svg path{
	  transform-origin: 50% 50%;
	  animation: rotateIn 1.5s $easing forwards;
	  opacity: 0;
	}

	svg path + path + path + path {
	  animation: scaleIn .7s $easing forwards;
	  animation-delay: .3s;
	}

	svg path + path + path + path + path{
	  animation: rotateInLeft .6s $easing forwards;
	  animation-delay: 0.7s;
	  opacity:0;
	}
}
</style>