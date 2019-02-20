// Import global styles
import 'prismjs/themes/prism.css'
import '~/assets/style/index.scss'

// Add global components
import Layout from '~/layouts/Default.vue'
import Docs from '~/layouts/Docs.vue'
import Section from '~/components/Section.vue'
import Feature from '~/components/Feature.vue'
import Card from '~/components/Card'

import VueScrollTo from 'vue-scrollto'
import VueInstantSearch from 'vue-instantsearch'

import Typography from 'typography'
import 'typeface-league-spartan'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  scaleRatio: 1.9,
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerColor: 'hsla(0,0%,0%,0.9)',
  headerFontFamily: ['League Spartan', 'sans-serif'],
  bodyFontFamily: ['Jost', 'Helvetica','Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

export default function (Vue, { head, router, isServer }) {
  Vue.component('Layout', Layout)
  Vue.component('DocsLayout', Docs)
  Vue.component('Section', Section)
  Vue.component('Feature', Feature)
  Vue.component('Card', Card)

  Vue.use(VueScrollTo)
  Vue.use(VueInstantSearch)

  head.style.push({
    type: 'text/css',
    cssText: typography.toString()
  })
}
