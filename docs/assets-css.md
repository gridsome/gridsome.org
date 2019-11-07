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
	&__nested {
		color: Yay;
	}
}
</style>
```

[Learn more about using Using Pre-Processors in Vue.js](https://vue-loader.vuejs.org/guide/pre-processors.html)

### Global Preprocessor Files (ie. variables, mixins)
Often when you're working on a project, you'll have a set of variables, mixins, and framework variable overrides that you'll want to be automatically used in your components/layouts so you don't have to keep manually importing them.

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
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss'),
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
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    
    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
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

It's very easy to add scoped styles in vue. Simple add "scoped" to the style tag to automatically add suffix to any CSS class in Markup. This means that styles here will only be applied to current component regardless of the class names you use.

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

## Tailwind
[TailwindCSS](https://tailwindcss.com) is a highly customizable, utility-based CSS framework that gives you all of the building blocks you need to build your project without any opinionated styles you have to fight to override. When using TailwindCSS, it is recommended to use [PostCSS-PurgeCSS](https://github.com/FullHuman/postcss-purgecss) which is a tool used to remove unused css; resulting in tiny file sizes.


### Add TailwindCSS with a Plugin
The quickest and easiest way to get up and running with Tailwind CSS in your project is to install it with the [Gridsome Tailwind Plugin](/plugins/gridsome-plugin-tailwindcss). A Gridsome plugin will typically have the majority of the boilerplate and configuration done for you, eliminating a lot of the set up time.


### Add TailwindCSS Manully

If you prefer to do the install and configuration on your own, you can add TailwindCSS manually with the following instructions.

To install TailwindCSS (choose one):
```shell
# Using npm
npm install tailwindcss

# Using Yarn
yarn add tailwindcss
```

To install PostCSS-PurgeCSS:
```shell
npm i -D @fullhuman/postcss-purgecss
```

Then, create a `main.css` file in the root of your `/src` directory and add the following:
```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

Now import the `main.css` file into your project. In the `main.js` file add `require('~/main.css')`. Afterwards, your `main.js` file should look something like this:
```javascript
// Import global styles
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    
}
```

Optionally, if you would like to customize your TailwindCSS installation, you can generate a TailwindCSS config file using:
```shell
npx tailwind init
```

Which will generate a minimal `tailwind.config.js` file at the root of your project that contains:
```javascript
module.exports = {
    theme: {
        extend: {}
    },
    variants: {},
    plugins: []
}
```

Learn more about customizing your TailwindCSS installation in Tailwind's [configuration documentation](https://tailwindcss.com/docs/configuration/)

Next, `gridsome.config.js` needs to be updated to add our TailwindCSS and PurgeCSS configuration:

```javascript
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
	tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
    siteName: 'Gridsome',
    plugins: [],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
}

```

Finally, create a `purgecss.config.js` file in the root of your project and add the configuration below:

```javascript
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\\/]+/g)
  }
}

module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.md',
  ],
  whitelist: [
    'body',
    'html',
    'img',
    'a',
    'g-image',
    'g-image--lazy',
    'g-image--loaded',
  ],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
    },
  ],
}
```

Be sure to restart the `gridsome develop` command to ensure the changes are compiled in the current build.

## Bulma
...plugin coming

## Buefy

[Buefy](https://buefy.org/) provides one of the most comprehensive implementations of Bulma components, styles, and grid system available for Vue.js.

To install use:

```shell
# With npm
npm i buefy

# With yarn
yarn add buefy
```

Then, register the Buefy plugin in your `main.js` file:

```js
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'

// Then add it to export function

export default function (Vue) {
  Vue.use(Buefy)
}
```

Buefy doesn't include icon packs in the core bundle, but many of its components use icons. If you'd like to use icons, check out the [Buefy documentation](https://buefy.org/documentation/start) to make sure you choose the right CSS to import. Below is an example of how you might import an icon font with Buefy:

```js
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'

export default function (Vue) {
  head.link.push({
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  })

  Vue.use(Buefy, {
    defaultIconPack: 'fas' // Font Awesome Solid
  })
}
```

## Bootstrap
...plugin coming

## BootstrapVue

[BootstrapVue](https://bootstrap-vue.js.org/) provides one of the most comprehensive implementations of Bootstrap V4 components and grid system available for Vue.js 2.5+, complete with extensive and automated WAI-ARIA accessibility markup.

To install use:

```shell
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

export default function (Vue) {
  Vue.use(BootstrapVue)
}
```

## Vuetify

[Vuetify](https://vuetifyjs.com/en/) is a semantic component framework for Vue. It aims to provide clean, semantic and reusable components that make building your application a breeze. Based on Google's material design, it can be a quick way to get an app up and running with pre-built components available to use and customize. Updated for Vuetify 2.0.

To install use:

```shell
# With npm
npm install vuetify --save

# With yarn
yarn add vuetify
```

Then, you will need to register the Vuetify plugin, include the Vuetify css file, and add a link to the head 
for Google's material design icons in your 'main.js' file, with Vuetify 2.0+ you will need to pass a new instance of Vuetify to appOptions. Icons and iconfonts are now built into Vuetify 2.0+. You can install them as a local dependency or add them as a stylesheet in your head from a CDN, more information on Vuetify icon installation is available [here](https://vuetifyjs.com/en/customization/icons):

```js
// v1.5
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })

  Vue.use(Vuetify)
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
```

```js
// v2.0
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })
  
  const opts = { ... } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
```

Finally, there is one last thing you will need in order to build your application with Vuetify. 
You will need to whitelist Vuetify in webpack in order to build. 

First, install the webpack-node-externals plugin:

```shell
# With npm
npm install webpack-node-externals --save-dev

# With yarn
yarn add webpack-node-externals --dev
```

Then modify your `gridsome.server.js` file to include the webpack-node-externals package, and whitelist Vuetify.
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

Then you should be able to build now! You will find the files in your dist/folder.

