'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function buttonSelection (classification, s) {
  let nodes = ''
  for (let n of s.graph.nodes().values()) {
    if (n.info.type === classification) {
      n.color = n.originalColor
      nodes = `${nodes} ${n.label} <br/>`
    } else {
      n.color = '#666666'
    }
  }
  for (let e of s.graph.edges().values()) {
    e.color = '#666666'
  }
  document.getElementById('infoForNodes').innerHTML = nodes
  s.refresh()
}
