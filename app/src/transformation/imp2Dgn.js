// applies tranformation rules from implementation to design phase

const save = require('../helpers/save.js')
const printChatText = require('../helpers/printChatText.js')
const printChatHTML = require('../helpers/printChatHTML.js')

const transform = cy => {
  let neighbors = []
  cy.nodes().map(node => {
    if (node.data().asto.concept === 'device') {
      delete node.data().asto.layer
      delete node.data().asto.type
      delete node.data().asto.service
      delete node.data().asto.input
      delete node.data().asto.output
      delete node.data().asto.update
    } else if (node.data().asto.concept === 'application') {
      delete node.data().asto.version
      delete node.data().asto.update
    } else if (node.data().asto.concept === 'unidentified node') {
      delete node.data().asto.service
      delete node.data().asto.input
      delete node.data().asto.output
    } else if (node.data().asto.concept === 'information') {
      delete node.data().asto.location
    } else if (node.data().asto.concept === 'micronet') {
      delete node.data().asto.state
    } else if (node.data().asto.concept === 'network connection') {
      neighbors.push(node.neighborhood().add(node.data()))
      node.remove()
    } else if (node.data().asto.concept === 'vulnerability') {
      node.remove()
    } else if (node.data().asto.concept === 'mechanism') {
      node.remove()
    }
  })
  neighbors.map(node => {
    // remove the edges
    node[1].remove()
    node[3].remove()
    // store the source and target of the devices connected by the network connection
    const source = node[0].data().id
    const target = node[2].data().id
    // create the edges for connection device 2 device
    cy.add({
      group: 'edges',
      data: {
        id: `e${source}${target}`,
        source: `${source}`,
        target: `${target}`,
        label: 'connects'
      }
    })
  })
}

const userInput = `the current model will <strong>brake</strong>\n\ndo you want to continue? <button id='yes-button' class='startButtons' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>yes</button> <button id='no-button' class='startButtons' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>no</button>`

const warning =
  'to access the new design phase model you will need to manually load it'

module.exports = function dgnState2ImpState (cy, nodeCounter) {
  printChatHTML(userInput)
  printChatText(warning)

  const buttonYes = document.getElementById('yes-button')
  buttonYes.addEventListener('click', () => {
    transform(cy)
    save(cy)
    printChatText('transformation successful')
  })
  const buttonNo = document.getElementById('no-button')
  buttonNo.addEventListener('click', () => {
    document.getElementById('chat-area-id').textContent = ''
  })
}
