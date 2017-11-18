// applies tranformation rules from design phase to implementation phase

const save = require('../helpers/save.js')
const printChatText = require('../helpers/printChatText.js')
const printChatHTML = require('../helpers/printChatHTML.js')

const transform = (cy, nodeCounter) => {
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
    } else if (node.data().asto.concept === 'unidentified node') {
      node.data().asto.service = ''
      node.data().asto.input = ''
      node.data().asto.output = ''
    }
  })
  // add network connections between devices
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
      // edge.data().id = `en${nodeCounter}${source}`

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
  save(cy)
  printChatText('transformation successful')
}

const userInput = `the current model will <strong>brake</strong>\n\ndo you want to continue? <button id='yes-button' class='startButtons' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>yes</button> <button id='no-button' class='startButtons' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>no</button>`

const warning = 'to access the new implementation phase model you will need to manually load it'

module.exports = function dgnState2ImpState (cy, nodeCounter) {
  printChatHTML(userInput)
  printChatText(warning)

  const buttonYes = document.getElementById('yes-button')
  buttonYes.addEventListener('click', () => {
    transform(cy, nodeCounter)
  })
  const buttonNo = document.getElementById('no-button')
  buttonNo.addEventListener('click', () => {
    document.getElementById('chat-area-id').textContent = ''
  })
}
