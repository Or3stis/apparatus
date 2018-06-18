'use strict'

// checks if the model is correct

const dgnMetamodel = require('./dgnSchema.js')
const bubbleTxt = require('../helpers/bubbleTxt.js')

module.exports = function moduleValidation (cy) {
  // valid component connections
  const serviceProvArray = dgnMetamodel.serviceProvArray
  const infrastructureProvArray = dgnMetamodel.infrastructureProvArray
  const cescmArray = dgnMetamodel.cescmArray
  const vimArray = dgnMetamodel.vimArray
  const mainDcArray = dgnMetamodel.mainDcArray
  const lightDcArray = dgnMetamodel.lightDcArray
  const vnfArray = dgnMetamodel.vnfArray
  const storageArray = dgnMetamodel.storageArray
  const processArray = dgnMetamodel.processArray
  const assetArray = dgnMetamodel.assetArray
  const constraintArray = dgnMetamodel.constraintArray
  const endUserArray = dgnMetamodel.endUserArray
  const threatArray = dgnMetamodel.threatArray
  const maliciousActorArray = dgnMetamodel.maliciousActorArray

  // declaration of arrays
  let result = '' // posted on the nodeInfo div
  let arrWrong = [] // stores wrong connection of nodes

  function componentValidation (cy, component, componentArray) {
    cy.nodes().map(node => {
      // checks if node is the desired component
      if (node.data().asto.concept === component) {
        // stores the neighboring nodes of the component
        const neighborNodes = node.neighborhood().add(node)
        const neighborObject = neighborNodes.data().asto.concept

        Object.keys(neighborObject).map(() => {
          // every neighbor node is added to the array arrWrong
          arrWrong.push(neighborObject)
          // if the neighbor is a valid connection it is removed from the array
          if (componentArray.includes(neighborObject) === true) {
            arrWrong.pop(neighborObject)
          }
        })
      }
    })

    result = `${arrWrong}`

    // if string not empty, show concepts with wrong connections
    if (result !== '') {
      result = `• ${component} has wrong connections`
      bubbleTxt(result)
    }
  }

  componentValidation(cy, 'service provider', serviceProvArray)
  componentValidation(cy, 'infrastructure provider', infrastructureProvArray)
  componentValidation(cy, 'cescm', cescmArray)
  componentValidation(cy, 'vim', vimArray)
  componentValidation(cy, 'main dc', mainDcArray)
  componentValidation(cy, 'light dc', lightDcArray)
  componentValidation(cy, 'vnf', vnfArray)
  componentValidation(cy, 'storage', storageArray)
  componentValidation(cy, 'process', processArray)
  componentValidation(cy, 'constraint', constraintArray)
  componentValidation(cy, 'asset', assetArray)
  componentValidation(cy, 'end user', endUserArray)
  componentValidation(cy, 'threat', threatArray)
  componentValidation(cy, 'malicious actor', maliciousActorArray)

  // if string is empty, the model is correct
  if (result === '') {
    bubbleTxt('model instance is valid\n👍')
  }
}
