/**
 * shows the total number of nodes along with their concept type and module
 *
 * @param {Object} cy cytoscape instance
 */
module.exports = function stateOverview (cy) {
  let output = ''

  const totalNodes = cy.elements().nodes().length
  output = `• total nodes: ${totalNodes}\n\n`

  let modelNode = 0

  /** counts the model nodes */
  cy.nodes().map(node => {
    const nodeConcept = node.data().asto.concept
    if (nodeConcept === 'model') {
      modelNode += 1
    }
  })
  output = `${output}• model nodes: ${modelNode}`

  // show output in the graph container
  const containerNode = document.getElementById('container-node-id')
  const containerNodeInfo = document.getElementById('container-node-info-id')
  // appends info to the div
  containerNode.style.display = 'block'
  containerNodeInfo.textContent = output
}
