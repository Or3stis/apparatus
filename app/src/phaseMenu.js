// initial options menu for each phase

const load = require('./helpers/load.js')
const cyOptions = require('./helpers/cyOptions.js')
const initialize = require('./initialize.js')

const template = '../../../graphs/modelTemplate.js'
const testGraph = '../../../graphs/test.json'

let cy = {}

// loads the empty template
const newGraph = (cy, phase) => {
  cyOptions(cy, template)
  initialize(cy.out, phase)
}
// loads the debugging graph
const debugGraph = (cy, phase) => {
  cyOptions(cy, testGraph)
  initialize(cy.out, phase)
}

// creates the option menu on startup
// the element is removed on selection
module.exports = function phaseMenu (phase) {
  const graph = document.getElementById('graph-container')
  const wrapper = document.createElement('wrapper')
  wrapper.id = 'wrapper-id'
  wrapper.className = 'wrapper'
  wrapper.textContent = 'select'

  const buttonNew = document.createElement('button')
  buttonNew.id = 'new-id'
  buttonNew.className = 'startButtons'
  buttonNew.type = 'button'
  buttonNew.value = 'new'
  buttonNew.textContent = 'new graph'

  const buttonLoad = document.createElement('button')
  buttonLoad.id = 'load-id'
  buttonLoad.className = 'startButtons'
  buttonLoad.type = 'button'
  buttonLoad.value = 'load'
  buttonLoad.textContent = 'load graph'

  const buttonDebug = document.createElement('button')
  buttonDebug.id = 'debug-id'
  buttonDebug.className = 'startButtons'
  buttonDebug.type = 'button'
  buttonDebug.value = 'debug'
  buttonDebug.textContent = 'debug app'

  wrapper.appendChild(buttonNew)
  wrapper.appendChild(buttonLoad)
  wrapper.appendChild(buttonDebug)

  graph.appendChild(wrapper)

  buttonNew.addEventListener('click', () => {
    graph.removeChild(wrapper)
    newGraph(cy, phase)
  })
  buttonLoad.addEventListener('click', () => {
    graph.removeChild(wrapper)
    load(cy, phase)
  })
  buttonDebug.addEventListener('click', () => {
    graph.removeChild(wrapper)
    debugGraph(cy, phase)
  })
}
