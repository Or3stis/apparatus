'use scrict'

// shows info of node in the div 'infoForNodes'
module.exports = function addEdge (s, sourceNode, targetNode, lastEdge) {
  const addedEdge = lastEdge
  let token = false

  s.graph.edges().map((e) => {
    // checks if the existing edge is a curved
    if (e.type === 'curvedArrow') {
      if (sourceNode === e.source && targetNode === e.target) {
        document.getElementById('infoForNodes').innerHTML = 'edge exists'
        token = true
        return
      } else if (sourceNode === e.target && targetNode === e.source) {
        document.getElementById('infoForNodes').innerHTML = 'edge exists'
        token = true
        return
      } else {
        token = false
        return
      }
    }
  })
  if (token === false) {
    s.graph.addEdge({
      id: `e${addedEdge}`,
      label: 'owns',
      size: 0.1,
      type: 'curvedArrow',
      target: sourceNode,
      source: targetNode
    })
    s.refresh()
  }
}
