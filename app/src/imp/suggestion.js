// displays security suggestion depending on information found in the model
const printMsgHTML = require('../helpers/printMsgHTML.js')

// button to show the ID of the nodes
const showIDBtn = `<button id='id-button' class='menu-btn' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 120px; height: 25px;'>show nodes ID</button>`

// contains the attribute/connection patterns and the suggestions
const list = {
  s0: {
    concept: 'device',
    layer: 'perception',
    suggestion: 'Devices in the perception layer require physical security.'
  },
  s1: {
    concept: 'device',
    update: 'false',
    suggestion: 'Treat devices that cannot be updated as compromised.'
  },
  s2: {
    concept: 'network connection',
    description: 'wireless',
    suggestion:
      'Wireless connections are subject to information disclosure attacks. Use encrypted protocols.'
  },
  s3: {
    concept: 'application',
    update: 'false',
    suggestion: 'Treat applications that cannot be updated as compromised.'
  }
}

// find nodes of interest based on the data of the list
// @node: node instance in the graph
// @concept: node concept in the suggestion array
// @graphAttribute: attribute in the graph that will be compared
// @attribute: attribute in the suggestion array
// @nodeArray: array that will store the insecure nodes
const findNodes = (node, concept, graphAttribute, attribute, nodeArray) => {
  // compare the graph nodes will the suggestions
  if (node.data().asto.concept === concept && graphAttribute === attribute) {
    // apply css rules in the graph
    node.removeClass('faded')
    node.addClass('attention')

    // push ID of the insecure nodes in the array
    nodeArray.push(node.data().id)
  }
}

// displays the nodes of interest and the suggestion
const showResults = (nodeArray, suggestion) => {
  // only show the suggestion if the node array is not empty
  if (nodeArray.length !== 0) {
    printMsgHTML(
      `Nodes: <strong>${nodeArray}</strong> <br><br>${suggestion}`
    )
  }
}

module.exports = function suggestion (cy) {
  // fade out all the nodes
  cy.elements().addClass('faded')

  // arrays to store the nodes of interest of each suggestion
  let s0nodes = []
  let s1nodes = []
  let s2nodes = []
  let s3nodes = []

  cy.nodes().map(node => {
    let nodeData = node.data().asto

    // s0 suggestion
    findNodes(node, list.s0.concept, nodeData.layer, list.s0.layer, s0nodes)
    // s1 suggestion
    findNodes(
      node,
      list.s1.concept,
      nodeData.update,
      list.s1.update,
      s1nodes
    )
    // s2 suggestion
    findNodes(node, list.s2.concept, nodeData.description, list.s2.description, s2nodes)
    // s3 suggestion
    findNodes(node, list.s3.concept, nodeData.update, list.s3.update, s3nodes)
  })

  // display the suggestions on the message area
  showResults(s0nodes, list.s0.suggestion) // s0 suggestion
  showResults(s1nodes, list.s1.suggestion) // s1 suggestion
  showResults(s2nodes, list.s2.suggestion) // s2 suggestion
  showResults(s3nodes, list.s3.suggestion) // s3 suggestion

  // render the show ID button
  printMsgHTML(showIDBtn)
  const showIdNodeBtn = document.getElementById('id-button')
  showIdNodeBtn.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-dsc')
    cy.nodes().addClass('label-id')
  })
}
