const execa = require('execa')

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

    store
      .addContentType({
        typeName: 'Plugin',
        route: '/plugins/:namespace?/:id?'
      })
      .addNode({ id: '1' })
  })
}
