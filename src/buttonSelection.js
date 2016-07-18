'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function buttonSelection (classification, s) {
  let nodes = ''
  s.graph.nodes().map((n) => {
    if (n.info.type === classification) {
      n.color = n.originalColor
      nodes = `${nodes} > ${n.label} <br/>`
    } else {
      n.color = '#424A57'
    }
  })
  s.graph.edges().map(e => e.color = '#424A57')
  document.getElementById('infoForNodes').innerHTML = nodes
  s.refresh()
}
