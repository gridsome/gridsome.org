<template>
	<div>
		<template v-if="links" v-for="(group, i1) in links">
		  <h3 class="uppercase mb-2 mt-8 text-xs font-bold text-headline" :key="`title-${i1}`">{{ group.title }}</h3>
		  <template v-for="(item, i2) in group.items">
		    <g-link :exact="item.link == '/docs/'" class="text-sm block font-mono mb-1 opacity-75 hover:opacity-100" :to="item.link" :key="`link-${i1}-${i2}`">
		      {{ item.title }}
		    </g-link>
		  </template>
		</template>
	</div>
</template>

<script>
import links from '@/data/doc-links.yaml'
export default {
  computed: {
	  links () {
	    return links
	  },
  }
}
</script>