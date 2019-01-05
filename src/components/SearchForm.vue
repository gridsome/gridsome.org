<template>
  <form :id="id" class="header-search">
    <input type="search" placeholder="Search docs..." :id="`${id}-input`" class="header-search__input">
  </form>
</template>

<script>
export default {
  props: {
    id: { type: String, default: 'search' }
  },

  mounted () {
    import('docsearch.js').then(({ default: docsearch }) => {
      docsearch({  
        indexName: 'gridsome',
        inputSelector: `#${this.id}-input`,
        apiKey: 'a7400a3a94b256c5283cb05efb860fc1',
        debug: process.env.NODE_ENV === 'development'
      })
    })
  }
}
</script>

<style lang="scss">
@import "~docsearch.js/dist/cdn/docsearch.min.css";

.header-search {
  display: inline-block;
  margin-bottom: 0;
  font-size: .9rem;
  
  & &__input {
    color:#FFF;
    width: 32px;
    border-radius: 99px;
    padding-left: 0;
    border-color: transparent;
    background-color: transparent;
    transition: padding .2s, width .2s, opacity .3s;
    margin-bottom: .5px;

    &:not(:focus) {
      background-position: 50% 50%;
    }

    &:focus {
      width: 160px;
      background-color: rgba(0,0,0,.2);
      border-color: rgba(0,0,0,.1);
      padding: .3rem .7rem;
    }

    &::-webkit-input-placeholder {
      opacity: 0;
    }
    &:focus::-webkit-input-placeholder {
      opacity: .4;
    }
  }
}
</style>
