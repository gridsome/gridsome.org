import Vue from 'vue'

// Make components global
import { Link } from '@gridsome/components'
import Layout from '@/layouts/Default.vue'
import Docs from '@/layouts/Docs.vue'

Vue.component('Link', Link)
Vue.component('Layout', Layout)
Vue.component('DocsLayout', Docs)


// Setup typography
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['League Spartan', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif'],
})

typography.injectStyles()
require('typeface-league-spartan')
