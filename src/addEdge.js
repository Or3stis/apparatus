'use scrict'

// shows info of node in the div 'infoForNodes'
module.exports = function addEdge (s, sourceNode, targetNode) {
  // finds the id of the last edge
  let lastEdge = s.graph.edges().length

  s.graph.edges().map((e) => {
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
  })
  s.graph.addEdge({
    id: `e${lastEdge}`,
    size: 0.1,
    target: sourceNode,
    source: targetNode
  })
  s.refresh()
}
