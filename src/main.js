// Import global styles
import '~/assets/style/index.scss'

// Add global components
import Layout from '~/layouts/Default.vue'
import DocsLayout from '~/layouts/Docs.vue'
import Section from '~/components/Section.vue'
import Feature from '~/components/Feature.vue'
import Card from '~/components/Card'

import VueScrollTo from 'vue-scrollto'

import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  scaleRatio: 1.9,
  headerFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
  bodyFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
})

export default function (Vue, { head, router, isServer }) {
  Vue.component('Layout', Layout)
  Vue.component('DocsLayout', DocsLayout)
  Vue.component('Section', Section)
  Vue.component('Feature', Feature)
  Vue.component('Card', Card)

  Vue.use(VueScrollTo)

  head.style.push({
    type: 'text/css',
    cssText: typography.toString()
  })
}
