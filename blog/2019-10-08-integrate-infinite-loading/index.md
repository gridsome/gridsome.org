---
title: How to integrate Infinite Loading with Gridsome
slug: infinite-loading-with-gridsome
author: [codybarr]
date: 2019-10-08
tags: ['infinite loading', 'infinite scroll']
excerpt: 'Infinite loading is an alternative strategy for loading additional nodes/content onto a page without the use of traditional pagination. Infinite loading instead loads the next batch of content when a user scrolls to the bottom of a web page.'
---

## What is infinite loading? Why should I use it?

Paginating data in Gridsome is easy using the built-in [@paginate directive](/docs/pagination/) and even includes a custom [pager component](/docs/pagination/#pager-component).

Infinite loading provides the same performance as traditional paginatation without requiring any extra navigational UI to be included in a page.

You can check out a full working example here: https://gridsome-infinite-loading.netlify.com

## Install the required dependencies

There are many packages that implement the infinite loading technique but one that works particularly well with Gridsome is [vue-infinite-loading](https://github.com//PeachScript/vue-infinite-loading). To add it to your Gridsome project, `cd` into your project's root and run the following:

`yarn add vue-infinite-loading`

## Setup

To use `vue-infinite-loading` you'll need to add it to your `main.js` file first:

```javascript
import InfiniteLoading from 'vue-infinite-loading'

export default function(Vue, { router, head, isClient }) {
	Vue.use(InfiniteLoading)
}
```

## Blog Example

To demonstrate how to use `vue-infinite-loading` let's assume a pretty typical BlogPost type.

### `<page-query>`

Your paginated `<page-query>` would look something like this:

```graphql
query ($page: Int) {
	posts: allBlogPost(perPage: 10, page: $page) @paginate {
		pageInfo {
			totalPages
			currentPage
		}
		edges {
			node {
				id
				title
				path
			}
		}
	}
}
```

This is a pretty typical way to do traditional pagintation, but we're not going to include a pager component in the UI.

### `<script>`

Next, we'll need to add a few things to our `<script>` tag:

1. A couple of variables in our `data()` method to keep track of our `loadedPosts` as well as the `currentPage`.
2. Some code to the created method to add the initial "page" of data to our `loadedPosts` array.
3. A handler method to pass to our `vue-infinite-loading` component so it knows how to load the next batch of data.

Here's what that would look like:

```javascript
// component for displaying our individual blog post previews
import PostCard from '~/components/PostCard.vue'

export default {
	components: {
		PostCard
	},
	data() {
		return {
			loadedPosts: [],
			currentPage: 1
		}
	},
	created() {
		this.loadedPosts.push(...this.$page.posts.edges)
	},
	methods: {
		async infiniteHandler($state) {
			if (this.currentPage + 1 > this.$page.posts.pageInfo.totalPages) {
				$state.complete()
			} else {
				const { data } = await this.$fetch(
					`/blog/${this.currentPage + 1}`
				)
				if (data.posts.edges.length) {
					this.currentPage = data.posts.pageInfo.currentPage
					this.loadedPosts.push(...data.posts.edges)
					$state.loaded()
				} else {
					$state.complete()
				}
			}
		}
	}
}
```

Note that you will have to update the path used in the `this.$fetch()` line to match the path of the page we're building.

### `<template>`

Now for the template. One important thing to remember here is that we're going to be iterating over our `loadedPosts` array rather than the page query object directly.

```html
<template>
	<Layout>
		<!-- List blog posts -->
		<div class="posts">
			<transition-group name="fade">
				<PostCard
					v-for="{ node } of loadedPosts"
					:key="node.id"
					:post="node"
				/>
			</transition-group>
			<ClientOnly>
				<infinite-loading @infinite="infiniteHandler" spinner="spiral">
					<div slot="no-more">
						You've scrolled through all the posts ;)
					</div>
					<div slot="no-results">
						Sorry, no posts yet :(
					</div>
				</infinite-loading>
			</ClientOnly>
		</div>
	</Layout>
</template>
```

We've wrapped our `<infinite-loading>` component in Gridsome's `<ClientOnly>` tag to ensure this works correctly in the production build as well as local development.

The slots included in the `<infinite-loading>` component as well as the `spinner` prop are optional. You can read more about those in the [API docs](https://peachscript.github.io/vue-infinite-loading/api/) for `vue-infinite-loading`.

## Transitions

As you can see we've wrapped our blog post component in a `<transition-group>` with the name `fade`. This is so that we can style the transition animation on posts fetched by `vue-infinite-loading`. To implement a simple fade-in animation add the following styles to your CSS somewhere:

```css
.fade-enter-active,
.fade-leave-active {
	transition: ease opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
```

## Conclusion

As you can see, implementing the infinite loading technique in Gridsome is trivial thanks to the `vue-infinite-loading` plugin and Gridsome's built-in [pagination system](/docs/pagination/) and [fetch](/docs/client-side-data/#fetch-from-internal-pages) method.

With that...

`You've scrolled to the end ;)`
