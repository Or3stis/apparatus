/**
 * changes the labels on the elements of the graph
 *
 * @param {Object} cy cytoscape instance
 * @param {string} selection user selection
 */
module.exports = function labels (cy, selection) {
  switch (selection) {
    case 'hide all labels':
      cy.nodes().removeClass('label-nodes')
      cy.nodes().removeClass('label-id')
      cy.nodes().removeClass('label-dsc')
      cy.edges().removeClass('label-edges')
      break
    case 'show edge labels':
      cy.edges().addClass('label-edges')
      break
    case 'show node concepts':
      cy.nodes().removeClass('label-id')
      cy.nodes().removeClass('label-dsc')
      cy.nodes().addClass('label-nodes')
      break
    case 'show node IDs':
      cy.nodes().removeClass('label-nodes')
      cy.nodes().removeClass('label-dsc')
      cy.nodes().addClass('label-id')
      break
    case 'show node descriptions':
      cy.nodes().removeClass('label-nodes')
      cy.nodes().removeClass('label-id')
      cy.nodes().addClass('label-dsc')
      break
    case '':
      break
    default:
      console.error('error in labels.js')
  }
}
