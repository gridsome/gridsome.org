<template>
		<canvas class="dots-canvas"></canvas>
</template>

<script>
	export default {
		props: {
			amount: {
				type: Number,
				default: 30
			},
			size: {
				type: Number,
				default: 3
			},
			speed: {
				type: Number,
				default: 3
			},
			wind: {
				type: Number,
				default: 0
			},
			color: {
				type: String,
				default: '#fff'
			},
			opacity: {
				type: Number,
				default: 0.1
			},
			image: {
				type: String,
				default: null
			},
			zIndex: {
				type: Number,
				default: null
			},
			resize: {
				type: Boolean,
				default: true
			}
		},
		mounted() {

			var self = this;
			const CANVAS = self.$el;
			const CONTEXT = CANVAS.getContext('2d');
			var canvasHeight = CANVAS.offsetHeight;
			var canvasWidth = CANVAS.offsetWidth;
			var dots = [];

			CANVAS.height = canvasHeight;
			CANVAS.width = canvasWidth;
			CANVAS.style.zIndex = self.zIndex ? self.zIndex : 'auto';

			function init() {
				for (var i = 0; i < self.amount; i++) {
					dots.push({
						x: random(0, canvasWidth),
						y: random(0, canvasHeight),
						r: self.size,
						velX: 0,
						velY: self.speed,
						swing: random(0, 2*Math.PI),
						opacity: random(0, self.opacity)
					});
				}
				snow();
			}

			function snow() {
				var img;
				CONTEXT.clearRect(0, 0, canvasWidth, canvasHeight);
				for (var i = 0; i < self.amount; i++) {
					var dot = dots[i];

					CONTEXT.beginPath();
					CONTEXT.fillStyle = 'rgba(' + getRgb(self.color) + ',' + dot.opacity + ')';
					CONTEXT.arc(dot.x, dot.y, dot.r, 2*Math.PI, false);
					CONTEXT.fill();
					CONTEXT.closePath();
				
					dot.y = dot.y + dot.velY * 0.5;
					dot.x = dot.x;

					if (dot.x > canvasWidth + dot.r || dot.x < -dot.r || dot.y > canvasHeight + dot.r || dot.y < -dot.r) {
						reset(dot);
					}
				}
				requestAnimationFrame(snow);
			}

			function reset(dot) {
				var prevR = dot.r;
				dot.r = self.size;
				dot.x = random(0, canvasWidth);
				dot.y = -dot.r;
				dot.velX = 0;
				dot.velY = self.speed;
				dot.swing = 0;
				dot.opacity = random(0, self.opacity);
			}

			init();

			if (self.resize) {
				window.addEventListener('resize', function() {
					var H0 = CANVAS.height,
							W0 = CANVAS.width,
							H1 = CANVAS.offsetHeight,
							W1 = CANVAS.offsetWidth;

					CANVAS.height = canvasHeight = H1;
					CANVAS.width = canvasWidth = W1;
					for (var i = 0; i < self.amount; i++) {
						var dot = dots[i];
						dot.x = dot.x / W0 * W1;
						dot.y = dot.y / H0 * H1;
					}
				});
			}
		}
	}

	function random(min, max) {
		var delta = max - min;
		return max === min ? min : Math.random() * delta + min;
	}

	function getRgb(str) {
		var rgb = '';
		if (str.indexOf('#') === 0) {
			rgb = str.length === 4 ? str.substr(1).split('').map(function(n) {return parseInt(n.concat(n), 16);}).join(',') :
						str.length === 7 ? [str.substr(1,2), str.substr(3,2), str.substr(5,2)].map(function(n) {return parseInt(n, 16);}).join(',') :
						'255,255,255';
		}
		else if (str.indexOf('rgb(') === 0) {
			rgb = str.substring(4, str.length - 1);
		}
		else {
			rgb = '255,255,255';
		}
		return rgb;
	}
</script>

<style scoped>
	.dots-canvas {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		transform: rotateX(200deg);
	}
</style>