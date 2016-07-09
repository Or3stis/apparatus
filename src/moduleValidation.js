'use scrict'

// checks if the instance is correct
// will have a lot of reperative lines
// needs refactoring once the metamodel is finished

module.exports = function moduleValidation (s) {
  componentValidation(s, 'device', deviceArray)
  componentValidation(s, 'network connection', networkArray)
  componentValidation(s, 'microcosm', microcosmArray)
  componentValidation(s, 'unkown world', unkownWorldArray)
  componentValidation(s, 'unkown node', unkownNodeArray)
  componentValidation(s, 'data', dataArray)
  componentValidation(s, 'actor', actorArray)
  componentValidation(s, 'malicious actor', maliciousActorArray)
  componentValidation(s, 'secure microcosm', secureMicrcosmArray)
  componentValidation(s, 'asset', assetArray)
  componentValidation(s, 'constraint', constraintArray)
  componentValidation(s, 'property', propertyArray)
  componentValidation(s, 'mechanism', mechanismArray)
  componentValidation(s, 'threat', threatArray)
  componentValidation(s, 'vulnerability', vulnerabilityArray)
}

let result = '' // posted on the nodeInfo div
let arrWrong = [] // stores wrong connection of nodes

// valid component connections
let deviceArray = ['secure microcosm', 'microcosm', 'vulnerability',
  'network connection', 'data', 'actor', 'asset'
]
let networkArray = ['device', 'actor', 'data']
let microcosmArray = ['device', 'unkown world', 'vulnerability',
  'secure microcosm']
let unkownWorldArray = ['microcosm', 'unkown node', 'threat']
let unkownNodeArray = ['unkown world', 'actor', 'malicious actor']
let dataArray = ['asset', 'device', 'network connection', 'actor']
let actorArray = ['asset', 'network connection', 'device', 'unkown node',
  'data']
let maliciousActorArray = actorArray.concat('threat')
let secureMicrcosmArray = microcosmArray.concat('constraint')
let assetArray = ['data', 'threat', 'actor', 'device']
let constraintArray = ['secure microcosm', 'threat', 'property', 'mechanism']
let propertyArray = ['constraint']
let mechanismArray = ['constraint', 'vulnerability']
let threatArray = ['asset', 'malicious actor', 'vulnerability', 'constraint',
  'unkown world']
let vulnerabilityArray = ['threat', 'microcosm', 'mechanism', 'device']

function componentValidation (s, component, componentArray) {
  for (let n of s.graph.nodes().values()) {
    // checks if node is the desired component
    if (n.info.type === component) {
      // stores the neighborring nodes of the component
      let neighborNodes = s.graph.neighbors(n.id)

      // to make stuff smaller
      // every neighbor node is added to the array arrWrong
      // if the neighbor is a valid connection it is removed from the array
      // in the end if the array in empty, the module is correct
      // if not, the values in the array will indicate the mistakes
      for (let i of Object.keys(neighborNodes)) {
        arrWrong.push(neighborNodes[i].info.type)
        if (componentArray.indexOf(neighborNodes[i].info.type) !== -1) {
          arrWrong.pop(neighborNodes[i].info.type)
        }
        result = `${arrWrong}`
        if (result === '') {
          result = 'module is valid'
        }
      }
    }
  }
  // if (result === '') {
  //   result = 'module is valid'
  // }
  document.getElementById('infoForNodes').innerHTML = result
}
