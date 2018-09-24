<template>
  <Section dots="true" primary="true">
    <div class="container text-center container-sm mb">
      <h2>Latest posts</h2>
    </div>
    <div class="blog-posts container container-md">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node._id" :post="edge.node"/>
    </div>
  </Section>
</template>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  components: {
    PostCard
  }
}
</script>

<static-query>
query BlogPosts {
  posts: allBlogPost {
    edges {
      node {
        _id
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        content
        fields {
          author
          excerpt
        }
      }
    }
  }
}
</static-query>


<style lang="scss">
  .feature {
    text-align:center; 

    &__icon {
      width: 50px;
      height: 50px;
      border-radius: 99px;
      margin: 0 auto 30px;
      background-color: #FFF;
      display:flex;
      align-items:center;
      justify-content:center;
      svg {
        margin-top:-3px;
      }
    }

    &__inner {
      flex: 1;
    }

    h3 {
      margin-bottom: 1rem;
      padding: 0 1rem;
      line-height: 1.4;
    }
  }
</style>
