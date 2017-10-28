// expose the attribures of the nodes
const config = require('../../settings/config.js')
const rmElement = require('../helpers/rmElement.js')

let buttonToken = false
module.exports = function expose (cy) {
  // when button is pressed
  const exposeButton = document.getElementById('expose-button')

  if (buttonToken === false) {
    const graph = document.getElementById('window-id')

    cy.nodes().map(node => {
      let nodeInfo = ''
      const nodeData = node.data().info
      Object.keys(nodeData).map(i => {
        // adds the keys of the object to the string
        if (nodeData.hasOwnProperty(i) === true) {
          nodeInfo = `${nodeInfo} • ${i}:`
        }
        // adds the values of the object to the string
        nodeInfo = `${nodeInfo} ${nodeData[i]}\n`
      })

      // create a container for each node
      const container = document.createElement('span')
      container.id = node.data().id
      container.innerHTML = `<div class="container-node" style='display: block; margin:0; opacity: 1; left: ${node.renderedPosition()
        .x}px; top: ${node.renderedPosition()
        .y}px;'><div class="container-node-info" style='margin: 0;'><span>${nodeInfo}</span></div></div>`

      graph.appendChild(container)
    })

    // show active expose with colored button
    exposeButton.setAttribute('class', 'active-button')
    // exposeButton.style.backgroundColor = config.blue
    buttonToken = true
  } else {
    // removes the exposed containers
    cy.nodes().map(node => {
      rmElement('window-id', node.data().id)
    })

    // restores the original button color
    // exposeButton.style.backgroundColor = config.darkBackground
    exposeButton.setAttribute('class', 'button-icon')
    buttonToken = false
  }
}
