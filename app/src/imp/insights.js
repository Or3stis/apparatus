// displays security insight depending on information found in the model
const list = require('./insightsList')
const bubbleHTML = require('../helpers/bubbleHTML.js')

/**
 * find nodes of interest based on the data of the list
 *
 * @param {Object} node node instance in the graph
 * @param {string} concept node concept in the insight array
 * @param {string} attribute attribute in the graph that will be compared
 * @param {string} attributeValue attribute value in the insight array
 * @param {Array} nodeArray array that stores the insecure nodes
 */
const findNodes = (node, concept, attribute, attributeValue, nodeIDArray) => {
  if (
    node.data().asto.concept === concept &&
    node.data().asto[attribute] === attributeValue
  ) {
    // apply css rules in the graph
    node.removeClass('faded')
    node.addClass('attention')

    // push ID of the insecure nodes in the array
    nodeIDArray.push(node.data().id)
  }
}

/* counts number of empty insights */
let emptyInsightCounter = 0
/**
 * displays the nodes of interest and the insight
 *
 * @param {Array} nodeArray array that stores the insecure nodes
 * @param {string} insight security insight based on the insightsList
 */
const showResults = (nodeIDArray, insight) => {
  // only show the insight if the node array is not empty
  if (nodeIDArray.length !== 0) {
    bubbleHTML(`Nodes: <strong>${nodeIDArray}</strong> <br><br>${insight}`)
  } else {
    emptyInsightCounter += 1
  }
}

/**
 * brings attention the insecure nodes
 *
 * @param {Object} cy cytoscape instance
 */
module.exports = function insights (cy) {
  // fade out all the nodes
  cy.elements().addClass('faded')

  // parses the graph to compare nodes with the insight list
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

  // display the insights on the message area
  Object.keys(list).map(key => {
    showResults(list[key].nodes, list[key].insight)
  })

  if (emptyInsightCounter !== Object.keys(list).length) {
    // button to show the ID of the nodes
    const showIDBtn = `<button id='id-button' class='menu-button' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 120px; height: 25px;'>show nodes ID</button>`

    // render the showID button
    bubbleHTML(showIDBtn)

    // attach event listener to button
    const showIdNodeBtn = document.getElementById('id-button')
    showIdNodeBtn.addEventListener('click', () => {
      cy.nodes().removeClass('label-nodes')
      cy.nodes().removeClass('label-dsc')
      cy.nodes().addClass('label-id')
    })
  } else {
    bubbleHTML('No security insights were found.')
  }

  // empty stored values to prevent repeating entries on other function calls
  Object.keys(list).map(key => {
    list[key].nodes = []
  })
  emptyInsightCounter = 0
}
