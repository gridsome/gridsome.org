import Vue from 'vue'

// Import global styles
import 'prismjs/themes/prism.css'
import '@/assets/style/index.scss'

// Add global components
import Layout from '@/layouts/Default.vue'
import Docs from '@/layouts/Docs.vue'
import Section from '@/components/Section.vue'
import Feature from '@/components/Feature.vue'
import Card from '@/components/Card'

Vue.component('Layout', Layout)
Vue.component('DocsLayout', Docs)
Vue.component('Section', Section)
Vue.component('Feature', Feature)
Vue.component('Card', Card)
