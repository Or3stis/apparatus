// finds vulnerabilities from CVE database

const printChat = require('../core/printChat.js')

// TODO add the application
module.exports = function findVuln (cy) {
  const typeArray = ['type', 'service']
  let keywords = ''

  cy.elements().addClass('faded')

  cy.nodes().map(node => {
    if (node.data().info.concept === 'device') {
      Object.keys(node.data().info).map(key => {
        if (typeArray.includes(key) === true) {
          keywords += `• ${node.data().info[key]}\n`
          node.removeClass('faded')
          node.addClass('attention')
        }
      })
    } else if (node.data().info.concept === 'application') {
      keywords += `• ${node.data().info.version}\n`
      node.removeClass('faded')
      node.addClass('attention')
    }
  })
  if (keywords === '') {
    keywords = 'no vulnerabilities were found'
  }
  printChat(keywords)
}
