 <template>

 <div class="animated-logo" @click="resetLogo">
		<svg  viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path v-if="loaded" fill-rule="evenodd" class="circle3" clip-rule="evenodd" d="M108.612 49.2991C114.388 49.0236 119.501 53.4674 120 59.2008C122.161 86.9361 97.0253 117.954 60.9548 118.948C55.1741 119.107 50.3581 114.576 50.1979 108.828C50.0378 103.079 54.5942 98.29 60.3749 98.1308C84.3043 97.4716 99.464 76.975 98.6548 60.1986C98.3777 54.4545 102.836 49.5747 108.612 49.2991Z" fill="url(#paint0_linear)"/>
			<path v-if="loaded" fill-rule="evenodd" class="circle2" clip-rule="evenodd" d="M10.608 48.7086C16.391 48.7086 21.079 53.3705 21.079 59.1211C21.079 83.1233 40.5403 98.6569 59.9785 98.1812C65.7597 98.0397 70.5616 102.585 70.7038 108.334C70.8461 114.083 66.2748 118.858 60.4937 119C30.0966 119.744 0.0332048 95.6107 0.0332031 59.1211C0.0332026 53.3705 4.82512 48.7086 10.608 48.7086Z" fill="url(#paint1_linear)"/>
			<path v-if="loaded" class="dash" d="M82.4541 59.9286C82.4541 54.041 87.2968 49.2682 93.2705 49.2682L109.034 49.2682C115.008 49.2682 120 54.041 120 59.9286C120 65.8162 115.008 70.589 109.034 70.589H93.2705C87.2968 70.589 82.4541 65.8162 82.4541 59.9286Z" fill="url(#paint2_linear)"/>
			<path v-if="loaded" class="dot" d="M49.3792 59.9441C49.3792 54.048 54.1911 49.2682 60.1204 49.2682C66.0496 49.2682 70.8616 54.048 70.8616 59.9441C70.8616 65.8403 66.0496 70.6201 60.1204 70.6201C54.1911 70.6201 49.3792 65.8403 49.3792 59.9441Z" fill="url(#paint3_linear)"/>
			<path v-if="loaded" class="circle1" fill-rule="evenodd" clip-rule="evenodd" d="M70.5639 10.0641C70.8038 15.8098 66.3144 20.661 60.5365 20.8996C35.5938 21.9297 20.3667 41.3702 21.1079 59.8293C21.3386 65.5754 16.9352 70.4195 11.1569 70.6489C5.37854 70.8784 0.297111 66.241 0.06639 60.4949C-1.14144 30.414 24.1159 0.676587 59.6675 0.0925793C65.4455 -0.146037 70.3239 4.31835 70.5639 10.0641Z" fill="url(#paint4_linear)"/>
			<defs>
			<linearGradient id="paint0_linear" x1="64.6538" y1="143.874" x2="97.3822" y2="148.117" gradientUnits="userSpaceOnUse">
			<stop stop-color="#1A7D75"/>
			<stop offset="1" stop-color="#1A8864"/>
			</linearGradient>
			<linearGradient id="paint1_linear" x1="3.98886" y1="56.525" x2="-12.2619" y2="99.6116" gradientUnits="userSpaceOnUse">
			<stop offset="0.0129262" stop-color="#168A81"/>
			<stop offset="1" stop-color="#31A97F"/>
			</linearGradient>
			<linearGradient id="paint2_linear" x1="28.275" y1="62.1611" x2="55.7152" y2="104.116" gradientUnits="userSpaceOnUse">
			<stop stop-color="#27A59B"/>
			<stop offset="1" stop-color="#64D8A2"/>
			</linearGradient>
			<linearGradient id="paint3_linear" x1="18.3798" y1="62.1799" x2="48.1024" y2="88.1439" gradientUnits="userSpaceOnUse">
			<stop stop-color="#27A59B"/>
			<stop offset="1" stop-color="#64D8A2"/>
			</linearGradient>
			<linearGradient id="paint4_linear" x1="149.335" y1="-100.076" x2="61.375" y2="-130.015" gradientUnits="userSpaceOnUse">
			<stop stop-color="#27A59B"/>
			<stop offset="1" stop-color="#64D8A2"/>
			</linearGradient>
			</defs>
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
		}, 100)
	},
	methods: {
		resetLogo() {
			this.loaded = false

			setTimeout(() => {
				this.loaded = true
			}, 100)
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
	svg {
		transform: translateZ(0);
	}

	svg path{
	  transform-origin: 50% 50%;
	  animation: rotateIn .6s $easing forwards;
	  opacity: 0;
	}

	svg path.circle1 {
	  animation-delay: .1s;
	}

	svg path.circle2 {
	  animation-delay: .2s;
	}

	svg path.circle3 {
	  animation-delay: .3s;
	}

	svg path.dot {
		 animation: scaleIn .5s $easing forwards;
		 animation-delay: .5s;
	}

	svg path.dash {
		 animation: rotateInLeft .5s $easing forwards;
		 animation-delay: .5s;
	}


}
</style>