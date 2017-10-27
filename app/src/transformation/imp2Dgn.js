// applies tranformation rules from implementation to design phase

const save = require('../helpers/save.js')

module.exports = function imp2Dgn (cy) {
  cy.nodes().map(node => {
    if (node.data().info.concept === 'device') {
      node.data().label = 'thing'
      node.data().info.component = 'hardware'
      node.data().info.concept = 'thing'
      delete node.data().info.layer
      delete node.data().info.type
      delete node.data().info.service
      delete node.data().info.input
      delete node.data().info.output
      delete node.data().info.update
    } else if (node.data().info.concept === 'application') {
      node.data().label = 'thing'
      node.data().info.component = 'software'
      node.data().info.concept = 'thing'
      delete node.data().info.version
      delete node.data().info.update
    } else if (node.data().info.concept === 'unidentified node') {
      delete node.data().info.service
      delete node.data().info.input
      delete node.data().info.output
    } else if (node.data().info.concept === 'information') {
      delete node.data().info.location
    } else if (node.data().info.concept === 'micronet') {
      delete node.data().info.state
    }
  })
  save(cy)
}
