// finds vulnerabilities from CVE database

const printChat = require('../helpers/printChat.js')
const http = require('http')

// only checks for the concepts of device and application
module.exports = function findVuln (cy) {
  // array that stores the attributes of the concepts that will be checked
  let keywords = ''
  // stores the id of the node and the value of the attribute
  let vulnInfo = {}

  cy.elements().addClass('faded')

  cy.nodes().map(node => {
    if (node.data().info.concept === 'device') {
      keywords += `• ${node.data().info.type}\n`
      vulnInfo[node.data().id] = node.data().info.type
      node.removeClass('faded')
      node.addClass('attention')
    } else if (node.data().info.concept === 'application') {
      keywords += `• ${node.data().info.version}\n`
      vulnInfo[node.data().id] = node.data().info.version
      node.removeClass('faded')
      node.addClass('attention')
    }
  })
  if (keywords === '') {
    keywords = 'no vulnerabilities were found'
  }
  printChat(keywords)
  // requestVulnData(vulnInfo)
}

// request vulnerability information from cve
const requestVulnData = vulnInfo => {
  Object.keys(vulnInfo).map(vuln => {
    http
      .get(`http://cve.circl.lu/api/search/${vulnInfo[vuln]}`, resp => {
        let data = ''

        // A chunk of data has been recieved.
        resp.on('data', chunk => {
          data += chunk
        })

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          // console.log(JSON.parse(data))
          Object.values(JSON.parse(data)).map(key => {
            key.map((i) => {
              console.log(`${vuln} ${i.id}`)
            })
          })
        })
      })
      .on('error', err => {
        console.log('Error: ' + err.message)
      })
  })
}
