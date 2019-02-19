const path = require('path')
const fs = require('fs-extra')
const execa = require('execa')
const yaml = require('js-yaml')

module.exports = function (api) {
  api.loadSource(async store => {
    let gridsomeVersion = ''

    try {
      const { stdout } = await execa('npm', ['show', 'gridsome', 'version'])
      gridsomeVersion = stdout
    } catch (err) {
      console.warn('Failed to get gridsome version from npm.')
    }

    store.addMetaData('gridsomeVersion', gridsomeVersion)

    // Fake plugin node. TODO: Will be replaced with client side routes
    store
      .addContentType({
        typeName: 'Plugin',
        route: '/plugins/:id*'
      })
      .addNode({ id: '1' })


    // authors
    const authorsPath = path.join(__dirname, 'blog/authors/authors.yaml')
    const authorsRaw = await fs.readFile(authorsPath, 'utf8')
    const authorsJson = yaml.safeLoad(authorsRaw)
    const authors = store.addContentType({
      typeName: 'Author',
      route: '/author/:id'
    })

    authorsJson.forEach(({ id, name: title, ...fields }) => {
      authors.addNode({
        id,
        title,
        fields,
        internal: {
          origin: authorsPath
        }
      })
    })   
  })

  api.afterBuild(async ({ config }) => {
    const from = path.join(config.outDir, 'plugins/1/index.html')
    const to = path.join(config.outDir, 'plugins/index.html')

    await fs.copy(from, to)
  })
}
