'use strict'

const designUI = require('./src/phasesUI/designUI.js')
const designStateUI = require('./src/phasesUI/designStateUI.js')
const implementationUI = require('./src/phasesUI/implementationUI.js')
const implementationStateUI = require('./src/phasesUI/implementationStateUI.js')

const graph = document.getElementById('graph-container')
const wrapper = document.createElement('wrapper')
wrapper.id = 'wrapper-id'
wrapper.className = 'wrapper'
wrapper.textContent = 'select phase'

const buttonDgn = document.createElement('button')
buttonDgn.id = 'dgn-id'
buttonDgn.className = 'startButtons'
buttonDgn.type = 'button'
buttonDgn.textContent = 'design phase'

const buttonDgnState = document.createElement('button')
buttonDgnState.id = 'dgn-state-id'
buttonDgnState.className = 'startButtons'
buttonDgnState.type = 'button'
buttonDgnState.textContent = 'design state phase'

const buttonImp = document.createElement('button')
buttonImp.id = 'imp-id'
buttonImp.className = 'startButtons'
buttonImp.type = 'button'
buttonImp.textContent = 'implementation phase'

const buttonImpState = document.createElement('button')
buttonImpState.id = 'imp-state-id'
buttonImpState.className = 'startButtons'
buttonImpState.type = 'button'
buttonImpState.textContent = 'implementation state phase'

wrapper.appendChild(buttonDgn)
wrapper.appendChild(buttonDgnState)
wrapper.appendChild(buttonImp)
wrapper.appendChild(buttonImpState)

graph.appendChild(wrapper)

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
