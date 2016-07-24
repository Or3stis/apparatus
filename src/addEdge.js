'use scrict'

// shows info of node in the div 'infoForNodes'
module.exports = function addEdge (s, sourceNode, targetNode, lastEdge) {
  // finds the id of the last edge
  const addedEdge = lastEdge
  // is true when a connection exists between two nodes
  let token = false

  s.graph.edges().map((e) => {
    // checks if the existing edge is a curved
    if (e.type !== 'curvedArrow') {
      if (sourceNode.id === e.source && targetNode.id === e.target) {
        document.getElementById('infoForNodes').innerHTML = 'edge exists'
        token = true
      } else if (sourceNode.id === e.target && targetNode.id === e.source) {
        document.getElementById('infoForNodes').innerHTML = 'edge exists'
        token = true
      } else {
        token = false
      }
    }
  })
  // console.log(e.source, e.target)
  if (token === false) {
    s.graph.addEdge({
      id: `e${addedEdge}`,
      size: 0.1,
      target: sourceNode.id,
      source: targetNode.id
    })
    s.refresh()
  }
}
