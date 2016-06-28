'use scrict'

// checks if the instance is correct
module.exports = function moduleValidation (s) {
  deviceValidation(s)
}

function deviceValidation (s) {
  let arrNodes = [] // array with all threats
  let arrCorrect = [] // array with mitigated threats
  let result = '' // posted on the nodeInfo div

  for (let n of s.graph.nodes().values()) {
    // checks if node is a device
    if (n.info.type === 'device') {
      // console.log(n.info.type)
      // all device create an array that will be used for checking
      arrNodes.push(n.id)

      // stores the neigborring nodes of the threats
      const neighborNodes = s.graph.neighbors(n.id)

      // to make stuff smaller
      // every neighbor node is added to the array arrCorrect
      // if the neighbor is a valid connection it is removed from the array
      // in the end if the array in empty, the module is correct
      // if not, the values in the array will indicate the mistakes
      for (let i of Object.keys(neighborNodes)) {
        arrCorrect.push(neighborNodes[i].info.type)
        if (neighborNodes[i].info.type === 'network connection') {
          arrCorrect.pop(neighborNodes[i].info.type)
        }
        if (neighborNodes[i].info.type === 'microcosm') {
          arrCorrect.pop(neighborNodes[i].info.type)
        }
        if (neighborNodes[i].info.type === 'secure microcosm') {
          arrCorrect.pop(neighborNodes[i].info.type)
        }
        result = `${arrCorrect}`
      }
    }
  }

  // result will be displayed at infoForNodes div
  // result = `${result} > Threats total: ${arrNodes.length} <br/>`
  // result = `${result} > Mitigated total: ${arrCorrect.length} <br/>`
  document.getElementById('infoForNodes').innerHTML = result
}
