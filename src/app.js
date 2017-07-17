'use strict'

const load = require('./src/core/load.js')
const initialize = require('./src/initialize.js')
const cyOptions = require('./src/core/cyOptions.js')

const template = '../../graphs/modelTemplate.js'
const testGraph = '../../graphs/implementation/smartHome.js'

let cy = {}

// loads the empty template
const newGraph = () => {
  cyOptions(cy, template)
  initialize(cy.out)
}
// loads the debugging graph
const debugGraph = () => {
  cyOptions(cy, testGraph)
  initialize(cy.out)
}

// TODO move it to different modules
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
  buttonDebug.textContent = 'bebug app'

  wrapper.appendChild(buttonNew)
  wrapper.appendChild(buttonLoad)
  wrapper.appendChild(buttonDebug)

  graph.appendChild(wrapper)

  buttonNew.addEventListener('click', () => {
    newGraph()
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
