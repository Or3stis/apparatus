// finds vulnerabilities from CVE database

const http = require('http')
const fs = require('fs')

const config = require('../../settings/config.js')
const printChatText = require('../helpers/printChatText.js')
const printChatHTML = require('../helpers/printChatHTML.js')

// only checks vulnerabilities for the concepts of device and application
module.exports = function findVuln (cy) {
  // fades out the graph elements
  cy.elements().addClass('faded')

  // stores the values of the nodes that will be used as keywords
  let nodesKeywords = []
  // fills the nodesKeywords with the values
  cy.nodes().map(node => {
    if (node.data().asto.concept === 'device') {
      // check the 'type' attribute for vulnerabilities
      nodesKeywords.push(node.data().asto.type)

      node.removeClass('faded')
      node.addClass('attention')
    } else if (node.data().asto.concept === 'application') {
      // check the 'version' attribute for vulnerabilities
      nodesKeywords.push(node.data().asto.version)

      node.removeClass('faded')
      node.addClass('attention')
    }
  })

  // check whether the nodesKeywords is empty before sending the request to
  // a vulnerability database
  if (nodesKeywords.length === 0) {
    printChatText('no vulnerabilities were found')
  } else {
    // removes duplicate keywords
    const uniqueKeywords = [...new Set(nodesKeywords)]

    // stores the keywords for display
    let keywordsPrint = ''
    uniqueKeywords.map(keyword => {
      keywordsPrint += `• ${keyword}\n`
    })

    printChatText(`sending request to ${config.cveSearchUrl}`)
    printChatText(`☛ keywords used:\n\n${keywordsPrint}`)
    requestVulnData(uniqueKeywords)
  }
}

// request vulnerability information from cve
const requestVulnData = nodesKeywords => {
  // get the name of the fileNames
  const title = document.getElementById('title-bar-id')
  const file = title.textContent.split('/').pop()

  // stores the CVE list
  let totalVuln = []
  nodesKeywords.map(vuln => {
    http
      .get(`${config.cveSearchUrl}${vuln}`, resp => {
        let data = ''

        // add each received chunk of data
        resp.on('data', chunk => {
          data += chunk
        })

        // whole response has been received
        resp.on('end', () => {
          // write the results in a .json file
          // ${file} has the .js extension, the ${file}on has the .json
          fs.writeFile(`analysis/vulnerability-${file}on`, data, err => {
            if (err) console.error(`Error: ${err.message}`)
          })

          // this works for single keywords
          Object.values(JSON.parse(data)).map(key => {
            // arry with the CVE ids
            key.map(info => totalVuln.push(info.id))
          })
          // this works for double keywords -> vendor/product
          // JSON.parse(data).map((key) => {
          // console.log(key)
          // })

          // displays the total amount of vulnerabilities
          printChatHTML(
            `${vuln} vulnerabilities found: <strong>${totalVuln.length}</strong>`
          )
        })
      })
      .on('error', err => {
        console.log(`Error: ${err.message}`)
      })
  })
  printChatHTML(
    `analysis results will be stored at\n<strong>./analysis/vulnerability-${file}on</strong>`
  )
}
