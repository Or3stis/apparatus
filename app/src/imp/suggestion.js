// displays security suggestion depending on information found in the model
const printMsgHTML = require('../helpers/printMsgHTML.js')

// contains the attribute/connection patterns and the suggestions
const list = {
  s0: {
    concept: 'device',
    layer: 'perception',
    suggestion: 'Devices in the perception layer require physical security.'
  },
  s1: {
    concept: 'network connection',
    description: 'wireless',
    suggestion:
      'Wireless connections are subject to information disclosure attacks. Use encrypted protocols.'
  },
  s2: {
    concept: 'device',
    update: 'false',
    suggestion: 'Treat devices that cannot be updated as compromised.'
  },
  s3: {
    concept: 'application',
    update: 'false',
    suggestion: 'Treat applications that cannot be updated as compromised.'
  }
}

// compares the suggestion data with the ones on the graph
// @node: node instance in the graph
// @concept: node concept in the suggestion array
// @graphAttribute: attribute in the graph that will be compared
// @attribute: attribute in the suggestion array
// @nodeArray: array that will store the insecure nodes
const compare = (node, concept, graphAttribute, attribute, nodeArray) => {
  // compare the graph nodes will the suggestions
  if (node.data().asto.concept === concept && graphAttribute === attribute) {
    // apply css rules in the graph
    node.removeClass('faded')
    node.addClass('attention')
    node.addClass('label-id')

    // push ID of the insecure nodes in the array
    nodeArray.push(node.data().id)
  }
}

// displays the insecure nodes and the suggestion
const showResults = (nodeArray, suggestion) => {
  // only show the suggestion if the node array is not empty
  if (nodeArray.length !== 0) {
    printMsgHTML(
      `Nodes ID: <strong>${nodeArray}</strong> <br><br>${suggestion}`
    )
  }
}

module.exports = function suggestion (cy) {
  // fade out all the nodes
  cy.elements().addClass('faded')

  // arrays to store the insecure node of each suggestion
  let s0nodes = []
  let s1nodes = []
  let s2nodes = []
  let s3nodes = []

  cy.nodes().map(node => {
    let nodeData = node.data().asto

    // s0 suggestion
    compare(node, list.s0.concept, nodeData.layer, list.s0.layer, s0nodes)
    // s1 suggestion
    compare(
      node,
      list.s1.concept,
      nodeData.description,
      list.s1.description,
      s1nodes
    )
    // s2 suggestion
    compare(node, list.s2.concept, nodeData.update, list.s2.update, s2nodes)
    // s3 suggestion
    compare(node, list.s3.concept, nodeData.update, list.s3.update, s3nodes)
  })

  // display the suggestions on the message area
  showResults(s0nodes, list.s0.suggestion) // s0 suggestion
  showResults(s1nodes, list.s1.suggestion) // s1 suggestion
  showResults(s2nodes, list.s2.suggestion) // s2 suggestion
  showResults(s3nodes, list.s3.suggestion) // s3 suggestion
}
