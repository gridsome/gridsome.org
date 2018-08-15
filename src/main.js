import Vue from 'vue'

// Make components global
import { Link } from '@gridsome/components'
import Layout from '@/layouts/Default.vue'
import Docs from '@/layouts/Docs.vue'

Vue.component('Link', Link)
Vue.component('Layout', Layout)
Vue.component('DocsLayout', Docs)
