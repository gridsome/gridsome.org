<template>
  <p>
    <small>
      <template v-if="post.author">
        Posted {{ post.date }} by
        <template v-for="(author, i) in post.author">
          <span v-if="i && i === post.author.length - 1"> and </span>
          <span v-else-if="i > 0">, </span>
          <g-image class="author-image" v-if="author.avatar" :src="author.avatar" />

          <g-link :to="author.path" :key="author.id">
            {{ author.title }}
          </g-link>
        </template>
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

<style>
.author-image {
  width: 30px;
  border-radius: 99px;
  vertical-align: middle;
  margin: 0 6px;
}
</style>