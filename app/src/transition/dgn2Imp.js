// applies transition rules from design to implementation phase

const save = require('../helpers/save.js')
const bubbleTxt = require('../helpers/bubbleTxt.js')
const bubbleHTML = require('../helpers/bubbleHTML.js')

/**
 * applies transition rules from design to implementation phase
 *
 * @param {Object} cy cytoscape instance
 * @param {number} nodeCounter id counter of nodes
 */
const transition = (cy, nodeCounter) => {
  // make the changes in the node components
  cy.nodes().map(node => {
    if (node.data().asto.concept === 'micronet') {
      node.data().asto.state = ''
    } else if (node.data().asto.concept === 'device') {
      node.data().asto.layer = ''
      node.data().asto.type = ''
      node.data().asto.service = ''
      node.data().asto.input = ''
      node.data().asto.output = ''
      node.data().asto.update = ''
    } else if (node.data().asto.concept === 'application') {
      node.data().asto.version = ''
      node.data().asto.input = ''
      node.data().asto.output = ''
      node.data().asto.update = ''
    } else if (node.data().asto.concept === 'information') {
      node.data().asto.location = ''
    }
  })
  /** add network connections between devices */
  cy.edges().map(edge => {
    if (edge.data().label === 'connects') {
      const source = edge.data().source
      const target = edge.data().target

      nodeCounter += 1 // used for the id of the node
      // add the network connection node
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: 'network connection',
          asto: {
            description: '',
            listOfProtocols: '',
            concept: 'network connection'
          }
        }
      })

      // change the properties of the existing connection to connect the
      // network connection the first device
      edge.data().target = source
      edge.data().source = `n${nodeCounter}`
      edge.data().id = `en${nodeCounter}${source}`

      // create an edge to connect the network connection to the other device
      cy.add({
        group: 'edges',
        data: {
          id: `en${nodeCounter}${target}`,
          source: `n${nodeCounter}`,
          target: `${target}`,
          label: 'connects'
        }
      })
    }
  })
}

const userInput = `the current model will <strong>not work</strong>\n\ndo you want to continue? <button id='yes-button' class='menu-btn' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>yes</button> <button id='no-button' class='menu-btn' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>no</button>`

const warning =
  'to access the new implementation phase model you will need to manually load it'

/**
 * uses the transition rules and saves the graph
 *
 * @param {Object} cy cytoscape instance
 * @param {number} nodeCounter id counter of nodes
 */
module.exports = function dgnState2ImpState (cy, nodeCounter) {
  bubbleHTML(userInput)

  // create a `yes` button that will perform the transition
  const buttonYes = document.getElementById('yes-button')
  buttonYes.addEventListener('click', () => {
    transition(cy, nodeCounter)
    save(cy)
    bubbleTxt('model transition successful')
    bubbleTxt(warning)
  })
  // create a `no` button that will clear the message bubble
  const buttonNo = document.getElementById('no-button')
  buttonNo.addEventListener('click', () => {
    document.getElementById('message-area-id').removeChild(buttonNo.parentNode)
  })
}
