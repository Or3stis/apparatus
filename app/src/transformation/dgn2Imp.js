// applies tranformation rules from design phase to implementation phase

// TODO change the relations as well

// const save = require('../helpers/save.js')
const printChatText = require('../helpers/printChatText.js')

module.exports = function dgnState2ImpState (cy) {
  cy.nodes().map(node => {
    if (node.data().asto.concept === 'micronet') {
      node.data().asto.state = ''
    } else if (node.data().asto.concept === 'unidentified node') {
      node.data().label = 'unidentified node'
      node.data().asto.service = ''
      node.data().asto.input = ''
      node.data().asto.output = ''
      node.data().asto.concept = 'unidentified node'
    } else if (node.data().asto.concept === 'thing') {
      // adds a network connection concept between hardware things
      if (node.data().asto.component === 'hardware') {
        const neighbor = node.neighborhood()
        neighbor.map(type => {
          if (type.data().hasOwnProperty('asto') === true) {
            if (
              type.data().asto.concept === 'thing' &&
              type.data().asto.component === 'hardware'
            ) {
              console.log(type.data().asto.description)
            }
          }
        })
        node.data().label = 'device'
        node.data().asto.layer = ''
        node.data().asto.type = ''
        node.data().asto.service = ''
        node.data().asto.input = ''
        node.data().asto.output = ''
        node.data().asto.update = ''
        node.data().asto.concept = 'device'
        delete node.data().asto.component
      } else if (node.data().asto.component === 'software') {
        node.data().label = 'application'
        node.data().asto.version = ''
        node.data().asto.update = ''
        node.data().asto.concept = 'application'
        delete node.data().asto.component
      }
    } else if (node.data().asto.concept === 'information') {
      node.data().asto.location = ''
    }
  })
  // save(cy)
  printChatText('transformation successful')
}
