<template>
  <GalleryLayout>
   <Section class="starters-header">
      <h1 class="text-center container-sm">Gridsome Starters</h1>
      <p class="text-center lead container-sm">Get started quickly with premade Gridsome projects</p>
   </Section>
   <Section>
      <div class="grid-cols grid-cols--4">
        <Card>Default starter</Card>
        <Card>asdf</Card>
        <Card>asdf</Card>
        <Card>asdf</Card>
        <Card>asdf</Card>
        <Card>asdf</Card>
        <Card>asdf</Card>
        <Card>asdf</Card>
        <Card>asdf</Card>
        <Card>asdf</Card>
        <Card>asdf</Card>
        <Card>asdf</Card>
      </div>
    </Section>
  </GalleryLayout>
</template>

<page-query>
query Starters {
  starters: allStarter {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import IconStarters from '@/assets/images/icon-starters.svg'

export default {
  components: {
    IconStarters
  },
}
</script>

<style>
.starters-header {
  border-bottom: 1px solid var(--border-color);
  background-color: #FFF;
}
</style>


