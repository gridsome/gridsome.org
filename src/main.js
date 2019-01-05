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

import VueAnalytics from 'vue-analytics'
import Typography from 'typography'
import 'typeface-nunito'
import 'typeface-league-spartan'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 2,
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerColor: 'hsla(0,0%,0%,0.9)',
  headerFontFamily: ['League Spartan', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'Helvetica','Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

export default function (Vue, { head, router, isServer }) {
  Vue.component('Layout', Layout)
  Vue.component('DocsLayout', Docs)
  Vue.component('Section', Section)
  Vue.component('Feature', Feature)
  Vue.component('Card', Card)

  Vue.use(VueScrollTo)

  Vue.use(VueAnalytics, {
    id: 'UA-127625720-1',
    disabled: isServer,
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    },
    router
  })

  head.style.push({
    type: 'text/css',
    cssText: typography.toString()
  })
}
