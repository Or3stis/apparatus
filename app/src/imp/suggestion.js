// identifies insecure patterns in the models
const printMsgTxt = require('../helpers/printMsgTxt.js')

// const suggestionList = {
//   s0: {
//     concept: 'device',
//     layer: 'perception',
//     output: 'devices in the physical layer require physical security'
//   }
// }

module.exports = function suggestion (cy) {
  cy.elements().addClass('faded')

  cy.nodes().map(node => {
    if (
      node.data().asto.concept === 'device' &&
      node.data().asto.layer === 'perception'
    ) {
      node.removeClass('faded')
      node.addClass('attention')
      printMsgTxt(
        `${
          node.data().id
        }: devices in the perception layer require physical security.`
      )
    }

    if (
      node.data().asto.concept === 'network connection' &&
      node.data().asto.description === 'wireless'
    ) {
      node.removeClass('faded')
      node.addClass('attention')
      printMsgTxt(
        `${
          node.data().id
        }: wireless connections are subject to information disclosure attacks. Use encrypted protocols.`
      )
    }
  })
}
