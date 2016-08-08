'use scrict'

// is allowed when a connection exists between two nodes
let allowed = Symbol()
let notAllowed = Symbol()
let token = allowed

// valid component connections
const deviceArray = ['micronet', 'network connection', 'data', 'net']
const networkArray = ['device', 'data']
const micronetArray = ['device', 'net', 'vulnerability',
  'secure micronet'
]
const netArray = ['micronet', 'unidentified node', 'threat', 'device']
const undentifiedNodeArray = ['net', 'actor', 'malicious actor']
const dataArray = ['asset', 'device', 'network connection', 'actor']
const actorArray = ['asset', 'network connection', 'device',
  'unidentified node', 'data'
]
const maliciousActorArray = actorArray.concat('threat')
const secureMicronetArray = micronetArray.concat('constraint')
const assetArray = ['data', 'threat', 'actor', 'device']
const constraintArray = ['secure micronet', 'threat', 'objective']
const objectiveArray = ['mechanism', 'constraint']
const mechanismArray = ['objective', 'vulnerability']
const threatArray = ['asset', 'malicious actor', 'vulnerability', 'constraint',
  'net'
]
const vulnerabilityArray = ['threat', 'micronet', 'mechanism', 'device',
  'network connection'
]

// needs refactoring
// repetative code :(
const validEdge = (sourceNode, targetNode) => {
  switch (sourceNode.info.type) {
    case 'device':
      if (deviceArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'network connection':
      if (networkArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'micronet':
      if (micronetArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'net':
      if (netArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'unidentified node':
      if (undentifiedNodeArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'data':
      if (dataArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'actor':
      if (actorArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'malicious actor':
      if (maliciousActorArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'secure micronet':
      if (secureMicronetArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'asset':
      if (assetArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'constraint':
      if (constraintArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'objective':
      if (objectiveArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'mechanism':
      if (mechanismArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'threat':
      if (threatArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    case 'vulnerability':
      if (vulnerabilityArray.indexOf(targetNode.info.type) !== -1) {
        token = notAllowed
      } else {
        document.getElementById('infoForNodes').innerHTML = 'edge not allowed'
        token = allowed
      }
      break
    default:
      console.log('error')
  }
}

// shows info of node in the div 'infoForNodes'
module.exports = function addEdge (s, sourceNode, targetNode, lastEdge) {
  // finds the id of the last edge
  const addedEdge = lastEdge

  // return token for edge validity
  validEdge(sourceNode, targetNode)

  if (token === notAllowed) {
    s.graph.edges().map((e) => {
      // checks if the existing edge is a curved
      if (e.type !== 'curvedArrow') {
        if (sourceNode.id === e.source && targetNode.id === e.target) {
          document.getElementById('infoForNodes').innerHTML = 'edge exists'
          token = allowed
        } else if (sourceNode.id === e.target && targetNode.id === e.source) {
          document.getElementById('infoForNodes').innerHTML = 'edge exists'
          token = allowed
        } else {
          token = notAllowed
        }
      }
    })
  }
  // console.log(e.source, e.target)
  if (token === notAllowed) {
    s.graph.addEdge({
      id: `e${addedEdge}`,
      size: 0.1,
      source: sourceNode.id,
      target: targetNode.id
    })
    s.refresh()
  }
}
