'use scrict'

const dgnMetamodel = require('./dgnSchema.js')
// checks if the instance is correct

// valid component connections
const thingArray = dgnMetamodel.thingArray
const micronetArray = dgnMetamodel.micronetArray
const netArray = dgnMetamodel.netArray
const dataArray = dgnMetamodel.dataArray
const actorArray = dgnMetamodel.actorArray
const assetArray = dgnMetamodel.assetArray
const constraintArray = dgnMetamodel.constraintArray
const threatArray = dgnMetamodel.threatArray

// decleration of arrays
let result = '' // posted on the nodeInfo div
let arrWrong = [] // stores wrong connection of nodes

module.exports = function moduleValidation (cy) {
  componentValidation(cy, 'thing', thingArray)
  componentValidation(cy, 'micronet', micronetArray)
  componentValidation(cy, 'net', netArray)
  componentValidation(cy, 'data', dataArray)
  componentValidation(cy, 'actor', actorArray)
  componentValidation(cy, 'asset', assetArray)
  componentValidation(cy, 'constraint', constraintArray)
  componentValidation(cy, 'threat', threatArray)
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
          result = 'model instance is valid 👍'
        }
      })
    }
  })
  document.getElementById('info-for-nodes-id').textContent = result
}
