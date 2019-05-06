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

### Global Preprocessor Files (ie. variables, mixins)
Often when you're working a project, you'll have a set of variables, mixins, and framework variable overrides that you'll want to be automatically used in your components/layouts so you don't have to keep manually importing them.

Start by installing `style-resources-loader`:

```js
npm i -D style-resources-loader
```

You'll need to add the following block to the top of your `gridsome.config.js` file before the existing `module.exports`:

```js
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
	path.resolve(__dirname, './src/assets/sass/_globals.sass'),
	// or if you use scss
	// path.resolve(__dirname, './src/assets/sass/_globals.scss'),
	// you can also use a glob if you'd prefer
	// path.resolve(__dirname, './src/assets/sass/*.sass'),
	// or scss
	// path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}

module.exports = {
	// existing config
}
```

Then you'll modify the `module.exports` block as follows:

```js
module.exports = {
  chainWebpack: config => {
	    // Load variables for all vue-files
	    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
	    types.forEach(type => addStyleResource(config.module.rule('sass').oneOf(type)))
	    // or if you use scss
	    // types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
	}
}
```

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

Gridsome [Critical CSS plugin](/plugins/@gridsome/plugin-critical) extracts CSS from components in selected view port size and adds the CSS inline to `<head>`.


## Add a CSS framework

### Tailwind
In order to add Tailwind to your Gridsome project, You need to install the [gridsome-plugin-tailwindcss plugin](https://www.npmjs.com/package/gridsome-plugin-tailwindcss), To install it run `npm install -D gridsome-plugin-tailwindcss` add the following to your `gridsome.config.js`. where the config option will be the configuration file for tailwind, If you don't supply that option, `./tailwind.js` will be used by default.

```
plugins: [
  {
    use: 'gridsome-plugin-tailwindcss',
    options: {
      config: './some/file/js'
    }
  }
]
```

### Bulma
...plugin coming


### Bootstrap
...plugin coming

### BootstrapVue
[BootstrapVue](https://bootstrap-vue.js.org/) provides one of the most comprehensive implementations of Bootstrap V4 components and grid system available for Vue.js 2.5+, complete with extensive and automated WAI-ARIA accessibility markup.

To instal use:

```
# With npm
npm i vue bootstrap-vue bootstrap

# With yarn
yarn add vue bootstrap-vue bootstrap
```

Then, register BootstrapVue plugin in your `main.js` file:

```js
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Then add it to export function

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
}
```

### Vuetify
[Vuetify](https://vuetifyjs.com/en/) is a semantic component framework for Vue. It aims to provide clean, semantic and reusable components that make building your application a breeze. Based on Google's material design, it can be a quick way to get an app up and running quickly with pre-built components available to use and customize.

To install use:

```
# With npm
npm install vuetify --save

# With yarn
yarn add vuetify
```

Then, you will need to register the Vuetify plugin, include the Vuetify css file, and add a link to the head 
for Google's material design icons in your 'main.js' file:

```js
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })

  Vue.use(Vuetify)
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
```
Finally, there is one last thing you will need in order to build your application with vuetify. 
You will need to whitelist Vuetify in webpack in order to build. 

First, install the webpack-node-externals plugin:

```
# With npm
npm install webpack-node-externals --save-dev

# With yarn
yarn add webpack-node-externals --dev
```

Then modify your gridsome.server.js file to include the webpack-node-externals package, and whitelist vuetify.
```js
const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  })
}
```
Then you should be able to build now! You will find the files in your dist/ folder.

