'use strict'

// checks if the model is correct

const dgnStateMetamodel = require('./dgnStateSchema.js')
const printChatText = require('../helpers/printChatText.js')

module.exports = function moduleValidation (cy) {
  // valid component connections
  const cescmArray = dgnStateMetamodel.cescmArray
  const modelArray = dgnStateMetamodel.modelArray
  const eventArray = dgnStateMetamodel.eventArray

  let result = '' // posted on the nodeInfo div
  let arrWrong = [] // stores wrong connection of nodes

  function componentValidation (cy, component, componentArray) {
    cy.nodes().map(node => {
      // checks if node is the desired component
      if (node.data().info.concept === component) {
        // stores the neighboring nodes of the component
        const neighborNodes = node.neighborhood().add(node)
        const neighborObject = neighborNodes.data().info.concept

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
      printChatText(result)
    }
  }

  componentValidation(cy, 'cescm', cescmArray)
  componentValidation(cy, 'model', modelArray)
  componentValidation(cy, 'event', eventArray)

  // if string is empty, the model is correct
  if (result === '') {
    printChatText('model instance is valid\n👍')
  }
}
