<template>
  <div>
    <Header />
      <main class="fade-up">
        <slot />
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from './partials/Header'
import Footer from './partials/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
