// finds vulnerabilities from CVE database

const http = require('http')
const fs = require('fs')
const { dialog } = require('electron').remote

const settings = require('../../settings/userSettings.js')
const bubbleTxt = require('../helpers/bubbleTxt.js')
const bubbleHTML = require('../helpers/bubbleHTML.js')

/**
 *  request vulnerability information from cve
 *
 * @param {string} filename
 * @param {Array} nodesKeywords keywords to be send to the database
 */
const requestVulnData = (filename, nodesKeywords) => {
  // stores the CVE list
  let totalVuln = []
  nodesKeywords.map(vuln => {
    http
      .get(`${settings.cveSearchUrl}${vuln}`, resp => {
        let data = ''
        // add each received chunk of data
        resp.on('data', chunk => {
          data += chunk
        })
        // once the whole response has been received
        resp.on('end', () => {
          // write the results in a json file
          fs.writeFile(filename, data, err => {
            if (err) console.error(`Error: ${err.message}`)
          })
          // this works for single keywords
          Object.values(JSON.parse(data)).map(key => {
            // array with the CVE ids
            key.map(info => totalVuln.push(info.id))
          })
          // this works for double keywords -> vendor/product
          // JSON.parse(data).map((key) => {
          // console.log(key)
          // })

          // displays the total amount of vulnerabilities
          bubbleHTML(
            `${vuln} vulnerabilities found: <strong>${
              totalVuln.length
            }</strong>`
          )
        })
      })
      .on('error', err => {
        bubbleTxt(err.message)
      })
  })
}

/**
 * saves the vulnerabilities in a json file
 *
 * @param {Array} nodesKeywords keywords to be send to the database
 */
const saveFile = nodesKeywords => {
  dialog.showSaveDialog(
    { filters: [{ name: 'javascript', extensions: ['json'] }] },
    filename => {
      requestVulnData(filename, nodesKeywords)
    }
  )
}

let nodesKeywords = []
/**
 * highlights the vulnerable nodes and fills the nodesKeywords array
 *
 * @param {Object} cy cytoscape instance
 */
const findVulnNodes = cy => {
  // fades out the graph elements
  cy.elements().addClass('faded')

  // stores the values of the nodes that will be used as keywords
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
}

let keywordsPrint = ''
/**
 * removes duplicate keywords
 *
 * @param {Array} nodesKeywords keywords to be send to the database
 */
const getUniqueKeywords = nodesKeywords => {
  const uniqueKeywords = [...new Set(nodesKeywords)]

  // stores the unique keywords for display
  uniqueKeywords.map(keyword => {
    keywordsPrint += `• ${keyword}\n`
  })
}

/**
 * sends a request to a CVE database with the keywords
 *
 * @param {Object} cy cytoscape instance
 */
const findVuln = cy => {
  findVulnNodes(cy)

  // check whether the nodesKeywords is empty before sending the request to
  // a vulnerability database
  if (nodesKeywords.length === 0) {
    bubbleTxt('no vulnerabilities were found')
  } else {
    getUniqueKeywords(nodesKeywords)
    saveFile(nodesKeywords) // runs the requestVulnData()

    bubbleTxt(`sending request to ${settings.cveSearchUrl}`)
    bubbleTxt(`☛ keywords used:\n\n${keywordsPrint}`)
  }
}

// only checks vulnerabilities for the concepts of device and application
module.exports = findVuln
