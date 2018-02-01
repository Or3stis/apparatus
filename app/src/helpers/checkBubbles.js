// keeps the number of message bubbles to the a specified number

const settings = require('../../settings/settings.js')

module.exports = function checkBubbles () {
  const messageArea = document.getElementById('message-area-id')
  const bubbles = messageArea.children

  if (bubbles.length >= settings.maxNumberOfBubbles) {
    messageArea.removeChild(messageArea.firstChild)
  }
}
