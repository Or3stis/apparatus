// prints the total number of nodes along with their concept type and module

const printChatText = require('../helpers/printChatText.js')

module.exports = function overview (cy) {
  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `• total nodes: ${totalNodes}\n`

  let modelNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'model') {
      modelNode += 1
    }
  })
  result = `${result}• model nodes: ${modelNode}\n`

  printChatText(result)
}
