// applies tranformation rules from design state to implementation state

const save = require('../helpers/save.js')

module.exports = function dgnState2ImpState (cy) {
  cy.nodes().map(node => {
    if (node.data().info.concept === 'event') {
      node.data().label = 'High-level event'
      node.data().info.description = 'High-level event'
      node.data().info.concept = 'High-level event'
    }
    if (node.data().info.concept === 'sensor') {
      node.data().label = 'control sensor'
      node.data().info.description = 'control sensor'
      node.data().info.concept = 'control sensor'
    }
  })
  save(cy)
}
