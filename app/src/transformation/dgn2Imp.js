// applies tranformation rules from design phase to implementation phase

// TODO change the relations as well

const save = require('../helpers/save.js')
const printChatText = require('../helpers/printChatText.js')

module.exports = function dgnState2ImpState (cy) {
  cy.nodes().map(node => {
    if (node.data().info.concept === 'micronet') {
      node.data().info.state = ''
    } else if (node.data().info.concept === 'unidentified node') {
      node.data().label = 'unidentified node'
      node.data().info.service = ''
      node.data().info.input = ''
      node.data().info.output = ''
      node.data().info.concept = 'unidentified node'
    } else if (node.data().info.concept === 'thing') {
      if (node.data().info.component === 'hardware') {
        node.data().label = 'device'
        node.data().info.layer = ''
        node.data().info.type = ''
        node.data().info.service = ''
        node.data().info.input = ''
        node.data().info.output = ''
        node.data().info.update = ''
        node.data().info.concept = 'device'
      } else if (node.data().info.component === 'software') {
        node.data().label = 'application'
        node.data().info.version = ''
        node.data().info.update = ''
        node.data().info.concept = 'application'
      }
    } else if (node.data().info.concept === 'information') {
      node.data().info.location = ''
    }
  })
  save(cy)
  printChatText('transformation successful')
}
