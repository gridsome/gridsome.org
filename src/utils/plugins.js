import algoliasearch from 'algoliasearch'

const client = algoliasearch('OFCNCOG2CU', '6fbcaeafced8913bf0e4d39f0b541957')
const index = client.initIndex('npm-search')

const hits = []

export function browseAll (keywords) {
  if (hits.length) return hits

  const browser = index.browseAll({
    filters: `keywords:${keywords}`
  })

  return new Promise((resolve, reject) => {
    browser.on('result', res => hits.push(...res.hits))
    browser.on('end', () => resolve(hits))
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
    browser.on('result', res => hits.push(...res.hits))
    browser.on('end', () => resolve(hits.find(hit => hit.name === name)))
    browser.on('error', err => reject(err))
  })
}
