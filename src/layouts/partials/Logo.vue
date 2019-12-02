<template>
  <div class="logo" @contextmenu="rightClick" oncontextmenu="return false;">
    <g-link to="/" title="Back to home" class="mr-5 block">
      <Logo class="h-6 w-auto hidden sm:block" alt="Gridsome.org" />
      <LogoSmall class="h-6 w-auto sm:hidden" alt="Gridsome.org" />
    </g-link>
  </div>
</template>

<script>
import Logo from '~/assets/images/gridsome-logo.svg'
import LogoSmall from '~/assets/images/gridsome-logo-small.svg'
export default {
  components: {
    Logo,
    LogoSmall
  },
  methods: {
    rightClick() {
      this.$router.push({ path: '/logo' })
      return false
    }
  }
}
</script>