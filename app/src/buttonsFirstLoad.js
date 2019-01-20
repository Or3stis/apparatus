const { closeNotification } = require('./helpers/watcher.js')

// adds the event listener on the Home button once the button is first
// rendered. The rest of the buttons are activated after a graph is rendered.
const buttonHomeLoad = () => {
  // navigates the user to the home UI
  const buttonHome = document.getElementById('home-btn')
  buttonHome.addEventListener('click', () => {
    closeNotification()
  })
}

module.exports = buttonHomeLoad
