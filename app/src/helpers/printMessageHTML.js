// helper to print HTML formatted text

module.exports = function printMessageText (toPrint) {
  const htmlElement = document.getElementById('message-area-id')
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
