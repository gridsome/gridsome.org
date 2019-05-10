const nodeExternals = require('webpack-node-externals')

module.exports = {
  siteName: 'Gridsome',
  siteUrl: `https://www.gridsome.org`,
  titleTemplate: '%s - Gridsome',
  siteDescription: 'Gridsome is a Vue.js-powered modern website generator that makes it easy and fun for developers to create beautiful JAMstack websites & PWAs that are fast by default.',
  
  chainWebpack(config, { isServer }) {
    config.module.rules.delete('svg')
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
        .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')

    if (isServer) {
      config.externals(nodeExternals({
        whitelist: [
          /\.css$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/,
          /typeface-league-spartan/
         ]
      }))
    }
  },

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-127625720-1'
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        index: ['README'],
        path: 'docs/**/*.md',
        typeName: 'DocPage',
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          },
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'examples/*.md',
        typeName: 'Example',
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
        typeName: 'BlogPost',
        path: './blog/*/index.md',
        route: '/blog/:year/:month/:day/:slug',
        refs: {
          author: 'Contributor'
        },
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    }
  ],
  // Create routes from GraphQL nodes
  nodeRoutes: {
     WordPressPost: '/:year/:month/:slug',
     WordPressTag: '/tag/:slug',
     CustomType: {
       route: '/other/:custom/:type',
       component: './src/templates/MyTemplate.vue', // default templates/typeName.vue
       nextFieldName: 'nextPost',
       prevFieldName: 'prevPost',
       sortBy: 'date'
     },
     Author: [
       {
         route: '/author/:name',
         component: './src/templates/Author.vue'
       },
       {
         route: '/author/:name/starters',
         component: './src/templates/AuthorStarters.vue'
       }
     ]
  },
  // Create dynamic routes
  clientRoutes: [
    { 
      path: '/foo/',
      component: './src/templates/MyTemplate.vue',
    },
    { 
      path: '/bar/:id', 
      component: './src/templates/MyTemplate.vue',
    }
  ]
}
