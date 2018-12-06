<template>
  <div class="logo" @contextmenu="rightClick" oncontextmenu="return false;">
    <g-link class="logo__link" to="/" title="Back to home">
      <Logo class="logo__svg" alt="Gridsome.org" />
    </g-link>
  </div>
</template>

<script>
import Logo from '~/assets/images/gridsome-logo.svg'
export default {
  components: {
    Logo
  },
  methods: {
    rightClick() {
      this.$router.push({ path: '/logo' })
      return false
    }
  }
}
</script>

<style lang="scss">
 .logo {
  svg{
  	max-width: 140px;
  	height: auto;
  	margin-top: -3px;
  }
  &:hover {
 		opacity: .8;
 	}
 }
</style>
