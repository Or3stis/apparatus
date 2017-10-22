// applies tranformation rules from design phase to implementation phase

// TODO change the relations as well

const save = require('../helpers/save.js')
const printChatText = require('../helpers/printChatText.js')

module.exports = function dgnState2ImpState (cy) {
  cy.nodes().map(node => {
    if (node.data().info.concept === 'micronet') {
      node.data().info.state = ''
    } else if (node.data().info.concept === 'thing') {
      // const neighbor = node.neighborhood()
      // neighbor.map(type => {
      //   if (type.data().hasOwnProperty('info') === true) {
      //     if (type.data().info.concept === 'net') {
      //       node.data().label = 'undefined node'
      //       node.data().info.concept = 'undefined node'
      //     }
      //   }
      // })
      if (node.data().info.component === 'hardware') {
        node.data().label = 'device'
        node.data().info.concept = 'device'
      } else if (node.data().info.component === 'software') {
        node.data().label = 'application'
        node.data().info.concept = 'application'
      }
    } else if (node.data().info.concept === 'sensor') {
      node.data().label = 'control sensor'
      node.data().info.concept = 'control sensor'
    }
  })
  save(cy)
  printChatText('transformation successful')
}
