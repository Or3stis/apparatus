// checks if an implementation phase model is complaint with the metamodel

const impMetamodel = require('./impSchema.js')
const printMessageText = require('../helpers/printMessageText.js')

module.exports = function moduleValidation (cy) {
  // valid component connections
  const deviceArray = impMetamodel.deviceArray
  const networkArray = impMetamodel.networkArray
  const applicationArray = impMetamodel.applicationArray
  const micronetArray = impMetamodel.micronetArray
  const netArray = impMetamodel.netArray
  const undentifiedNodeArray = impMetamodel.undentifiedNodeArray
  const informationArray = impMetamodel.informationArray
  const actorArray = impMetamodel.actorArray
  const maliciousActorArray = impMetamodel.maliciousActorArray
  const assetArray = impMetamodel.assetArray
  const constraintArray = impMetamodel.constraintArray
  const mechanismArray = impMetamodel.mechanismArray
  const threatArray = impMetamodel.threatArray
  const vulnerabilityArray = impMetamodel.vulnerabilityArray

  let result = '' // posted on the nodeInfo div
  let arrWrong = [] // stores wrong connection of nodes

  function componentValidation (cy, component, componentArray) {
    cy.nodes().map(node => {
      // checks if node is the desired component
      if (node.data().asto.concept === component) {
        // stores the neighboring nodes of the component
        const neighborNodes = node.neighborhood().add(node)
        const neigborObject = neighborNodes.data().asto.concept

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

    // if string not empty, show concepts with wrong connections
    if (result !== '') {
      result = `• ${component} has wrong connections`
      printMessageText(result)
    }
  }

  componentValidation(cy, 'device', deviceArray)
  componentValidation(cy, 'network connection', networkArray)
  componentValidation(cy, 'application', applicationArray)
  componentValidation(cy, 'micronet', micronetArray)
  componentValidation(cy, 'net', netArray)
  componentValidation(cy, 'unidentified node', undentifiedNodeArray)
  componentValidation(cy, 'information', informationArray)
  componentValidation(cy, 'actor', actorArray)
  componentValidation(cy, 'malicious actor', maliciousActorArray)
  componentValidation(cy, 'asset', assetArray)
  componentValidation(cy, 'constraint', constraintArray)
  componentValidation(cy, 'mechanism', mechanismArray)
  componentValidation(cy, 'threat', threatArray)
  componentValidation(cy, 'vulnerability', vulnerabilityArray)

  // if string is empty, the model is correct
  if (result === '') {
    printMessageText('model instance is valid\n👍')
  }
}
