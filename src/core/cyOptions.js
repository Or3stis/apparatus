'use strict'

const cytoscape = require('cytoscape')
const graphStyle = require('../../config/graphStyle.js')

module.exports = function cyOptions (cy, file) {
  let model = require(file)
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
}
