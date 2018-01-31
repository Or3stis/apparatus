// helper to print HTML formatted text as message bubble

const checkBubbles = require('./checkBubbles.js')

// id couter for the bubbles
let idCnt = 0

module.exports = function printMsgHTML (toPrint) {
  const msgArea = document.getElementById('message-area-id')

  // create message element
  const span = document.createElement('span')
  span.className = 'bubble'
  idCnt += 1
  span.id = `bubble-html-${idCnt}`

  // add content to the bubble
  span.innerHTML = toPrint
  msgArea.appendChild(span)

  msgArea.lastChild.scrollIntoView(false)

  // checks the number of bubbles
  checkBubbles()
}
