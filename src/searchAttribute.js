'use strict'

const config = require('./config')

// search the attributes of the node inside the graph
// and highlight the corresponding nodes

module.exports = function securityHints (s, term) {
  let searchNodes = ''
  s.graph.nodes().map((n) => {
    // paints every node as the shadow color
    n.color = config.darkLine
    Object.keys(n.info).map((value) => {
      if (n.info[value] === term) {
        searchNodes += `• ${n.label}\n`
        // repaints the flagged nodes in their original color
        n.color = n.originalColor
      }
    })
  })
  // paints the edges the shadow color
  s.graph.edges().map((e) => {
    e.color = config.darkLine
  })
  document.getElementById('info-for-nodes-id').textContent = searchNodes
  s.refresh()
}
