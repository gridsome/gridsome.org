# Using SVGs as Components
One of the easiest ways to use SVGs in Vue and Gridsome is to use the `vue-svg-loader` library. Start by installing the library:

```js
npm i -d vue-svg-loader
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

Then you can import your SVGs from within your Vue templates like any normal Vue component:
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

# FontAwesome SVG Icons

FontAwesome is one of the most popular icon libraries out there, and with version 5, they've made it incredibly easy to use with Vue without bloating your codebase with a lot of icons/styles you're not using. We can start implementing it in our Gridsome site by installing a few needed items:

```sh
npm i -d @fortawesome/{vue-fontawesome,fontawesome-svg-core,free-brands-svg-icons}
```

The `@organization/{package,package}` is a shorthand format for installing multiple packages within an organization. The above is equivalent to:

```sh
npm i -d @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
```

When the packages have finished installing, you'll want to open (or create) the `gridsome.client.js` file at the root of your project and add the following:

```js
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

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
