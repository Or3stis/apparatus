'use scrict'

// TODO doesn't work properly
const cytoscape = require('cytoscape')
const { dialog } = require('electron').remote

// loads graphs in js or json format
module.exports = function load (graphStyle) {
  let cy = {}
  dialog.showOpenDialog(
    {
      properties: ['openFile', 'openDirectory'],
      filters: [{ name: 'javascript', extensions: ['json', 'js'] }]
    },
    fileName => {
      let model = require(`${fileName}`)
      let modelElements = model.elements
      cy = cytoscape({
        container: document.getElementById('graph-container'),
        autounselectify: true,
        elements: modelElements,
        style: graphStyle.style
      })
      cy.layout({
        name: 'cose'
      })
      cy.nodes().addClass('label-nodes')
      cy.edges().addClass('label-edges')
    }
  )
}
