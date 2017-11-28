// prints the total number of nodes along with their concept type and module

module.exports = function overview (cy) {
  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `• total nodes: ${totalNodes}\n`

  let modelNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().asto.concept
    if (nodeConcept === 'node') {
      modelNode += 1
    }
  })
  result = `${result}• nodes: ${modelNode}\n`

  // show result in the graph container
  const containerNode = document.getElementById('container-node-id')
  const containerNodeInfo = document.getElementById('container-node-info-id')
  // appends info to the div
  containerNode.style.display = 'block'
  containerNodeInfo.textContent = result
}
