const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

/**
 * Data source from lowdb filesync
 * From every item of a array, call add api.loadSource({addContentType, slugify})
 * @param {Object} api - gridsome plugin api
 * @param {Object} options - gridsome plugin configuration options
 * @return 
 */
module.exports = function (api, options) {
  // options with lowdb plugin customization
  if (options.path === undefined) options.path = path.join("/src/data", "data.json") 
  if (options.entityName === undefined) options.entityName = "posts" 
  if (options.typeName === undefined) options.entityName = "LowdbPost" 

  // Create lowdb with file
  const adapter = new FileSync(options.path)
  const db = low(adapter)

  /**
   * Ref: https: //github.com/gridsome/gridsome/blob/feat/refs-with-multiple-types/gridsome/lib/app/PluginStore.js
   * 
   * Load Source with api builtin methods defined in `lib/app/PluginAPI.js`,
   * api.loadSource(handler) {
   *  this._on('loadSource', handler)
   * }
   * 
   * Handler is a function which take a `source` defined in `lib/app/PluginStore.js`. While Source is eventEmitter, with a `addType`,`addContentType`, `addPage` methods
   * 
   * Ref: https: //github.com/gridsome/gridsome/blob/a7038b39ef6aa543f899274c2fd6a914cdd37436/gridsome/lib/app/PluginStore.js#L44
   */
  api.loadSource(({
    addContentType,
    slugify
  }) => {
    const contentType = addContentType({
      typeName: options.typeName,
      route: `/lowdb/${options.entityName}/:slug`
    })
    
    const state = db.getState()
    const entities = state[options.entityName] 
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i]
      const title = entity.title || "Gridsome lowdb plugin";
      const node = {...entity[i], title: slugify(title) }

      try {
        contentType.addNode(node)
      } catch (err) {
        this.logger.warn(err.message)
      }
    }
  })
}

module.exports.defaultOptions = () => ({
  path: "",
  entityName: "posts",
  typeName: 'LowdbPost'
})