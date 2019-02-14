<template>
  <Layout class="has-sidebar docs-page" :footer="false">
    <div class="container flex gap-60 flex-align-top">
      <div class="sidebar">
        
        <transition-group name="menu-item">
          <template v-for="(group, i1) in links">
            <h3 class="menu-item" :key="`title-${i1}`">{{ group.title }}</h3>

            <template v-for="(item, i2) in group.items">
              <g-link class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`">
                {{ item.title }}
              </g-link>
              <ul v-if="item.link === currentPath && subtitles && subtitles.length" :key="`submenu-${i1}-${i2}`" class="menu-item submenu">
                <li class="submenu__item" v-for="subtitle in subtitles">
                  <g-link class="submenu__link" :to="item.link + subtitle.anchor">
                    {{ subtitle.value }}
                  </g-link>
                </li>
              </ul>
            </template>
          </template>
        </transition-group>

      </div>
      <Section class="flex-fit" container="md">
        <slot />
        <p>
          <a :href="editLink" target="_blank" class="github-edit-link">
            <Github />
            <span>Edit this page on GitHub</span>
          </a>
        </p>
        <nav class="docs-nav">
          <div class="docs-nav__previous">
            <g-link v-if="previousPage" class="docs-nav__link" :to="previousPage.link">
              {{ previousPage.title }}
            </g-link>
          </div>
          <div class="docs-nav__next">
            <g-link v-if="nextPage" class="docs-nav__link" :to="nextPage.link">
              {{ nextPage.title }}
            </g-link>
          </div>
        </nav>
      </Section>
    </div>
  </Layout>
</template>

<script>
import Github from '~/assets/images/github-logo.svg'

export default {
  components: {
    Github
  },
  props: {
    subtitles: Array,
    links: Array
  },
  computed: {
    currentPath () {
      return this.$route.matched[0].path
    },
    editLink () {
      let path = this.currentPath
      if((path.match(new RegExp("/", "g")) || []).length == 1) path = path + '/README'
      return `https://github.com/gridsome/gridsome.org/blob/master${path}.md`
    },
    items () {
      return this.links.reduce((acc, group) => (acc.push(...group.items), acc), [])
    },
    currentIndex () {
      return this.items.findIndex(item => item.link === this.$route.path)
    },
    nextPage () {
      return this.items[this.currentIndex + 1]
    },
    previousPage () {
      return this.items[this.currentIndex - 1]
    }
  }
}
</script>

<style lang="scss">
.docs-page .post {

  max-width: 100%;

  ul li {
    margin-bottom: .2rem;
  }

  p > img {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1000px) {
    img {
      max-width: 110%;
      margin-left: -5%;
    }
  }

  
  h1, h2, h3 {
    padding-top: 6rem;
    margin-top: -5rem;

    a {
      float: left;
      top: 0.12em;
      margin-left: -1.2em;
      font-size: 0.85em;
      text-align: center;
      width: 0.8em;
      opacity: 0.0;
      color: var(--primary-link-color);
      box-shadow: none;
      background: none;

      &::before {
        content: " ";
        position: absolute;
        top: 0;
        height: 100%;
        width: calc(100% + 0.5em);
      }

      &::after {
        display: none;
      }
    }

    &:hover a{
      opacity: 1;
    }
  }

  h2 {
    &::before {
      content: " ";
      display: block;
      margin-bottom: 1.5rem;
      border-top: 1px solid var(--border-color);
    }
  }
  
  h3 { opacity: .9 }

  h4, h5, h6 { opacity: .8 }

  h1 a, h4 a, h5 a, h6 a {
    display: none;
  }

  p, ul {
    position: relative;
    z-index: 1;
  }

  ul > li > p {
    font-weight: 400;
  }
}


.github-edit-link {
  font-size: .9rem;
  font-weight: normal;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  
  &:not(:hover) {
    color: var(--primary-link-color);
  }

  svg {
    margin-right: .5rem;
  }
}

.docs-nav {
  display: flex;
  justify-content: space-between;
  padding-top: var(--space);
  padding-bottom: var(--space);
  border-top: 1px solid var(--border-color);

  &__title {
    margin: 0;
    font-size: 0.75em;
  }

  &__link {
    padding: 0;
    color: var(--primary-link-color);
  }
}
</style>
