# Add SVG icons


## As plain markup
The simplest way to use SVG icons in Gridsome is to just add them as normal markup. This gives a lot of flexibility with the power of Vue.  Here is an example where we have added an icon from https://feathericons.com/ as markup.

```html
<template>
 <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="24" height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="2" 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  class="feather feather-bell">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
</template>
```

## Using SVGs as Components
You can import SVGs as you do with any other Vue component with `vue-svg-loader`. Start by installing the library:

```shell
npm i -D vue-svg-loader
```

You will need to update the webpack config in `gridsome.config.js` to use the new loader:
```js
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
```

Then you can import your SVGs from within your Vue templates like any Vue component:
```html
<script>
  import Brand from '~/assets/svgs/Brand.svg'
  export default {
    components: {
      Brand
    }
  }
</script>
```

## FontAwesome SVG Icons

FontAwesome is one of the most popular icon libraries out there, and with version 5, they've made it incredibly easy to use with Vue without bloating your codebase with a lot of icons/styles you're not using. We can start implementing it in our Gridsome site by installing a few needed items:

```shell
npm i -D @fortawesome/{vue-fontawesome,fontawesome-svg-core,free-brands-svg-icons}
```

The `@organization/{package,package}` is a shorthand format for installing multiple packages within an organization. The above is equivalent to:

```shell
npm i -D @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
```

When the packages have finished installing, you'll want to open (or create) the `src/main.js` file in your project and add the following:

```js
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}
```

You can now use the icons anywhere in your components/templates:

```html
<font-awesome :icon="['fab', 'github']"/>
<font-awesome :icon="['fab', 'twitter']"/>
```

And best of all, the SVG for Github/Twitter icons will be the only ones added to our final build. Make sure you read the docs on [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) to get full details on how to use the whole suite of FontAwesome fonts together.

## Purge CSS

If you are using Purge CSS you have to include Font Awesome classes in the whitelist for the icons to work properly in the producton enviroment. A code example with Tailwind and Purge CSS for `gridsome.config.js`:

```js
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

module.exports = {
 ...,
 chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              extractors: [
                {
                  extractor: TailwindExtractor,
                  extensions: ['css', 'vue', 'js']
                }
              ],
              whitelist: ['svg-inline--fa'],
              whitelistPatterns: [/shiki/, /fa-$/]
            })
          ])
        }
        return options
      })
  }
}
```
