import marked from 'marked'
import Prism from 'prismjs'

marked.setOptions({
  highlight(code, lang, callback) {

    return Prism.languages[lang]
      ? Prism.highlight(code, Prism.languages[lang], lang)
      : code
  }
})

export default marked
