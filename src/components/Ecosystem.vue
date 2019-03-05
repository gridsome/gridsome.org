<template>
	<div class="ecosystem">
		
		<h5 class="ecosystem__title text-center">Ecosystem</h5>
		
		<div class="ecosystem__cols grid-cols grid-cols--4">
			<div class="ecosystem__item">
				<icon-docs />
				<h4>Documentation</h4>
				<p>Get started with Gridsome and learn how to use it</p>
				<g-link to="/docs" class="ecosystem__item_link">Go to docs</g-link>
			</div>
			<div class="ecosystem__item">
				<icon-starters />
				<h4>Starters</h4>
				<p>Browse premade Gridsome projects to get started quickly</p>
				<g-link to="/starters" class="ecosystem__item_link">Go to starters</g-link>
			</div>
			<div class="ecosystem__item">
				<icon-plugins />
				<h4>Plugins</h4>
				<p>Enhance your Gridsome site with amazing plugins</p>
				<g-link to="/plugins" class="ecosystem__item_link">Go to plugins</g-link>
			</div>
			<div class="ecosystem__item">
				<icon-blog />
				<h4>Blog</h4>
				<p>Articles, tips & tricks from the Gridsome community</p>
				<g-link to="/blog" class="ecosystem__item_link">Go to blog</g-link>
			</div>
		</div>
	</div>
</template>

<script>
import IconPlugins from '@/assets/images/icon-plugins.svg'
import IconDocs from '@/assets/images/icon-docs.svg'
import IconStarters from '@/assets/images/icon-starters.svg'
import IconBlog from '@/assets/images/icon-blog.svg'

export default {
	components: {
		IconPlugins,
		IconDocs,
		IconStarters,
		IconBlog
	}
}
</script>

<style lang="scss">
	.ecosystem {
		padding: 5% 0 0;

		&__item {
			border: 1px solid var(--border-color);
			background-color: rgba(255,255,255,.9);
			padding: 30px;
			border-radius: var(--border-radius);
			position: relative;
			overflow: hidden;
			transition: transform .3s, box-shadow .3s;

			&:hover {
				transform: translateY(-3px);
				box-shadow: var(--glow);
			}

			p {
				margin-bottom: 0;
				font-size: .9rem;
			}

			h4 {
				margin-bottom: .7rem;
				font-size: .9rem;
			}

			svg {
				float: right;
				margin-top: -12px;
				margin-right: -10px;
			}
		}

		&__item_link {
			position: absolute;
			top:0;
			right:0;
			left:0;
			bottom:0;
			text-indent: -999px;
			opacity: 0.0;
      overflow: hidden;
		}
	}
</style>