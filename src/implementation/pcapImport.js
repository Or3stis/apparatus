'use strict'

const {dialog} = require('electron').remote
const fs = require('fs')
const child = require('child_process')

const initialize = require('../initialize.js')
const cyOptions = require('../core/cyOptions.js')

// // create timeStamp to name the files
const time = new Date()
const timeStamp = `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}at${time.getHours()}.${time.getMinutes()}.${time.getSeconds()}`

// writes the data from the read function
// loads written graph on the tool
const writeGraph = (cy, total, connections) => {
  // node content of the file
  let nodeContent = ''
  // edge content of the file
  let edgeContent = ''

  // creates the nodes
  Object.keys(total).map(key => {
    nodeContent += `
  {
    data: {
      id: '${key}',
      label: 'device',
      info: {
        description: '${total[key]}',
        aspect: '',
        layer: '',
        type: '',
        service: '',
        input: '',
        output: '',
        update: '',
        concept: 'device'
      }
    }
  },`
  })

  // used as the id counter for the network connections
  let idCounter = total.length
  // creates the edges and the network connection nodes concept
  connections.map(node => {
    let element = node.split(' ')
    let srcId = ''
    let trgId = ''
    Object.keys(total).map(id => {
      if (total[id] === element[0]) {
        srcId = id
      }
    })
    Object.keys(total).map(id => {
      if (total[id] === element[1]) {
        trgId = id
      }
    })
    nodeContent += `
  {
    data: {
      id: '${idCounter}',
      label: 'network connection',
      info: {
        description: '${element[2]}',
        listOfProtocols: '',
        concept: 'network connection'
      }
    }
  },`
    edgeContent += `
  {
    data: {
      id: 'e${srcId}${idCounter}',
      source: '${srcId}',
      target: '${idCounter}',
      label: 'connects'
    }
  },
  {
    data: {
      id: 'e${trgId}${idCounter}',
      source: '${trgId}',
      target: '${idCounter}',
      label: 'connects'
    }
  },`
    idCounter += 1
  })

  // creates the first line of the file
  const fileStart = 'const graphModel = {}\ngraphModel.elements = [\n// nodes'
  // end of written file
  const fileEnd = '\n]\nmodule.exports = graphModel\n'

  // concatenates the created content
  const toWrite = fileStart
    .concat(nodeContent)
    .concat(edgeContent)
    .concat(fileEnd)

  // writes the graph on file
  fs.writeFile(`graphs/implementation/${timeStamp}.js`, toWrite, err => {
    if (err) throw err

    // loads the created graph on the tool
    cyOptions(cy, `../../graphs/implementation/${timeStamp}.js`)
    initialize(cy.out)
  })
}

// read the txt file that was created by the tcpdump command
const readTxtFile = (cy) => {
  fs.readFile(`graphs/implementation/${timeStamp}.txt`, (err, data) => {
    if (err) throw err

    const nodeArray = data.toString().split('\n')
    let srcNodes = []
    let trgNodes = []
    let connection = []
    nodeArray.map(eachLine => {
      let row = eachLine.split(' ')
      if (row[1] !== undefined && row[3] !== undefined) {
        srcNodes.push(row[1])
        trgNodes.push(row[3].replace(':', ''))
        connection.push(`${row[1]} ${row[3].replace(':', '')} ${row[4]}`)
      }
    })
    // stores the unique connections
    // many are reversed src -> trg and trg -> src
    const allConnections = [...new Set(connection)]

    // used to transpose the second line, which is usually the reverse of the
    // previous line. If the two lines are the same, the duplicate is removed
    // when the uniqueConnections Set is created
    // TODO has duplicates
    let counter = 1
    let uniqueLine = []
    allConnections.map(line => {
      let element = line.split(' ')
      if (counter % 2 === 1) {
        uniqueLine.push(`${element[0]} ${element[1]} ${element[2]}`)
      } else if (counter % 2 === 0) {
        uniqueLine.push(`${element[1]} ${element[0]} ${element[2]}`)
      }
      counter += 1
    })

    // stores the toral nodes
    const totalNodes = [...new Set(srcNodes.concat(trgNodes))]
    // stores the edges
    // line format srcNode tgtNode protocol
    const uniqueConnections = [...new Set(uniqueLine)]

    // write data
    writeGraph(cy, totalNodes, uniqueConnections)
  })
}

module.exports = function pcapImport (cy) {
  const testTcpdump = child.spawnSync('type', ['tcpdump']).status === 0

  if (testTcpdump === true) {
    let dialogOptions = []
    if (process.platform === 'darwin') {
      dialogOptions = ['openFile', 'openDirectory']
    } else {
      dialogOptions = ['openFile']
    }

    dialog.showOpenDialog(
      {
        properties: [...dialogOptions],
        filters: [{ name: 'pcap', extensions: ['pcapng'] }]
      },
      fileNames => {
        if (fileNames === undefined) return

        const fileName = fileNames[0]
        // tcpdump command to be executed
        const tcpDumpCommand = `tcpdump -qt -r ${fileName} > graphs/implementation/${timeStamp}.txt`

        child.execSync(tcpDumpCommand)

        // reads data from the created txt file
        // also creates the js file of the graph using the writeGraph
        readTxtFile(cy)
      }
    )
  } else {
    dialog.showErrorBox('Error', 'tcpdump not found in your path')
  }
}
