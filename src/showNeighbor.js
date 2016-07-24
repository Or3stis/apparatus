'use scrict'

const dark = '#424A57'
const light = '#e0e0e0'
let shadowColor = ''

// when a node is clicked the neighbors is checked
// if neighbor true, the original color is kept
// needs the sigmaNeighbor.js to work
module.exports = function showNeighbor (e, s, toggleTheme) {
  // detects color theme
  shadowColor = (toggleTheme === true) ? light : dark

  let nodeId = e.data.node.id
  let toKeep = s.graph.neighbors(nodeId)

  toKeep[nodeId] = e.data.node

  s.graph.nodes().map((n) => {
    toKeep[n.id] ? n.color = n.originalColor : n.color = shadowColor
  })
  s.graph.edges().map((e) => {
    toKeep[e.target] ? e.color = e.originalColor : e.color = shadowColor
  })
}
