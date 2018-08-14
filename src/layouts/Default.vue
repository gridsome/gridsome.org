<template>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/get-started">Get started</Link>
        </li>
      </ul>
    </nav>

    <slot/>
  </div>
</template>

<script>
import { Link } from '@gridsome/components'

export default {
  components: {
    Link
  }
}
</script>
