<template>
  <p>
    <small>
      <template v-if="article.fields && article.fields.author">
        Posted {{ article.date }} by
        <a href="#">{{ article.fields.author }}</a>
        <span v-if="article.timeToRead"> - </span>
      </template>

      <template v-if="article.timeToRead">
        <strong>{{ article.timeToRead }} min read</strong>
      </template>
    </small>
  </p>
</template>

<script>
export default {
  props: {
    article: { type: Object, required: true }
  }
};
</script>
