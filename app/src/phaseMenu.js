// initial options menu for each phase

const load = require('./helpers/load.js')
const cyOptions = require('./helpers/cyOptions.js')
const initialize = require('./initialize.js')
const pcapImport = require('./imp/pcapImport.js')

const template = '../settings/modelTemplate.js'
const testGraph = '../../../sample/smartHome.js'

let cy = {}

/**
 * loads the empty template
 *
 * @param {Object} cy cytoscape instance
 * @param {string} phase engineering analysis phase
 */
const newGraph = (cy, phase) => {
  cyOptions(cy, template)
  initialize(cy.out, phase)
}
/**
 * loads the debugging graph
 *
 * @param {Object} cy cytoscape instance
 * @param {string} phase engineering analysis phase
 */
const debugGraph = (cy, phase) => {
  cyOptions(cy, testGraph)
  initialize(cy.out, phase)
}

/**
 * creates the option menu on startup the element is removed on selection
 *
 * @param {string} phase engineering analysis phase
 */
module.exports = function phaseMenu (phase) {
  const graph = document.getElementById('graph-container')

  // creates a wrapper for the buttons
  const wrapper = document.createElement('menu-wrapper')
  wrapper.id = 'menu-wrapper-id'
  wrapper.className = 'menu-wrapper'

  // creates button for new graph
  const btnNew = document.createElement('button')
  btnNew.id = 'new-id'
  btnNew.className = 'menu-button'
  btnNew.type = 'button'
  btnNew.value = 'new'
  btnNew.textContent = 'new graph'

  // creates button to load existing graph
  const btnLoad = document.createElement('button')
  btnLoad.id = 'load-id'
  btnLoad.className = 'menu-button'
  btnLoad.type = 'button'
  btnLoad.value = 'load'
  btnLoad.textContent = 'load graph'

  // creates button to load the debug graph
  const btnDebug = document.createElement('button')
  btnDebug.id = 'debug-id'
  btnDebug.className = 'menu-button'
  btnDebug.type = 'button'
  btnDebug.value = 'debug'
  btnDebug.textContent = 'debug app'

  wrapper.appendChild(btnNew)
  wrapper.appendChild(btnLoad)
  wrapper.appendChild(btnDebug)

  // loads the pcapImport module during the implementation phase
  if (phase === 'implementation') {
    const btnImport = document.createElement('button')
    btnImport.id = 'import-id'
    btnImport.className = 'menu-button'
    btnImport.type = 'button'
    btnImport.value = 'import'
    btnImport.textContent = 'import pcapng file'

    wrapper.appendChild(btnImport)

    btnImport.addEventListener('click', () => {
      graph.removeChild(wrapper)
      pcapImport(cy, phase)
    })
  }

  // appends the buttons to the graph container
  graph.appendChild(wrapper)

  // removes the wrapper once an option is clicked
  btnNew.addEventListener('click', () => {
    graph.removeChild(wrapper)
    newGraph(cy, phase)
  })
  btnLoad.addEventListener('click', () => {
    graph.removeChild(wrapper)
    load(cy, phase)
  })
  btnDebug.addEventListener('click', () => {
    graph.removeChild(wrapper)
    debugGraph(cy, phase)
  })
}
