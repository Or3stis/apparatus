// keeps the number of message bubbles to the a specified number

const config = require('../../settings/config.js')

module.exports = function checkBubbles () {
  const messageArea = document.getElementById('message-area-id')
  const bubbles = messageArea.children

  if (bubbles.length >= config.maxNumberOfBubbles) {
    messageArea.removeChild(messageArea.firstChild)
  }
}
