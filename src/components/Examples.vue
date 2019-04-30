<template>
	<div class="examples flex flex-align-top">
		<div class="examples__sidebar">
			<div class="examples__buttons">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<a href="#" 
				:class="{active: index == current}" 
				@click.prevent="current = index" 
				v-for="({ node }, index) in $static.examples.edges">
				{{ node.title }}
			</a>
		</div>
		<div class="examples__frame">
			<div class="examples__header flex hide-for-small" 
				v-for="({ node }, index) in $static.examples.edges" 
				v-if="index == current" 
				:key="index">
				<div class="examples__header-title">
					<div> {{ node.filepath }} </div>
				</div>
			</div>
			<transition name="slide">
				<div class="examples__code" 
					v-for="({ node }, index) in $static.examples.edges" 
					v-if="index == current" 
					:key="index">
					<div v-html="node.content" />
				</div>
			</transition>
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
	background-color: var(--dark-bg);
	border-radius: 10px;
	overflow: hidden;

	&__buttons {
		margin-top:-10px;
		margin-bottom: var(--space);

		div {
			display: inline-block;
			width: 11px;
			height: 11px;
			border-radius: 100%;
			margin: 0 4px;
			background-color: rgba(255,255,255,.2);
		}
	}

	&__mobile {
		background-color: var(--dark-bg);
		text-align: center;
		padding: 10px;
	}

	&__frame {
		color: #FFF;
		position: relative;
		overflow: hidden;
		background-color: rgba(0,0,0,.3);
		width: 100%;

		@media screen and (min-width: 850px) {
			flex: 1;
		}
	}

	&__header{
		padding: 10px var(--space) 0;
	}

	&__sidebar {
		max-width: 280px;
		padding: var(--space);
		font-size: .95rem;
		a {
			color: #FFF;
			text-decoration: none;
			background-color: var(--dark-bg);
			padding: 3px 7px;
			border-radius: 5px;
			width: 100%;
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


	&__code {
		padding: var(--space);
		border-radius: 5px;
		overflow-y: auto;
		overflow-x: hidden;
		min-height: 580px;
		@media screen and (max-width: 850px) {
			& {
				min-height: auto;
			}
		}
	}
}

#app .examples pre {
	text-shadow: none;
	padding: 0;
	background-color: transparent;
}
</style>