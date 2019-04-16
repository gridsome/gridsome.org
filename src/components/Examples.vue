<template>
	<div class="examples">
		<div class="examples__header" 
			v-for="({ node }, index) in $static.examples.edges" 
			v-if="index == current" 
			:key="index">
			{{ node.filepath }}
			
		</div>
		<transition name="slide">
			<div class="examples__code" 
				v-for="({ node }, index) in $static.examples.edges" 
				v-if="index == current" 
				:key="index">
				<div v-html="node.content" />
			</div>
		</transition>
		<div class="examples__footer">
			<a href="#" 
				:class="{active: index == current}" 
				@click.prevent="current = index" 
				v-for="({ node }, index) in $static.examples.edges">
				{{ node.title }}
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			current: 0
		}
	},
}

</script>

<static-query>
query Example {
  examples:	allExample (sortBy: "order", order: ASC)  {
  	edges {
  		node {
  			title
    		content
    		id
    		filepath
  		}
  	}
  }
}
</static-query>

<style lang="scss">
.slide-leave-active,
.slide-enter-active {
  transition: .3s;
}
.slide-enter {
  transform: translate(100%, 0);
  position: absolute;
}
.slide-leave-to {
  transform: translate(-100%, 0);
  position: absolute;
}

.examples {
	background-color: #173a56;
	border-radius: 5px;
	color: #FFF;
	position: relative;
	overflow: hidden;
	
	&__header,
	&__footer {
		padding: 10px 20px;
		a {
			color: #FFF;
			text-decoration: none;
			background-color: var(--dark-bg);
			padding: 3px 7px;
			border-radius: 5px;
			margin: 0 8px 8px 0;
			display: inline-block;
			&:hover {
				background-color: rgba(255, 255, 255, .1);
			}
			&.active {
				background-color: var(--primary-color-dark);
			}
		}
	}

	&__header {
	}

	&__footer {
		text-align: center;
		font-size: .8rem;
		padding: 10px 0;
	}

	&__code {
		padding: 10px 0 10px var(--space);
		background-color: var(--dark-bg);
		border-radius: 5px;
		overflow-y: auto;
		overflow-x: hidden;
		height: 450px;
		max-width: calc(100vw - var(--space) - 20px)
	}
}

#app .examples pre {
	text-shadow: none;
	background-color: transparent;
	color:#eee;
	margin: 0;
	padding: 0;

	.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted {
		color: #dc47ac;
	}

	.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {
		background-color: transparent;
	}

	.token.punctuation {
		color: #878687;
	}

	.token.attr-name, .token.builtin, .token.char, .token.inserted, .token.selector, .token.string {
		color: #00a672;
	}

	.token.atrule, .token.attr-value, .token.keyword {
		color: #46c4fb;
	}
}
</style>