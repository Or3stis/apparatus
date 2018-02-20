// helper to print HTML formatted text as message bubble

const checkBubbles = require('./checkBubbles.js')

// id counter for the bubbles
let idCnt = 0

module.exports = function bubbleHTML (toPrint) {
  const msgArea = document.getElementById('message-area-id')

  // create bubble element
  const bubble = document.createElement('span')
  bubble.className = 'bubble'
  idCnt += 1
  bubble.id = `bubble-html-${idCnt}`

  // add content to the bubble
  bubble.innerHTML = toPrint
  msgArea.appendChild(bubble)

  // create the close button
  const bubbleBtn = document.createElement('button')
  bubbleBtn.className = 'bubble-btn'
  bubbleBtn.id = `bubbleBtn-${idCnt}`
  bubble.appendChild(bubbleBtn)

  // attach event listener to the close button
  bubbleBtn.addEventListener('click', () => {
    msgArea.removeChild(bubble)
  })

  msgArea.lastChild.scrollIntoView(false)

  // checks the number of bubbles
  checkBubbles()
}
