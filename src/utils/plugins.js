import algoliasearch from 'algoliasearch'

const client = algoliasearch('OFCNCOG2CU', '6fbcaeafced8913bf0e4d39f0b541957')
const index = client.initIndex('npm-search')

const hits = []
const exclude = ['gridsome', '@gridsome/cli']

export function browseAll (query = '') {
  if (query) hits.splice(0, hits.length)

  const browser = index.browseAll(query, {
    filters: 'keywords:gridsome AND deprecated:false',
    typoTolerance: false
  })

  return new Promise((resolve, reject) => {
    browser.on('result', res => appendHits(res))
    browser.on('end', () => resolve(hits.slice()))
    browser.on('error', err => reject(err))
  })
}

export async function browseSingle (name) {
  const hit = hits.find(hit => hit.name === name)

  if (hit) return hit

  const browser = await index.browseAll(name, {
    typoTolerance: false
  })

  return new Promise((resolve, reject) => {
    browser.on('result', res => appendHits(res))
    browser.on('end', () => resolve(hits.find(hit => hit.name === name)))
    browser.on('error', err => reject(err))
  })
}

function appendHits (result) {
  result.hits.forEach(newHit => {
    if (exclude.includes(newHit.name)) return

    if (!hits.find(hit => hit.name === newHit.name)) {
      hits.push(newHit)
    }
  })
}
