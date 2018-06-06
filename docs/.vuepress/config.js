module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Gridsome',
      description: 'Visual site building done right',
    },
    '/no/': {
      lang: 'nb-NO',
      title: 'Gridsome',
      description: 'Visuel sidebygger gjort riktig',
    }
  },
  serviceWorker: true,
  themeConfig: {
    repo: 'gridsome/gridsome',
    docsRepo: 'gridsome/docs',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Advanced', link: '/advanced/' }
        ],
        sidebar: {
          '/guide/': createGuideSidebar('Guide'),
          '/advanced/': createAdvancedSidebar('Advanced')
        }
      },
      '/no/': {
        label: 'Norsk',
        selectText: 'Språk',
        nav: [
          { text: 'Guide', link: '/no/guide/' },
          { text: 'Avansert', link: '/no/advanced/' }
        ],
        sidebar: {
          '/no/guide/': createGuideSidebar('Guide'),
          '/no/advanced/': createAdvancedSidebar('Avansert')
        }
      }
    }
  }
}

function createGuideSidebar (title) {
  return [
    '',
    'installation',
    'content',
    ['plugins', 'Plugins'],
    'deploy'
  ]
}

function createAdvancedSidebar (title) {
  return [
    '',
    'components',
    'plugins',
    ['contribute', 'Contribute']
  ]
}
