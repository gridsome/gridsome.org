 <template>

 <div class="animated-logo" @click="resetLogo">
	<svg viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path v-if="loaded" class="circle3" fill-rule="evenodd" clip-rule="evenodd" d="M324.931 148.726C342.211 147.895 357.508 161.301 359 178.597C365.464 262.269 290.267 355.845 182.356 358.843C165.062 359.323 150.654 345.654 150.175 328.312C149.696 310.97 163.327 296.522 180.621 296.042C252.21 294.053 297.563 232.219 295.142 181.607C294.313 164.279 307.65 149.557 324.931 148.726Z" fill="#34A36F"/>
		<path v-if="loaded" class="circle2" fill-rule="evenodd" clip-rule="evenodd" d="M31.736 146.944C49.0366 146.944 63.0615 161.008 63.0615 178.357C63.0615 250.767 121.283 297.629 179.436 296.194C196.731 295.767 211.097 309.48 211.523 326.824C211.948 344.167 198.273 358.573 180.977 359C90.0394 361.244 0.0996127 288.439 0.0996094 178.357C0.0996082 161.008 14.4354 146.944 31.736 146.944Z" fill="#4DBA87"/>
		<path v-if="loaded" class="dash" d="M246.675 180.793C246.675 163.031 261.162 148.633 279.034 148.633H326.193C344.064 148.633 359 163.031 359 180.793C359 198.555 344.064 212.953 326.193 212.953H279.034C261.162 212.953 246.675 198.555 246.675 180.793Z" fill="#64D8A2"/>
		<path v-if="loaded" class="dot" d="M147.726 180.84C147.726 163.052 162.122 148.633 179.86 148.633C197.599 148.633 211.994 163.052 211.994 180.84C211.994 198.627 197.599 213.047 179.86 213.047C162.122 213.047 147.726 198.627 147.726 180.84Z" fill="#64D8A2"/>
		<path v-if="loaded" class="circle1" fill-rule="evenodd" clip-rule="evenodd" d="M211.104 30.3612C211.822 47.6949 198.391 62.3302 181.105 63.05C106.485 66.1576 60.9306 124.806 63.1479 180.493C63.8382 197.828 50.6646 212.442 33.3778 213.134C16.091 213.826 0.888995 199.836 0.198757 182.501C-3.41466 91.7531 72.147 2.04097 178.505 0.279128C195.791 -0.440732 210.386 13.0275 211.104 30.3612Z" fill="#64D8A2"/>
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

	svg path{
	  transform-origin: 50% 50%;
	  animation: rotateIn 1s $easing forwards;
	  opacity: 0;
	}

	svg path.circle1 {
	  animation-delay: .1s;
	}

	svg path.circle2 {
	  animation-delay: .3s;
	}

	svg path.circle3 {
	  animation-delay: .5s;
	}

	svg path.dot {
		 animation: scaleIn 1s $easing forwards;
		 animation-delay: .6s;
	}

	svg path.dash {
		 animation: rotateInLeft 1s $easing forwards;
		 animation-delay: .6s;
	}


}
</style>