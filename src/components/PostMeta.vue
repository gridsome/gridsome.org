<template>
  <p>
    <small>
      <template v-if="post.author">
        Posted {{ post.date }} by
        <a href="#">{{ post.author }}</a>
        <span v-if="post.timeToRead"> - </span>
      </template>

      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read</strong>
      </template>
    </small>
  </p>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true }
  }
}
</script>
