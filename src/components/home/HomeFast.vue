<template>
  <Section class="post">
    <h2 class="text-center">Fast as Default</h2>
    <p class="lead text-center container-sm ">
      Build sites a that are optimized with the <strong>PRPL-pattern</strong> to get perfect <strong>Lighthouse Audit</strong> scores.
    </p>
      <div class="homepage-features grid-cols grid-cols--2 container-md">
        <ul >
          <li>Automatic code-splitting</li>
          <li>Automatic compressing of assets</li>
          <li>Automatic critical CSS</li>
          <li>Automatic next page prefetcing</li>
          <li>AI-ready page prefetcing (Guess.js)</li>
        </ul>
        <ul>
          <li>Navigate without page reloads (SPA)</li>
          <li>PWA-ready out-of-the-box</li>
          <li>Progressive Images with lazy loading</li>
          <li>SEO-friendly markup</li>
          <li>CDN-ready. Scale unlimited</li>
        </ul>
      </div>
  </Section>
</template>

<script>
export default {
  props: ['icon', 'gradient'],
  computed: {
    iconClasses() {
      let classes = []
      if(this.gradient) classes.push('gradint-' + this.gradient)
      return classes
    }
  }
}
</script>
