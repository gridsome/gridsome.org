module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        type: 'page',
        typeNamePrefix: 'Doc',
        path: 'docs/**/*.md'
      }
    }
  ]
}
