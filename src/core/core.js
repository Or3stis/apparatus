'use strict'

// core modules, shared between all phases
const nodeSelection = require('./nodeSelection.js')
const coseLayout = require('./coseLayout.js')
const save = require('./save.js')
const load = require('./load.js')

// highlights only the selected node class
const selectionNode = (cy) => {
  const select = document.getElementById('selection-id')
  select.addEventListener('change', e => {
    nodeSelection(cy, e.target.value)
  })
}
  // cose layout
const layout = (cy) => {
  const buttonLayout = document.getElementById('layout-button')
  buttonLayout.addEventListener('click', () => {
    coseLayout(cy)
  })
}
// enable label buttons
const labels = (cy) => {
  const hideLabelsButton = document.getElementById('hide-label')
  hideLabelsButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.edges().removeClass('label-edges')
  })
  const showLabelsButton = document.getElementById('show-label')
  showLabelsButton.addEventListener('click', () => {
    cy.nodes().addClass('label-nodes')
    cy.edges().addClass('label-edges')
  })
  const showLabelNodeButton = document.getElementById('show-label-node')
  showLabelNodeButton.addEventListener('click', () => {
    cy.nodes().addClass('label-nodes')
  })
  const showLabelEdgeButton = document.getElementById('show-label-edge')
  showLabelEdgeButton.addEventListener('click', () => {
    cy.edges().addClass('label-edges')
  })
}
// save graph
const saveGraph = (cy, path) => {
  // save graph
  const buttonSave = document.getElementById('save-button')
  buttonSave.addEventListener('click', () => {
    save(cy, path)
  })
}
// loads a graph
const loadGraph = (cy, graphModel, cytoscape, graphStyle) => {
  const buttonLoad = document.getElementById('load-button')
  buttonLoad.addEventListener('click', () => {
    load(cy, graphModel, cytoscape, graphStyle)
  })
}

module.exports = {
  selectionNode: selectionNode,
  layout: layout,
  labels: labels,
  saveGraph: saveGraph,
  loadGraph: loadGraph
}
