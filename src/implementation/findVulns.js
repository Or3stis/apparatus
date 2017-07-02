// finds vulnerabilities from CVE database

const printChat = require('../printChat.js')

// TODO add the application
module.exports = function findVuln (cy) {
  const typeArray = ['type', 'service']
  let keywords = ''
  cy.nodes().map(node => {
    if (node.data().info.concept === 'device') {
      Object.keys(node.data().info).map(key => {
        if (typeArray.includes(key) === true) {
          keywords += `• ${node.data().info[key]}\n`
        }
      })
    } else if (node.data().info.concept === 'application') {
      keywords += `• ${node.data().info.version}\n`
    }
  })
  if (keywords === '') {
    keywords = 'no vulnerabilities were found'
  }
  printChat(keywords)
}
