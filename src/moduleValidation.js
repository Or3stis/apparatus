'use scrict'

// checks if the instance is correct
// will have a lot of reperative lines
// needs refactoring once the metamodel is finished

module.exports = function moduleValidation (s) {
  deviceValidation(s)
}

let result = '' // posted on the nodeInfo div
  // valid device connections
let deviceArray = ['secure microcosm', 'microcosm', 'vulnerability',
  'network connection'
]

function deviceValidation (s) {
  let arrCorrect = [] // array with mitigated threats

  for (let n of s.graph.nodes().values()) {
    // checks if node is a device
    if (n.info.type === 'device') {
      // stores the neigborring nodes of the threats
      let neighborNodes = s.graph.neighbors(n.id)

      // to make stuff smaller
      // every neighbor node is added to the array arrCorrect
      // if the neighbor is a valid connection it is removed from the array
      // in the end if the array in empty, the module is correct
      // if not, the values in the array will indicate the mistakes
      for (let i of Object.keys(neighborNodes)) {
        arrCorrect.push(neighborNodes[i].info.type)
        if (deviceArray.indexOf(neighborNodes[i].info.type) !== -1) {
          arrCorrect.pop(neighborNodes[i].info.type)
        }
        result = `${arrCorrect}`
        if (result === '') {
          result = 'module is valid'
        }
      }
    }
  }
  document.getElementById('infoForNodes').innerHTML = result
}
