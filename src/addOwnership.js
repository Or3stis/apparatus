'use scrict'

// is true when a connection exists between two nodes
let token = false

// valid component connections
const ownerArray = ['device', 'data', 'network connection', 'undentified node']

// checks edge validity
const validEdge = (sourceNode, targetNode) => {
  if (sourceNode.info.type === 'actor' ||
    sourceNode.info.type === 'malicious actor') {
    if (ownerArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else {
    document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
    token = true
  }
}

// shows info of node in the div 'infoForNodes'
module.exports = function addEdge (s, sourceNode, targetNode, lastEdge) {
  const addedEdge = lastEdge

  // return token for edge validity
  validEdge(sourceNode, targetNode)

  if (token === false) {
    s.graph.edges().map((e) => {
      // checks if the existing edge is a curved
      if (e.type === 'curvedArrow') {
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
  }

  if (token === false) {
    s.graph.addEdge({
      id: `e${addedEdge}`,
      label: 'owns',
      size: 0.1,
      type: 'curvedArrow',
      source: sourceNode.id,
      target: targetNode.id
    })
    s.refresh()
  }
}
