<template>
  <div class="menu-section">
    <a href="#" class="menu-title" @click="openMenu = !openMenu">
      <h3 class="menu-item">
        {{ group.title }}
        <MenuArrow :class="{open: openMenu}" />
      </h3>
    </a>
    <div :class="{'menu-list-collapse': !openMenu}">
      <template v-for="(item, i2) in group.items">
        <g-link
          :exact="item.link == '/docs/'"
          class="menu-item menu-link"
          :to="item.link"
          :key="`link-${index}-${i2}`"
        >{{ item.title }}</g-link>
      </template>
    </div>
  </div>
</template>

<script>
import MenuArrow from '~/assets/images/icon-arrow.svg'

export default {
    components: {
        MenuArrow
    },
    props: {
        group: {
            type: Object,
            default: () => {}
        },
        index: {
            type: Number
        }
    },
    data() {
        return {
            openMenu: true
        }
    }
}
</script>

<style lang="scss">
.menu-title {
    display: block;
}

h3.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  .icon-arrow_svg__icon-arrow {
    margin-right: 10px;
    transition: transform 0.5s linear;
    transform: rotate(-180deg);

    &.open {
      transform: rotate(-90deg);
    }
  }
}

.menu-list-collapse {
  display: none;
}
</style>
