'use strict'

// checks if the instance is correct

const dgnStateMetamodel = require('./dgnStateSchema.js')
const printChatText = require('../helpers/printChatText.js')

module.exports = function moduleValidation (cy) {
  // valid component connections
  const sensorArray = dgnStateMetamodel.sensorArray
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

    // if result is not empty print the wrong component
    if (result !== '') {
      result = `• ${component} has wrong connections`
      printChatText(result)
    }
  }

  componentValidation(cy, 'sensor', sensorArray)
  componentValidation(cy, 'model', modelArray)
  componentValidation(cy, 'event', eventArray)

  // if the string is empty, the module is correct
  if (result === '') {
    printChatText('model instance is valid\n👍')
  }
}
