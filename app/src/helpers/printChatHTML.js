// prints html formatted text

module.exports = function printChatText (toPrint) {
  const htmlElement = document.getElementById('info-nodes-id')

  const span = document.createElement('span')
  span.className = 'bubble'
  span.innerHTML = toPrint

  htmlElement.appendChild(span)
  htmlElement.lastChild.scrollIntoView(false)
}
