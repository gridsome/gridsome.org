module.exports = {
  siteName: 'Gridsome',
  siteUrl: `https://www.gridsome.org`,
  titleTemplate: '%s - Gridsome',

  plugins: [
    '@gridsome/plugin-critical',
    '@gridsome/plugin-typography',
    {
      use: '@gridsome/source-filesystem',
      options: {
        type: 'page',
        index: ['README'],
        path: 'docs/**/*.md',
        typeName: 'Doc',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        type: 'page',
        index: ['README'],
        path: 'plugins/**/*.md',
        typeName: 'Plugin'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        type: 'post',
        path: 'blog/*/index.md',
        route: '/blog/:year/:month/:day/:slug+',
        typeName: 'Blog'
      }
    }
  ]
}
