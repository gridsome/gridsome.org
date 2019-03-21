<template>
  <footer class="text-center">
    An open source project by
    <g-link to="/contributor/hjvedvik"> @hjvedvik</g-link>
      &
    <g-link to="/contributor/tommyvedvik">@tommyvedvik</g-link>
      and
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
  background-color: #FFF;
  border-top: 1px solid var(--border-color);
  margin-top: -1px;
  padding: 20px;

  @media screen and (max-width: 850px) {
    padding-bottom: 90px;
  }
}
</style>