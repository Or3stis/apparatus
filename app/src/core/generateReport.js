const { dialog } = require('electron').remote
const fs = require('fs')
const bubbleTxt = require('../helpers/bubbleTxt.js')

let threatsArray = []
let constraintsArray = []
let mechanismsArray = []
let vulnerabilityArray = []
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

  const reportTittle = `# Security Report\n\n`
  const numberOfThreats = `Number of threats: ${threatsArray.length}\n`
  const numberOfTConstraints = `Number of constraints: ${
    constraintsArray.length
  }\n`
  const numberOfMechanisms = `Number of threats: ${mechanismsArray.length}\n`
  const numberOfVulnerabilities = `Number of threats: ${vulnerabilityArray.length}\n`

  const dataToWrite = reportTittle
    .concat(numberOfThreats)
    .concat(numberOfTConstraints)
    .concat(numberOfMechanisms)
    .concat(numberOfVulnerabilities)

  let dialogOptions = []
  process.platform === 'darwin'
    ? (dialogOptions = ['openFile', 'openDirectory'])
    : (dialogOptions = ['openFile'])
  dialog.showSaveDialog(
    {
      properties: [...dialogOptions],
      filters: [{ name: 'markdown', extensions: ['md'] }]
    },
    filename => {
      fs.writeFile(`${filename}`, dataToWrite, err => {
        if (err) throw err
        bubbleTxt('security report generated\n👍')
      })
    }
  )
}
