// creates the home page menu, used to access the phases

const designUI = require('./phaseUI/dgnUI.js')
const implementationUI = require('./phaseUI/impUI.js')
const stateUI = require('./phaseUI/stateUI.js')

module.exports = function homeMenu () {
  // get the graph container
  const graph = document.getElementById('graph-container')

  // create wrapper for the phase buttons
  const wrapper = document.createElement('wrapper')
  wrapper.id = 'wrapper-id'
  wrapper.className = 'wrapper'
  wrapper.textContent = 'select phase'

  // create the design phase button
  const btnDgn = document.createElement('button')
  btnDgn.id = 'dgn-id'
  btnDgn.className = 'menu-btn'
  btnDgn.type = 'button'
  btnDgn.textContent = 'design phase'

  // create the implementation phase button
  const btnImp = document.createElement('button')
  btnImp.id = 'imp-id'
  btnImp.className = 'menu-btn'
  btnImp.type = 'button'
  btnImp.textContent = 'implementation phase'

  // create the state transition phase button
  const btnState = document.createElement('button')
  btnState.id = 'state-id'
  btnState.className = 'menu-btn'
  btnState.type = 'button'
  btnState.textContent = 'state diagram'

  // append buttons to the wrapper
  wrapper.appendChild(btnDgn)
  wrapper.appendChild(btnImp)
  wrapper.appendChild(btnState)

  graph.appendChild(wrapper)

  // add events listeners to the buttons, each event listener loads a
  // specific UI and then removes the wrapper
  btnDgn.addEventListener('click', () => {
    graph.removeChild(wrapper)
    graph.removeChild(ack)
    designUI()
  })
  btnImp.addEventListener('click', () => {
    graph.removeChild(wrapper)
    graph.removeChild(ack)
    implementationUI()
  })
  btnState.addEventListener('click', () => {
    graph.removeChild(wrapper)
    graph.removeChild(ack)
    stateUI()
  })

  const ackMessage =
    '<span style="position: absolute; bottom: 10px; right: 50%;">❮❯ with ♥︎ by <strong>or3stis</strong></span>'

  const ack = document.createElement('ack')
  ack.id = 'ack-id'
  ack.innerHTML = ackMessage
  graph.appendChild(ack)
}
