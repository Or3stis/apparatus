'use scrict'

// shows info of node in the div 'infoForNodes'
module.exports = function addEdge (s, sourceNode, targetNode) {
  // finds the id of the last edge
  let lastEdge = s.graph.edges().length

  for (let e of s.graph.edges().values()) {
    // checks if the existing edge is a curved
    if (e.type !== 'curvedArrow') {
      if (sourceNode === e.source && targetNode === e.target) {
        document.getElementById('infoForNodes').innerHTML = 'edge exists'
        return
      } else if (sourceNode === e.target && targetNode === e.source) {
        document.getElementById('infoForNodes').innerHTML = 'edge exists'
        return
      }
    }
  }
  s.graph.addEdge({
    id: `e${lastEdge}`,
    target: sourceNode,
    source: targetNode
  })
  s.refresh()
}
