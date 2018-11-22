const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

class LowdbSource {
  static defaultOptions () {
      return {
        path: "src/data/data.json",
        entityName: "posts",
        typeName: 'LowdbPost'
      }
  }

  constructor (api, options) {
    // Create lowdb with file
    const adapter = new FileSync(options.path || "src/data/data.json")
    const db = low(adapter)
    this.options = options;
    // call loadSource, args is store instance as { addContentType, slugify }
    api.loadSource(args => this.loadData(args));
  }

  /**
  * Data source from lowdb filesync
  * From every item of a array, call add api.loadSource({addContentType, slugify})
  * @param {Object} api - gridsome plugin api
  * @param {Object} options - gridsome plugin configuration options
  * @return
  * NOTE Ref: https: //github.com/gridsome/gridsome/blob/feat/refs-with-multiple-types/gridsome/lib/app/PluginStore.js
  * Load Source with api builtin methods defined in `lib/app/PluginAPI.js`,
  * api.loadSource(handler) {
  *  this._on('loadSource', handler)
  * }
  * Handler is a function which take a `source` defined in `lib/app/PluginStore.js`. While Source is eventEmitter, with a `addType`,`addContentType`, `addPage` methods
  * NOTE Ref: https: //github.com/gridsome/gridsome/blob/a7038b39ef6aa543f899274c2fd6a914cdd37436/gridsome/lib/app/PluginStore.js#L44
  */
  loadData ( {addContentType, slugify} ) {
    const LowdbContentType = addContentType({
      typeName: this.options.typeName,
      route: `/lowdb/${this.options.entityName}/:slug`
    })

    const state = db.getState()
    const entities = state[this.options.entityName]
    entities.forEach(entity => {
      const title = entity.title || "Gridsome lowdb plugin";
      const node = {entity, title: slugify(title) }

      try {
        LowdbContentType.addNode(node)
      } catch (err) {
        this.logger.warn(err.message)
      }
    })
 }
}

module.exports = LowdbSource;
