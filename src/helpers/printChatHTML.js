'use strict'

// prints html formatted text
module.exports = function printChat (toPrint) {
  const htmlElement = document.getElementById('info-nodes-id')
  const span = document.createElement('span')
  // if (from === 'user') {
  //   span.className = 'bubble user'
  // } else {
  //   span.className = 'bubble tool'
  // }
  span.className = 'bubble'
  span.innerHTML = toPrint
  htmlElement.appendChild(span)
  htmlElement.lastChild.scrollIntoView(false)
}
