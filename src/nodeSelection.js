const config = require('./config')

'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function buttonSelection (classification, s) {
  let nodes = ''

  s.graph.nodes().map((n) => {
    if (n.info.type === classification) {
      n.color = n.originalColor
      nodes = `${nodes} • ${n.label}\n`
    } else {
      n.color = config.darkLine
    }
  })
  s.graph.edges().map((e) => {
    e.color = config.darkLine
  })
  document.getElementById('info-for-nodes-id').textContent = nodes
  s.refresh()
}
