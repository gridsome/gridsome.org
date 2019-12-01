// Import variables
import '~/assets/style/vars.scss'

// Add global components
import Layout from '~/layouts/Default.vue'
import DocsLayout from '~/layouts/Docs.vue'
import Section from '~/components/Section.vue'
import Feature from '~/components/Feature.vue'
import Card from '~/components/Card'

import VueScrollTo from 'vue-scrollto'

export default function (Vue, { head, router, isServer }) {
  Vue.component('Layout', Layout)
  Vue.component('DocsLayout', DocsLayout)
  Vue.component('Section', Section)
  Vue.component('Feature', Feature)
  Vue.component('Card', Card)

  Vue.use(VueScrollTo)
}
