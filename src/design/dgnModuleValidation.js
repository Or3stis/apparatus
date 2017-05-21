'use scrict'

const dgnMetamodel = require('./dgnSchema.js')
const printChat = require('../printChat.js')
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
  printChat(result)
}

function componentValidation (cy, component, componentArray) {
  cy.nodes().map((node) => {
    // checks if node is the desired component
    if (node.data().info.concept === component) {
      // stores the neighboring nodes of the component
      const neighborNodes = node.neighborhood().add(node)
      const neigborObject = neighborNodes.data().info.concept
      Object.keys(neigborObject).map(() => {
        // every neighbor node is added to the array arrWrong
        arrWrong.push(neigborObject)
        // if the neighbor is a valid connection it is removed from the array
        if (componentArray.includes(neigborObject) === true) {
          arrWrong.pop(neigborObject)
        }
      })
    }
  })
  result = `${arrWrong}`
  // if the array in empty, the module is correct
  if (result === []) {
    result = 'model instance is valid 👍'
  } else {
    result = 'instance is wrong'
  }
}
