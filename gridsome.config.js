module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        type: 'page',
        index: ['README'],
        path: 'docs/**/*.md',
        typeName: 'Doc'
      }
    }
  ]
}
