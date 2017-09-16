'use strict'

// initial options menu for each phase

const load = require('./helpers/load.js')
const cyOptions = require('./helpers/cyOptions.js')
const initialize = require('./initialize.js')
const pcapImport = require('./implementation/pcapImport.js')

const template = '../../../graphs/modelTemplate.js'
const testGraph = '../../../graphs/implementation/smartHome.js'

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

  // loads the pcapImport module during the implementation phase
  if (phase === 'implementation') {
    const buttonImport = document.createElement('button')
    buttonImport.id = 'import-id'
    buttonImport.className = 'startButtons'
    buttonImport.type = 'button'
    buttonImport.value = 'import'
    buttonImport.innerHTML =
      'import .pcapng file <small style="color: #d19a66;">beta</small>'
    // buttonImport.textContent = 'import pcang file'

    wrapper.appendChild(buttonImport)

    buttonImport.addEventListener('click', () => {
      graph.removeChild(wrapper)
      pcapImport(cy, phase)
    })
  }

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
