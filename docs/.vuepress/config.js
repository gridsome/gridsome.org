module.exports = {
  title: 'Gridsome',
  description: 'Visual site building done right',
  serviceWorker: true,
  // ga: 'UA-',
  themeConfig: {
    repo: 'gridsome/gridsome',
    docsRepo: 'gridsome/docs',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' }
    ],
    sidebar: [
      {
        title: 'Guide',
        children: [
          '/guide/introduction',
          '/guide/installation'
        ]
      },
      {
        title: 'Advanced',
        children: []
      }
    ]
  }
}
