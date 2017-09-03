// creates the home page menu, used to access the phases

'use strict'

const designUI = require('./phasesUI/designUI.js')
const designStateUI = require('./phasesUI/designStateUI.js')
const implementationUI = require('./phasesUI/implementationUI.js')
const implementationStateUI = require('./phasesUI/implementationStateUI.js')

module.exports = function homeMenu () {
  // get the graph container
  const graph = document.getElementById('graph-container')

  // creater wrapper for the phase buttons
  const wrapper = document.createElement('wrapper')
  wrapper.id = 'wrapper-id'
  wrapper.className = 'wrapper'
  wrapper.textContent = 'select phase'

  // create the design phase button
  const buttonDgn = document.createElement('button')
  buttonDgn.id = 'dgn-id'
  buttonDgn.className = 'startButtons'
  buttonDgn.type = 'button'
  buttonDgn.textContent = 'design phase'

  // create the design state phase button
  const buttonDgnState = document.createElement('button')
  buttonDgnState.id = 'dgn-state-id'
  buttonDgnState.className = 'startButtons'
  buttonDgnState.type = 'button'
  buttonDgnState.textContent = 'design state phase'

  // create the implementation phase button
  const buttonImp = document.createElement('button')
  buttonImp.id = 'imp-id'
  buttonImp.className = 'startButtons'
  buttonImp.type = 'button'
  buttonImp.textContent = 'implementation phase'

  // create the implementation state button
  const buttonImpState = document.createElement('button')
  buttonImpState.id = 'imp-state-id'
  buttonImpState.className = 'startButtons'
  buttonImpState.type = 'button'
  buttonImpState.textContent = 'implementation state phase'

  // append buttons to the wrapper
  wrapper.appendChild(buttonDgn)
  wrapper.appendChild(buttonDgnState)
  wrapper.appendChild(buttonImp)
  wrapper.appendChild(buttonImpState)

  graph.appendChild(wrapper)

  // add events listeners to the buttons, each event listener loads a
  // specific UI and then removes the wrapper
  buttonDgn.addEventListener('click', () => {
    designUI()
    graph.removeChild(wrapper)
  })
  buttonDgnState.addEventListener('click', () => {
    designStateUI()
    graph.removeChild(wrapper)
  })
  buttonImp.addEventListener('click', () => {
    implementationUI()
    graph.removeChild(wrapper)
  })
  buttonImpState.addEventListener('click', () => {
    implementationStateUI()
    graph.removeChild(wrapper)
  })

  const ack = document.createElement('ack')
  ack.id = 'ack-id'
  ack.innerHTML =
    '<span style="position: absolute; bottom: 10px; right: 50%;">❮❯ with ♥︎ by <strong>or3stis</strong></span>'
  graph.appendChild(ack)
}
