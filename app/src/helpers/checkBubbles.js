const settings = require('../../settings/userSettings.js')

/** keeps the number of message bubbles to the a specified number */
module.exports = function checkBubbles () {
  const messageArea = document.getElementById('message-area-id')
  const bubbles = messageArea.children

  if (bubbles.length >= settings.maxNumberOfBubbles) {
    messageArea.removeChild(messageArea.firstChild)
  }
}
