// creates the home page menu, used to access the phases

import * as designUI from './phaseUI/dgnUI.js';
import * as implementationUI from './phaseUI/impUI.js';
import * as stateUI from './phaseUI/stateUI.js';

/** creates the home menu of the app */
export function homeMenu() {
  // get the graph container
  const graph = document.getElementById('graph-container')

  // create wrapper for the phase buttons
  const wrapper = document.createElement('menu-wrapper')
  wrapper.id = 'menu-wrapper-id'
  wrapper.className = 'menu-wrapper'

  // create the design phase button
  const buttonDgn = document.createElement('button')
  buttonDgn.id = 'dgn-id'
  buttonDgn.className = 'menu-button'
  buttonDgn.type = 'button'
  buttonDgn.textContent = 'design phase'

  // create the implementation phase button
  const buttonImp = document.createElement('button')
  buttonImp.id = 'imp-id'
  buttonImp.className = 'menu-button'
  buttonImp.type = 'button'
  buttonImp.textContent = 'implementation phase'

  // create the state transition phase button
  const buttonState = document.createElement('button')
  buttonState.id = 'state-id'
  buttonState.className = 'menu-button'
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
    graph.removeChild(acknowledgment)
    designUI()
  })
  buttonImp.addEventListener('click', () => {
    graph.removeChild(wrapper)
    graph.removeChild(acknowledgment)
    implementationUI()
  })
  buttonState.addEventListener('click', () => {
    graph.removeChild(wrapper)
    graph.removeChild(acknowledgment)
    stateUI()
  })

  const acknowledgmentMessage =
    '<span style="position: absolute; bottom: 10px; right: 50%;">❮❯ with ♥︎ by <strong>or3stis</strong></span>'

  const acknowledgment = document.createElement('acknowledgment')
  acknowledgment.id = 'acknowledgment-id'
  acknowledgment.innerHTML = acknowledgmentMessage
  graph.appendChild(acknowledgment)
}
