<template>
  <form
    :id="id"
    class="header-search w-full flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="-mr-8 w-8 z-10 search-icon feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input
        ref="input"
        :id="`${id}-input`"
        class="font-mono bg-light text-sm w-full border shadow-strong p-1 pl-8 rounded"
        placeholder="Search Gridsome documentation (/ to focus)"
        title="Search docs"
        type="search"
        @focus="onFocus"
      />
  </form>
</template>

<script>
export default {
  props: {
    id: { type: String, default: 'search' }
  },

  data () {
    return {
      isLoaded: false
    }
  },

  methods: {
    onFocus () {
      if (this.isLoaded) return

      import('docsearch.js').then(({ default: docsearch }) => {
        docsearch({
          indexName: 'gridsome',
          inputSelector: `#${this.id}-input`,
          apiKey: 'a7400a3a94b256c5283cb05efb860fc1',
          debug: process.env.NODE_ENV === 'development'
        })

        this.isLoaded = true

        this.$nextTick(() => this.$refs.input.focus())
      })
    }
  }
}
</script>

<style lang="scss">
// @import '~docsearch.js/dist/cdn/docsearch.min.css';
</style>
