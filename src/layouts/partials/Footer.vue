<template>
  <footer class="text-center">
    Made in ⛄️ Norway by
    <a
      class="plain"
      href="//twitter.com/hjvedvik"
      rel="noopener noreferrer"
      target="_blank"
    >@hjvedvik</a> &
    <a
      class="plain"
      href="//twitter.com/tommyvedvik"
      rel="noopener noreferrer"
      target="_blank"
    >@tommyvedvik</a> and
    <a
      class="plain"
      href="//github.com/gridsome/gridsome/graphs/contributors"
      rel="noopener noreferrer"
      target="_blank"
    >Contributors 🌟</a>
    <g-link to="/logo">Logo & assets</g-link>
  </footer>
</template>

<style lang="scss">
footer {
  font-size: 0.75rem;
  background-color: var(--primary-bg);
  padding: 20px;

  @media screen and (max-width: 750px) {
    padding-bottom: 90px;
  }
}
</style>