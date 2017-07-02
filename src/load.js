'use scrict'

const { dialog } = require('electron').remote

// loads graphs in js or json format
module.exports = function load (cy, system, cytoscape, graphStyle) {
  dialog.showOpenDialog(
    {
      properties: ['openFile', 'openDirectory'],
      filters: [{ name: 'javascript', extensions: ['json', 'js'] }]
    },
    fileName => {
      system = require(`${fileName}`)
      cy = cytoscape({
        container: document.getElementById('graph-container'),
        autounselectify: true,
        elements: system.elements,
        style: graphStyle.style
      })
      cy.layout({
        name: 'cose'
      })
    }
  )
}
