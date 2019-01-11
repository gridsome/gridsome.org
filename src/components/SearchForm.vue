<template>
  <form
    :id="id"
    class="header-search"
  >
    <input
      :id="`${id}-input`"
      class="header-search__input"
      placeholder="Search docs..."
      type="search"
    >
  </form>
</template>

<script>
export default {
  props: {
    id: { type: String, default: "search" }
  },

  mounted() {
    import("docsearch.js").then(({ default: docsearch }) => {
      docsearch({
        indexName: "gridsome",
        inputSelector: `#${this.id}-input`,
        apiKey: "a7400a3a94b256c5283cb05efb860fc1",
        debug: process.env.NODE_ENV === "development"
      });
    });
  }
};
</script>

<style lang="scss">
@import "~docsearch.js/dist/cdn/docsearch.min.css";

.header-search {
  display: inline-block;
  margin-bottom: 0;
  margin-right: 0.5rem;
  font-size: 0.9rem;

  & &__input {
    color: #fff;
    width: 32px;
    border-radius: 99px;
    padding-left: 0;
    border-color: transparent;
    background-color: transparent;
    transition: padding 0.2s, width 0.2s, opacity 0.3s;
    margin-bottom: 0.5px;

    &:not(:focus) {
      background-position: 50% 50%;
    }

    &:focus {
      width: 160px;
      background-color: rgba(0, 0, 0, 0.2);
      border-color: rgba(0, 0, 0, 0.1);
      padding: 0.3rem 0.7rem;
    }

    &::-webkit-input-placeholder {
      opacity: 0;
    }
    &:focus::-webkit-input-placeholder {
      opacity: 0.4;
    }
  }
}
</style>
