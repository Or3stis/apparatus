// helper to print text-only formatted text as a message bubble
const checkBubbles = require('./checkBubbles.js')

// counter for the bubbles id
let idCnt = 0

module.exports = function printMsgTxt (toPrint) {
  const msgArea = document.getElementById('message-area-id')

  // create bubble element
  const span = document.createElement('span')
  span.className = 'bubble'
  idCnt += 1
  span.id = `bubble-txt-${idCnt}`

  // add content to the bubble
  const result = document.createTextNode(toPrint)
  span.appendChild(result)
  msgArea.appendChild(span)

  msgArea.lastChild.scrollIntoView(false)

  // checks the number of bubbles
  checkBubbles()
}
