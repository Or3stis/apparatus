'use strict'

const cytoscape = require('cytoscape')
const graphStyle = require('../../config/graphStyle.js')

module.exports = function cyOptions (cy, file) {
  const model = require(file)
   // first render uses the dark theme
  graphStyle.setStyle('dark')

  cy.out = cytoscape({
    container: document.getElementById('graph-container'),
    autounselectify: true,
    elements: model.elements, // loads the elements object of the graph
    style: graphStyle.style
  })
  // graph layout
  const layout = cy.out.layout({
    name: 'breadthfirst'
  })
  layout.run()

  // add the files location to the title bar
  const titleBar = document.getElementById('title-bar-id')
  titleBar.innerHTML += ` <i>~/${file}</i>`
}
