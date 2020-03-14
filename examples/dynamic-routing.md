---
title: File-based dynamic routing
filepath: src/pages/user/[id].vue
filetype: vue
order: 4
---

```html
<template>
  <div v-if="user">
  	<!-- Add a [param].vue file in src/pages 
  			 folder to create a dynamic route -->
    <h1>{{ user.name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const response = await fetch(`https://api.com/user/${id}`)
    this.user = await response.json()
  }
}
</script>
```