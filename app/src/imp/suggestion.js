// displays security suggestion depending on information found in the model
const bubbleHTML = require('../helpers/bubbleHTML.js')

// contains the attribute/connection patterns and the suggestions
const list = {
  s0: {
    concept: 'device',
    attribute: 'layer',
    attributeValue: 'perception',
    suggestion: 'Devices in the perception layer require physical security.',
    nodes: []
  },
  s1: {
    concept: 'device',
    attribute: 'layer',
    attributeValue: 'gateway',
    suggestion:
      'Devices in the gateway layer are usually external facing nodes. Malicious actors can target them with network attacks.',
    nodes: []
  },
  s2: {
    concept: 'device',
    attribute: 'layer',
    attributeValue: 'application',
    suggestion:
      'Devices in the application layer are usually provided by third parties. The security configuration of thrird party devices must be taken into consideration since it affects the security posture of the overall system.',
    nodes: []
  },
  s3: {
    concept: 'device',
    attribute: 'update',
    attributeValue: 'false',
    suggestion: 'Treat devices that cannot be updated as compromised.',
    nodes: []
  },
  s4: {
    concept: 'network connection',
    attribute: 'description',
    attributeValue: 'wireless',
    suggestion:
      'Wireless connections are subject to information disclosure attacks. Use encrypted protocols.',
    nodes: []
  },
  s5: {
    concept: 'application',
    attribute: 'update',
    attributeValue: 'false',
    suggestion: 'Treat applications that cannot be updated as compromised.',
    nodes: []
  }
}

// find nodes of interest based on the data of the list
// @node: node instance in the graph
// @concept: node concept in the suggestion array
// @attribute: attribute in the graph that will be compared
// @attributeVallue: attribute value in the suggestion array
// @nodeArray: array that will store the insecure nodes
const findNodes = (
  node,
  concept,
  attribute,
  attributeValue,
  nodeArray
) => {
  if (
    node.data().asto.concept === concept &&
    node.data().asto[attribute] === attributeValue
  ) {
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
    bubbleHTML(`Nodes: <strong>${nodeArray}</strong> <br><br>${suggestion}`)
  }
}

module.exports = function suggestion (cy) {
  // fade out all the nodes
  cy.elements().addClass('faded')

  // parses the graph to compare nodes with the suggestion list
  cy.nodes().map(node => {
    Object.keys(list).map(key => {
      findNodes(
        node,
        list[key].concept,
        list[key].attribute,
        list[key].attributeValue,
        list[key].nodes
      )
    })
  })

  // display the suggestions on the message area
  Object.keys(list).map(key => {
    showResults(list[key].nodes, list[key].suggestion)
  })

  // button to show the ID of the nodes
  const showIDBtn = `<button id='id-button' class='menu-btn' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 120px; height: 25px;'>show nodes ID</button>`

  // render the showID button
  bubbleHTML(showIDBtn)

  // attach event listener to button
  const showIdNodeBtn = document.getElementById('id-button')
  showIdNodeBtn.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-dsc')
    cy.nodes().addClass('label-id')
  })
}
