import Vue from 'vue'

// Add global components
import { Link } from '@gridsome/components'
import Layout from '@/layouts/Default.vue'
import Docs from '@/layouts/Docs.vue'
import Section from '@/components/Section.vue'

Vue.component('Link', Link)
Vue.component('Layout', Layout)
Vue.component('DocsLayout', Docs)
Vue.component('Section', Section)

// Import global CSS
require('@/assets/style/index.scss')

// Setup typography
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  headerFontFamily: ['League Spartan', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Avenir', 'Helvetica'],
})

typography.injectStyles()

// Import font
require('typeface-league-spartan')
