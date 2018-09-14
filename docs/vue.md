# Vue.js

Gridsome is powered by Vue.js - The Progressive JavaScript Framework. It's high performant, lightweight and perfect for fast websites (Only 20kb min+gzip).

Take a look at this video to learn quickly about Vue:

<iframe src="https://player.vimeo.com/video/247494684?color=4fc08d&title=0&byline=0&portrait=0" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<a href="https://vuejs.org/v2/guide/" class="external"> Go to Vue.js documentation</a>


## Single File Components

Gridsome recommends to use Single File Components in your projects. This means you add Markdown, JavaScript and CSS all in the same file. This makes your projects easier to maintain and test and your components more reusable. You also get code-splitting out-of-the-box.

Here is an example of a Single File Component .vue file


```javascript
<template>
	<div class="card">
		{{ reactiveData }}
		<button @click="clickMe">Change</button>
	</div>
</template>

<script>
export default {
	name: 'Card',
	data() {
		return {
			reactiveData: 'Try change me!'
		}
	},
	metohds: {
		clickMe() {
			this.reactiveData = 'Here you go :)'
		}
	}
}
</script>

<style>
	.card {
		padding: 20px;
		background: #FFF;
	}
</style>

```


<a href="https://vuejs.org/v2/guide/single-file-components.html" class="external">
	Learn more about Single File Components
</a>


### Import to other Pages or Components
When you have created a component you can easily import into your pages. In Gridsome projects it's recommended to put all your .vue components in the **src/components** folder and import them into Pages or Layouts like this:

```javascript
<template>
	<Card />
</template>

<script>
import Card from '@/components/card'
export default {
	components: {
		Card
	}
}
</script>

```

### Add Sass to .vue files

You can use Sass in your Single File Components.
Install <br> `npm install -D sass-loader node-sass` to your project and use it like this:

```javascript
<style lang="scss">
	.card {
		background:#FFF;

		&__inner {
			padding: 20px;
		}
	}
</style>
```


<a href="https://vue-loader.vuejs.org/guide/pre-processors.html" class="external">
	Learn more about using Using Pre-Processors in Vue.js
</a>



### Scoped styles

Its very easy to add scoped styles in vue. Simple add "scoped" to the style tag to automatically add suffix to any CSS class in Markup. This means that styles here will only be applied to current component regardless of the class names you use.


```javascript
<style scoped>
	.card {
		background:#FFF;
	}
</style>
```

This will change the .card class in current component automatically to f.ex **.card[x5u123sc5s1]** and only apply style to that class.


<a href="https://vue-loader.vuejs.org/guide/scoped-css.html" class="external">
	Learn more about Scoped styles in Vue
</a>

