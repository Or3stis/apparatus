'use strict'

const load = require('./src/helpers/load.js')
const cyOptions = require('./src/helpers/cyOptions.js')
const initialize = require('./src/initialize.js')
const pcapImport = require('./src/implementation/pcapImport.js')

const template = '../../graphs/modelTemplate.js'
const testGraph = '../../graphs/implementation/smartHome.js'

let cy = {}

// loads the empty template
const newGraph = (cy) => {
  cyOptions(cy, template)
  initialize(cy.out)
}
// loads the debugging graph
const debugGraph = (cy) => {
  cyOptions(cy, testGraph)
  initialize(cy.out)
}

// creates the option menu on startup
// the element is removed on selection
const start = () => {
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
  const pathLocation = window.location.pathname.split('/').pop()
  if (pathLocation === 'implementation.html') {
    const buttonImport = document.createElement('button')
    buttonImport.id = 'import-id'
    buttonImport.className = 'startButtons'
    buttonImport.type = 'button'
    buttonImport.value = 'import'
    buttonImport.innerHTML = 'import .pcapng file <small style="color: #d19a66;">beta</small>'
    // buttonImport.textContent = 'import pcang file'

    wrapper.appendChild(buttonImport)

    buttonImport.addEventListener('click', () => {
      pcapImport(cy)
      graph.removeChild(wrapper)
    })
  }

  graph.appendChild(wrapper)

  buttonNew.addEventListener('click', () => {
    newGraph(cy)
    graph.removeChild(wrapper)
  })
  buttonLoad.addEventListener('click', () => {
    load(cy)
    graph.removeChild(wrapper)
  })
  buttonDebug.addEventListener('click', () => {
    debugGraph(cy)
    graph.removeChild(wrapper)
  })
}

start()

/*
The default behavior of the app (asking to load graphs) can be annoying
when developing new features. To prevent that, uncomment the code below and
comment everything above it. It loads a hard coded graph every time you reload
the app.
*/

// uncomment the code below for debugging

// const testGraph = '../../graphs/implementation/smartHome.js'
// const initialize = require('./src/initialize.js')
// const cyOptions = require('./src/core/cyOptions.js')
//
// let cy = {}
// cyOptions(cy, testGraph) // uncomment for debugging
// initialize(cy.out) // uncomment for debugging
