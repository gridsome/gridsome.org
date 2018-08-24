import Vue from 'vue'

// Add global components
import { Link } from '@gridsome/components'
import Layout from '@/layouts/Default.vue'
import Docs from '@/layouts/Docs.vue'
import Section from '@/components/Section.vue'
import Feature from '@/components/Feature.vue'

Vue.component('Link', Link)
Vue.component('Layout', Layout)
Vue.component('DocsLayout', Docs)
Vue.component('Section', Section)
Vue.component('Feature', Feature)


// Setup typography
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 1.8,
  bodyGray: 40,
  headerFontFamily: ['League Spartan', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Avenir', 'Helvetica'],
})

typography.injectStyles()

// Import font
require('typeface-league-spartan')

// Import global styles
require('@/assets/style/index.scss')

