# Use CSS in Gridsome
Global stylesheets and assets are usually located in the `src/assets` folder and imported into `src/main.js`.

## Import a global style
Add this to `src/main.js` to import a global CSS file.

```js
import '~/assets/styles.css'
```

> It's recommended to keep the global styles at minimal and add styles in Vue components instead to get proper code-splitting and Critical CSS support.


## Use SASS & CSS pre-processors
To enable **SASS** you need to run command `npm install -D sass-loader node-sass` to install the required packages. 

Now you can import **.scss** files in **src/main.js**:

```js
import '~/assets/styles.scss'
```

You can also use SASS in **Vue Components** with the `lang="scss"` attribute:
```html
<style lang="scss">
.element {
	&__nested{
		color: Yay;
	}
}
</style>
```

[Learn more about using Using Pre-Processors in Vue.js](https://vue-loader.vuejs.org/guide/pre-processors.html)


## Add CSS to Vue Components
In Vue Components you add styles inside a `<style>` tag.

```html
// Example.vue
<template>
	<div class="banner">
		Hello! 
	</div>
</template>

<style>
	.banner {
		background-color: red;
	}
</style>
```

## Scoped styles in Components

Its very easy to add scoped styles in vue. Simple add "scoped" to the style tag to automatically add suffix to any CSS class in Markup. This means that styles here will only be applied to current component regardless of the class names you use.

```html
<style scoped>
.card {
  background: blue;
}
</style>
```

This will change the `.card` class in current component automatically to something like **.card[x5u123sc5s1]** and only apply the style to that class.

[Learn more about Scoped styles in Vue](https://vue-loader.vuejs.org/guide/scoped-css.html)

## Enable Critical CSS

Gridsome [Critical CSS plugin](/plugins/plugin-critical-css) extracts CSS from components in selected view port size and adds the CSS inline to `<head>`.


## Add a CSS framework

### Tailwind
...plugin coming

### Bulma
...plugin coming


### Bootstrap
...plugin coming

