// helper to print text-only formatted text

module.exports = function printMsgTxt (toPrint) {
  const htmlElement = document.getElementById('message-area-id')

  // create message element
  const span = document.createElement('span')
  span.className = 'bubble'
  const result = document.createTextNode(toPrint)
  span.appendChild(result)
  htmlElement.appendChild(span)

  htmlElement.lastChild.scrollIntoView(false)
}
