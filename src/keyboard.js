// keyboard shortcuts

// cmd + l, bring the console to focus
// cmd + e, add edge
const moduleValidation = require('./moduleValidation.js')

// help menu
const helpMenu = 'no commands working now'

module.exports = function keyboard (s) {
  document.addEventListener('keydown', (event) => {
    // hotkey for the console
    if (event.metaKey === true && event.code === 'KeyL') {
      document.getElementById('consoleID').focus()
    }

    // hot key to add edge
    if (event.metaKey === true && event.code === 'KeyE') {
      console.log('it works')
      moduleValidation(s)
    }

    // stuff for the console
    const input = document.getElementById('consoleID').value
    // listens for you to press the ENTER key
    if (event.code === 'Enter') {
      // console.log(input)
      document.getElementById('consoleID').value = ''
      if (input === 'help' || input === 'options') {
        document.getElementById('infoForNodes').innerHTML = helpMenu
        console.log('help')
      } else if (input === 'validate') {
        moduleValidation(s)
      } else {
        document.getElementById('infoForNodes').innerHTML = 'not valid'
      }
    }
  })
}
