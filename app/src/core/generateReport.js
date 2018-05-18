const bubbleTxt = require('../helpers/bubbleTxt.js')
const { dialog } = require('electron').remote

let threatsArray = []
let constraintsArray = []
/**
 * generate security report
 *
 * @param {Object} cy cytoscape instance
 */
module.exports = function generateReport (cy) {
  cy.nodes().map(node => {
    if (node.data().asto.concept === 'threat') {
      threatsArray.push(node)
    }
    if (node.data().asto.concept === 'constraint') {
      constraintsArray.push(node)
    }
  })

  dialog.showSaveDialog(
    {
      filters: [
        {
          name: 'markdown',
          extensions: ['md']
        }
      ]
    },
    fileToSave => {
      bubbleTxt('security report generated\n👍')
    }
  )
}
