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

    // contributors
    const authorsPath = path.join(__dirname, 'contributors/contributors.yaml')
    const authorsRaw = await fs.readFile(authorsPath, 'utf8')
    const authorsJson = yaml.safeLoad(authorsRaw)
    const authors = store.addContentType({
      typeName: 'Contributor',
      route: '/contributor/:id'
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

    // Starters
    const startersPath = path.join(__dirname, 'starters/starters.yaml')
    const startersRaw = await fs.readFile(startersPath, 'utf8')
    const startersJson = yaml.safeLoad(startersRaw)
    const starters = store.addContentType({
      typeName: 'Starter',
      route: '/starters/:title'
    })

    // Connect author field to Contributors & Platforms
    starters.addReference('author','Contributor')
    starters.addReference('platforms','Platform')

    startersJson.forEach(({ id, name: title, ...fields }) => {
      starters.addNode({
        id,
        title,
        fields,
        internal: {
          origin: startersPath
        }
      })
    })

    // Platforms
    const platformsPath = path.join(__dirname, 'platforms/platforms.yaml')
    const platformsRaw = await fs.readFile(platformsPath, 'utf8')
    const platformsJson = yaml.safeLoad(platformsRaw)
    const platforms = store.addContentType({
      typeName: 'Platform',
      route: '/starters/platform/:id'
    })

    // Connect author field to Contributors
    platformsJson.forEach(({ id, name: title, ...fields }) => {
      platforms.addNode({
        id,
        title,
        fields,
        internal: {
          origin: platformsPath
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
