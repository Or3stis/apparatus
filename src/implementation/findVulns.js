// finds vulnerabilities from CVE database

const printChat = require('../printChat.js')

const typeArray = ['type', 'service']
let keywords = ''

module.exports = function findVuln (cy) {
  cy.nodes().map((node) => {
    if (node.data().info.concept === 'device') {
      Object.keys(node.data().info).map((key) => {
        if (typeArray.includes(key) === true) {
          keywords += `${node.data().info[key]}\n`
        }
      })
    }
  })
  if (keywords === '') {
    keywords = 'no vulnerabilities were found'
  }
  printChat(keywords)
}
