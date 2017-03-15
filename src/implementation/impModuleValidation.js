'use scrict'

// checks if the instance is correct

// valid component connections
const deviceArray = ['secure micronet', 'micronet', 'vulnerability',
  'network connection', 'data', 'actor', 'asset', 'device'
]
const networkArray = ['device', 'actor', 'data']
const micronetArray = ['device', 'net', 'vulnerability',
  'secure micronet', 'micronet']
const netArray = ['micronet', 'unidentified node', 'threat']
const undentifiedNodeArray = ['net', 'actor', 'malicious actor']
const dataArray = ['asset', 'device', 'network connection', 'actor']
const actorArray = ['asset', 'network connection', 'device',
  'unidentified node', 'data']
const maliciousActorArray = actorArray.concat('threat')
const secureMicronetArray = micronetArray.concat('constraint')
const assetArray = ['data', 'threat', 'actor', 'device']
const constraintArray = ['secure micronet', 'threat']
const mechanismArray = ['vulnerability']
const threatArray = ['asset', 'malicious actor', 'vulnerability', 'constraint',
  'net']
const vulnerabilityArray = ['threat', 'micronet', 'mechanism', 'device',
  'network connection']

// decleration of arrays
let result = '' // posted on the nodeInfo div
let arrWrong = [] // stores wrong connection of nodes

module.exports = function moduleValidation (cy) {
  componentValidation(cy, 'device', deviceArray)
  componentValidation(cy, 'network connection', networkArray)
  componentValidation(cy, 'micronet', micronetArray)
  componentValidation(cy, 'net', netArray)
  componentValidation(cy, 'unidentified node', undentifiedNodeArray)
  componentValidation(cy, 'data', dataArray)
  componentValidation(cy, 'actor', actorArray)
  componentValidation(cy, 'malicious actor', maliciousActorArray)
  componentValidation(cy, 'secure micronet', secureMicronetArray)
  componentValidation(cy, 'asset', assetArray)
  componentValidation(cy, 'constraint', constraintArray)
  componentValidation(cy, 'mechanism', mechanismArray)
  componentValidation(cy, 'threat', threatArray)
  componentValidation(cy, 'vulnerability', vulnerabilityArray)
}

function componentValidation (cy, component, componentArray) {
  cy.nodes().each((n, node) => {
    // checks if node is the desired component
    if (node.data().info.type === component) {
      // stores the neighboring nodes of the component
      const neighborNodes = node.neighborhood().add(node)
      Object.keys(neighborNodes.data().info.type).map((i) => {
        // every neighbor node is added to the array arrWrong
        arrWrong.push(neighborNodes.data().info.type)
        // if the neighbor is a valid connection it is removed from the array
        if (componentArray.indexOf(neighborNodes.data().info.type) !== -1) {
          arrWrong.pop(neighborNodes.data().info.type)
        }
        result = `${arrWrong}`
        // if the array in empty, the module is correct
        if (result === '') {
          result = 'model instant is valid'
        }
      })
    }
  })
  document.getElementById('info-for-nodes-id').textContent = result
}
