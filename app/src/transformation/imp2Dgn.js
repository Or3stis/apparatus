// applies tranformation rules from implementation to design phase

// const save = require('../helpers/save.js')
const printChatText = require('../helpers/printChatText.js')

module.exports = function imp2Dgn (cy) {
  cy.nodes().map(node => {
    if (node.data().asto.concept === 'device') {
      delete node.data().asto.layer
      delete node.data().asto.type
      delete node.data().asto.service
      delete node.data().asto.input
      delete node.data().asto.output
      delete node.data().asto.update
    } else if (node.data().asto.concept === 'application') {
      delete node.data().asto.version
      delete node.data().asto.update
    } else if (node.data().asto.concept === 'unidentified node') {
      delete node.data().asto.service
      delete node.data().asto.input
      delete node.data().asto.output
    } else if (node.data().asto.concept === 'information') {
      delete node.data().asto.location
    } else if (node.data().asto.concept === 'micronet') {
      delete node.data().asto.state
    }
  })

  // save(cy)
  printChatText('transformation successful')
}
