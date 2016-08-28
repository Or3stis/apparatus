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
const constraintArray = ['secure micronet', 'threat', 'objective']
const objectiveArray = ['mechanism', 'constraint']
const mechanismArray = ['objective', 'vulnerability']
const threatArray = ['asset', 'malicious actor', 'vulnerability', 'constraint',
  'net']
const vulnerabilityArray = ['threat', 'micronet', 'mechanism', 'device',
  'network connection']

// decleration of arrays
let result = '' // posted on the nodeInfo div
let arrWrong = [] // stores wrong connection of nodes

module.exports = function moduleValidation (s) {
  componentValidation(s, 'device', deviceArray)
  componentValidation(s, 'network connection', networkArray)
  componentValidation(s, 'micronet', micronetArray)
  componentValidation(s, 'net', netArray)
  componentValidation(s, 'unidentified node', undentifiedNodeArray)
  componentValidation(s, 'data', dataArray)
  componentValidation(s, 'actor', actorArray)
  componentValidation(s, 'malicious actor', maliciousActorArray)
  componentValidation(s, 'secure micronet', secureMicronetArray)
  componentValidation(s, 'asset', assetArray)
  componentValidation(s, 'constraint', constraintArray)
  componentValidation(s, 'objective', objectiveArray)
  componentValidation(s, 'mechanism', mechanismArray)
  componentValidation(s, 'threat', threatArray)
  componentValidation(s, 'vulnerability', vulnerabilityArray)
}

function componentValidation (s, component, componentArray) {
  s.graph.nodes().map((n) => {
    // checks if node is the desired component
    if (n.info.type === component) {
      // stores the neighboring nodes of the component
      const neighborNodes = s.graph.neighbors(n.id)

      Object.keys(neighborNodes).map((i) => {
        // every neighbor node is added to the array arrWrong
        arrWrong.push(neighborNodes[i].info.type)
        // if the neighbor is a valid connection it is removed from the array
        if (componentArray.indexOf(neighborNodes[i].info.type) !== -1) {
          arrWrong.pop(neighborNodes[i].info.type)
        }
        result = `${arrWrong}`
        // if the array in empty, the module is correct
        if (result === '') {
          result = 'module instant is valid'
        }
      })
    }
  })
  document.getElementById('info-for-nodes').innerHTML = result
}
