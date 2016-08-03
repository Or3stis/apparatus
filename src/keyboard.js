// keyboard shortcuts

// cmd + l, bring the console to focus

// help menu
const helpMenu = 'no commands working now'

module.exports = function keyboard () {
  document.addEventListener('keydown', (event) => {
    if (event.metaKey === true && event.code === 'KeyL') {
      console.log('it works')
      document.getElementById('consoleID').focus()
    }

    const input = document.getElementById('consoleID').value
    // listens for you to press the ENTER key
    if (event.code === 'Enter') {
      // console.log(input)
      document.getElementById('consoleID').value = ''
      if (input === 'help' || input === 'options') {
        document.getElementById('infoForNodes').innerHTML = helpMenu
        console.log('help')
      } else if (input === 'validation') {
        // moduleValidation(s)
      } else {
        document.getElementById('infoForNodes').innerHTML = 'not valid'
      }
    }
  })
}
