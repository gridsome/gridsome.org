<template>
  <nav class="main-nav flex gap-15">
    <g-link to="/docs">
      <svg
        class="show-for-small feather feather-file-text"
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line
          x1="16"
          x2="8"
          y1="13"
          y2="13"
        ></line>
        <line
          x1="16"
          x2="8"
          y1="17"
          y2="17"
        ></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
      <span class="uppercase">Docs</span>
    </g-link>

    <g-link to="/learn">
      <svg
        class="show-for-small feather feather-compass"
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
        ></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
      <span class="uppercase">Learn</span>
    </g-link>

    <g-link to="/plugins">
      <svg
        class="show-for-small feather feather-zap"
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
      <span class="uppercase">Plugins</span>
    </g-link>

    <g-link to="/blog">
      <svg
        class="show-for-small feather feather-edit"
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
      </svg>
      <span class="uppercase">Blog</span>
    </g-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@media screen and (max-width: 750px) {
  .main-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--primary-bg);
    color: var(--secondary-bg);
    margin-right: 0 !important;
    justify-content: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    min-height: 60px;
    flex-wrap: nowrap !important;
    padding: 5px var(--space);
  }
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .main-nav {
    padding-bottom: var(--space);
  }
}
</style>
