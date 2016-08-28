'use scrict'

// is true when a connection exists between two nodes
let allowed = Symbol()
let notAllowed = Symbol()
let token = allowed

// valid component connections
const ownerArray = ['device', 'data', 'network connection', 'undentified node']

// checks edge validity
const validEdge = (sourceNode, targetNode) => {
  if (sourceNode.info.type === 'actor' ||
    sourceNode.info.type === 'malicious actor') {
    if (ownerArray.indexOf(targetNode.info.type) !== -1) {
      token = notAllowed
    } else {
      document.getElementById('info-for-nodes').innerHTML = 'edge not allowed'
      token = allowed
    }
  } else {
    document.getElementById('info-for-nodes').innerHTML = 'edge not allowed'
    token = allowed
  }
}

// shows info of node in the div 'info-for-nodes'
module.exports = function addEdge (s, sourceNode, targetNode, lastEdge) {
  const addedEdge = lastEdge

  // return token for edge validity
  validEdge(sourceNode, targetNode)

  if (token === notAllowed) {
    s.graph.edges().map((e) => {
      // checks if the existing edge is a curved
      if (e.type === 'curvedArrow') {
        if (sourceNode.id === e.source && targetNode.id === e.target) {
          document.getElementById('info-for-nodes').innerHTML = 'edge exists'
          token = allowed
        } else if (sourceNode.id === e.target && targetNode.id === e.source) {
          document.getElementById('info-for-nodes').innerHTML = 'edge exists'
          token = allowed
        } else {
          token = notAllowed
        }
      }
    })
  }

  if (token === notAllowed) {
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
