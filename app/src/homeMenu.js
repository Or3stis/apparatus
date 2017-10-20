// creates the home page menu, used to access the phases

const designUI = require('./phaseUI/dgnUI.js')
const implementationUI = require('./phaseUI/impUI.js')
const stateUI = require('./phaseUI/stateUI.js')

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

  // create the implementation phase button
  const buttonImp = document.createElement('button')
  buttonImp.id = 'imp-id'
  buttonImp.className = 'startButtons'
  buttonImp.type = 'button'
  buttonImp.textContent = 'implementation phase'

  // create the state transition phase button
  const buttonState = document.createElement('button')
  buttonState.id = 'state-id'
  buttonState.className = 'startButtons'
  buttonState.type = 'button'
  buttonState.textContent = 'state diagram'

  // append buttons to the wrapper
  wrapper.appendChild(buttonDgn)
  wrapper.appendChild(buttonImp)
  wrapper.appendChild(buttonState)

  graph.appendChild(wrapper)

  // add events listeners to the buttons, each event listener loads a
  // specific UI and then removes the wrapper
  buttonDgn.addEventListener('click', () => {
    graph.removeChild(wrapper)
    graph.removeChild(ack)
    designUI()
  })
  buttonImp.addEventListener('click', () => {
    graph.removeChild(wrapper)
    graph.removeChild(ack)
    implementationUI()
  })
  buttonState.addEventListener('click', () => {
    graph.removeChild(wrapper)
    graph.removeChild(ack)
    stateUI()
  })

  const ack = document.createElement('ack')
  ack.id = 'ack-id'
  ack.innerHTML =
    '<span style="position: absolute; bottom: 10px; right: 50%;">❮❯ with ♥︎ by <strong>or3stis</strong></span>'
  graph.appendChild(ack)
}
