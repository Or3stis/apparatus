'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function buttonSelection (classification, s) {
  let nodes = ''
  for (let n of s.graph.nodes().values()) {
    if (n.info.type === classification) {
      n.color = n.originalColor
      nodes = `${nodes} ${n.label} <br/>`
    } else {
      n.color = '#2c2e3f'
    }
  }
  for (let e of s.graph.edges().values()) {
    e.color = '#2c2e3f'
  }
  document.getElementById('infoForNodes').innerHTML = nodes
  s.refresh()
}
