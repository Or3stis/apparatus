'use scrict'

// when a node is clicked the neighbors is checked
// if neighbor true, the original color is kept
// needs the sigmaNeighbor.js to work
module.exports = function showNeighbor (e, s) {
  let nodeId = e.data.node.id
  let toKeep = s.graph.neighbors(nodeId)

  toKeep[nodeId] = e.data.node

  for (let n of s.graph.nodes().values()) {
    if (toKeep[n.id]) {
      n.color = n.originalColor
    } else {
      n.color = '#424A57'
    }
  }
  for (let e of s.graph.edges().values()) {
    if (toKeep[e.target]) {
      e.color = e.originalColor
    } else {
      e.color = '#424A57'
    }
  }
}
