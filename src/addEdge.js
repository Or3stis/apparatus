'use scrict'

// is true when a connection exists between two nodes
let token = false

// valid component connections
const deviceArray = ['secure micronet', 'micronet', 'vulnerability',
  'network connection', 'data', 'actor', 'asset', 'net'
]
const networkArray = ['device', 'actor', 'data']
const micronetArray = ['device', 'net', 'vulnerability',
  'secure micronet']
const netArray = ['micronet', 'unidentified node', 'threat', 'device']
const undentifiedNodeArray = ['net', 'actor', 'malicious actor']
const dataArray = ['asset', 'device', 'network connection', 'actor']
const actorArray = ['asset', 'network connection', 'device',
  'unidentified node', 'data']
const maliciousActorArray = actorArray.concat('threat')
const secureMicronetArray = micronetArray.concat('constraint')
const assetArray = ['data', 'threat', 'actor', 'device']
const constraintArray = ['secure micronet', 'threat', 'objective']
const objectiveArray = ['mechanism', 'constraint']
const mechanismArray = ['objective', 'vulnerability']
const threatArray = ['asset', 'malicious actor', 'vulnerability', 'constraint',
  'net']
const vulnerabilityArray = ['threat', 'micronet', 'mechanism', 'device',
  'network connection']

// needs refactoring
// repetative code :(
function validEdge (sourceNode, targetNode) {
  if (sourceNode.info.type === 'device') {
    if (deviceArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'network connection') {
    if (networkArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'micronet') {
    if (micronetArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'net') {
    if (netArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'unidentified node') {
    if (undentifiedNodeArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'data') {
    if (dataArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'actor') {
    if (actorArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'malicious actor') {
    if (maliciousActorArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'secure micronet') {
    if (secureMicronetArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'asset') {
    if (assetArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'constraint') {
    if (constraintArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'objective') {
    if (objectiveArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'mechanism') {
    if (mechanismArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'threat') {
    if (threatArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  } else if (sourceNode.info.type === 'vulnerability') {
    if (vulnerabilityArray.indexOf(targetNode.info.type) !== -1) {
      token = false
    } else {
      document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
      token = true
    }
  }
}

// shows info of node in the div 'infoForNodes'
module.exports = function addEdge (s, sourceNode, targetNode, lastEdge) {
  // finds the id of the last edge
  const addedEdge = lastEdge

  // return token for edge validity
  validEdge(sourceNode, targetNode)

  if (token === false) {
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
  }
  // console.log(e.source, e.target)
  if (token === false) {
    s.graph.addEdge({
      id: `e${addedEdge}`,
      size: 0.1,
      source: sourceNode.id,
      target: targetNode.id
    })
    s.refresh()
  }
}
