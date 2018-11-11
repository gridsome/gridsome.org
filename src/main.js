// Import global styles
import 'prismjs/themes/prism.css'
import '~/assets/style/index.scss'

// Add global components
import Layout from '~/layouts/Default.vue'
import Docs from '~/layouts/Docs.vue'
import Section from '~/components/Section.vue'
import Feature from '~/components/Feature.vue'
import Card from '~/components/Card'
import VueLogo from '~/components/logos/vue'
import GraphQlLogo from '~/components/logos/graphql'
import VueScrollTo from 'vue-scrollto'

import 'typeface-league-spartan'
import 'typeface-nunito'

import VueAnalytics from 'vue-analytics'
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 2,
  bodyGray: 40,
  headerFontFamily: ['League Spartan', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'Helvetica','Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

export default function (Vue, { head, router, isServer }) {
  Vue.component('Layout', Layout)
  Vue.component('DocsLayout', Docs)
  Vue.component('Section', Section)
  Vue.component('Feature', Feature)
  Vue.component('Card', Card)
  Vue.component('VueLogo', VueLogo)
  Vue.component('GraphQlLogo', GraphQlLogo)

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
