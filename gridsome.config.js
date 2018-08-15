module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        type: 'page',
        index: ['README'],
        typeNamePrefix: 'Doc',
        path: 'docs/**/*.md'
      }
    }
  ]
}
