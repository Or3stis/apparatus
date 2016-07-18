'use scrict'

// checks if the instance is correct
// will have a lot of reperative lines
// needs refactoring once the metamodel is finished

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

let result = '' // posted on the nodeInfo div
let arrWrong = [] // stores wrong connection of nodes

// valid component connections
let deviceArray = ['secure micronet', 'micronet', 'vulnerability',
  'network connection', 'data', 'actor', 'asset', 'net'
]
let networkArray = ['device', 'actor', 'data']
let micronetArray = ['device', 'net', 'vulnerability',
  'secure micronet']
let netArray = ['micronet', 'unidentified node', 'threat', 'device']
let undentifiedNodeArray = ['net', 'actor', 'malicious actor']
let dataArray = ['asset', 'device', 'network connection', 'actor']
let actorArray = ['asset', 'network connection', 'device', 'unidentified node',
  'data']
let maliciousActorArray = actorArray.concat('threat')
let secureMicronetArray = micronetArray.concat('constraint')
let assetArray = ['data', 'threat', 'actor', 'device']
let constraintArray = ['secure micronet', 'threat', 'objective']
let objectiveArray = ['mechanism', 'constraint']
let mechanismArray = ['objective', 'vulnerability']
let threatArray = ['asset', 'malicious actor', 'vulnerability', 'constraint',
  'net']
let vulnerabilityArray = ['threat', 'micronet', 'mechanism', 'device',
  'network connection']

function componentValidation (s, component, componentArray) {
  s.graph.nodes().map((n) => {
    // checks if node is the desired component
    if (n.info.type === component) {
      // stores the neighboring nodes of the component
      let neighborNodes = s.graph.neighbors(n.id)

      // to make stuff smaller
      // every neighbor node is added to the array arrWrong
      // if the neighbor is a valid connection it is removed from the array
      // in the end if the array in empty, the module is correct
      // if not, the values in the array will indicate the mistakes
      Object.keys(neighborNodes).map((i) => {
        arrWrong.push(neighborNodes[i].info.type)
        // checks occurrence
        if (componentArray.indexOf(neighborNodes[i].info.type) !== -1) {
          arrWrong.pop(neighborNodes[i].info.type)
        }
        result = `${arrWrong}`
        if (result === '') {
          result = 'module is valid'
        }
      })
    }
  })
  document.getElementById('infoForNodes').innerHTML = result
}
