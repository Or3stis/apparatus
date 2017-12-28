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
        }: devices in the physical layer require physical security`
      )
    }
  })
}
