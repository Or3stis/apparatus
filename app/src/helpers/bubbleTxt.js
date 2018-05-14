const checkBubbles = require('./checkBubbles.js')

// counter for the bubbles id
let idCnt = 0

/**
 * helper to print text-only formatted text as a message bubble
 *
 * @param {string} toPrint message to print in the bubble
 */
module.exports = function bubbleTxt (toPrint) {
  // if the input is empty it doesn't render an small empty bubble
  if (toPrint !== '') {
    const msgArea = document.getElementById('message-area-id')

    // create bubble element
    const bubble = document.createElement('span')
    bubble.className = 'bubble'
    idCnt += 1
    bubble.id = `bubble-txt-${idCnt}`

    // add content to the bubble
    const result = document.createTextNode(toPrint)
    bubble.appendChild(result)
    msgArea.appendChild(bubble)

    // create the close button
    const bubbleBtn = document.createElement('button')
    bubbleBtn.className = 'bubble-btn'
    bubbleBtn.textContent = '✖︎'
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
}
