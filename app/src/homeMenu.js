// creates the home page menu, used to access the phases

const designUI = require('./phaseUI/dgnUI.js')
const designStateUI = require('./phaseUI/dgnStateUI.js')

module.exports = function homeMenu () {
  // get the graph container
  const graph = document.getElementById('graph-container')

  // create wrapper for the phase buttons
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

  // append buttons to the wrapper
  wrapper.appendChild(buttonDgn)
  wrapper.appendChild(buttonDgnState)

  graph.appendChild(wrapper)

  // add events listeners to the buttons, each event listener loads a
  // specific UI and then removes the wrapper
  buttonDgn.addEventListener('click', () => {
    graph.removeChild(wrapper)
    graph.removeChild(ack)
    designUI()
  })
  buttonDgnState.addEventListener('click', () => {
    graph.removeChild(wrapper)
    graph.removeChild(ack)
    designStateUI()
  })

  const ack = document.createElement('ack')
  ack.id = 'ack-id'
  ack.innerHTML =
    '<span style="position: absolute; bottom: 10px; right: 50%;">❮❯ with ♥︎ by <strong>CapriTech</strong></span>'
  graph.appendChild(ack)
}
