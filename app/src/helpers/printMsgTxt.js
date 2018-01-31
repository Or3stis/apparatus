// helper to print text-only formatted text as a message bubble
const checkBubbles = require('./checkBubbles.js')

// counter for the bubbles id
let idCnt = 0

module.exports = function printMsgTxt (toPrint) {
  const htmlElement = document.getElementById('message-area-id')

  // create bubble element
  const span = document.createElement('span')
  idCnt += 1
  span.id = `bubble-txt-${idCnt}`
  span.className = 'bubble'

  // add content to the bubble
  const result = document.createTextNode(toPrint)
  span.appendChild(result)
  htmlElement.appendChild(span)

  htmlElement.lastChild.scrollIntoView(false)

  // checks the number of bubbles
  checkBubbles()
}
