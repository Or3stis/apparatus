// identifies insecure patterns in the models
const printMsgTxt = require('../helpers/printMsgTxt.js')

// const patternList = {
//   perception: 'physical security'
// }

module.exports = function insecurePatterns (cy) {
  cy.elements().addClass('faded')

  cy.nodes().map(node => {
    if (
      node.data().asto.concept === 'device' &&
      node.data().asto.layer === 'perception'
    ) {
      node.removeClass('faded')
      node.addClass('attention')
      printMsgTxt('physical security')
    }
  })
}
