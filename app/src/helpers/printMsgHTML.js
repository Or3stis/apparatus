// helper to print HTML formatted text

const checkBubbles = require('./checkBubbles.js')

module.exports = function printMsgHTML (toPrint) {
  const htmlElement = document.getElementById('message-area-id')

  // create message element
  const span = document.createElement('span')
  span.className = 'bubble'
  span.innerHTML = toPrint
  htmlElement.appendChild(span)

  htmlElement.lastChild.scrollIntoView(false)

  // checks the number of bubbles
  checkBubbles()
}
