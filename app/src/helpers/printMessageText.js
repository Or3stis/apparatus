// helper to print text-only formatted text

module.exports = function printMessageText (toPrint) {
  const htmlElement = document.getElementById('message-area-id')
  const span = document.createElement('span')
  // if (from === 'user') {
  //   span.className = 'bubble user'
  // } else {
  //   span.className = 'bubble tool'
  // }
  span.className = 'bubble'
  const result = document.createTextNode(toPrint)
  span.appendChild(result)
  htmlElement.appendChild(span)
  htmlElement.lastChild.scrollIntoView(false)
}
