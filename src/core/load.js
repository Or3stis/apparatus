'use scrict'

// not used

// TODO doesn't work properly
const cytoscape = require('cytoscape')
const { dialog } = require('electron').remote
const printChat = require('./printChat')

// loads graphs in js or json format
module.exports = function load (graphStyle) {
  printChat('load function is temporarily disabled')
  let cy = {}
  dialog.showOpenDialog(
    {
      properties: ['openFile', 'openDirectory'],
      filters: [{ name: 'javascript', extensions: ['json', 'js'] }]
    },
    fileName => {
      let model = require(`${fileName}`)
      let modelElements = model.elements
      console.log(modelElements)
      cy = cytoscape({
        container: document.getElementById('graph-container'),
        autounselectify: true,
        elements: modelElements,
        style: graphStyle.style
      })
      const layout = cy.layout({
        name: 'cose'
      })
      layout.run()
      cy.nodes().removeClass('faded')
      cy.nodes().addClass('label-nodes')
      cy.edges().addClass('label-edges')
    }
  )
}
