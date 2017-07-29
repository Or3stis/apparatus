'use strict'

// TODO pair common port with services in the map function that creates devices
// TODO code is incompehensible, make it better
// TODO create applications as services

const { dialog } = require('electron').remote
const fs = require('fs')
const child = require('child_process')

const initialize = require('../initialize.js')
const cyOptions = require('../core/cyOptions.js')

// // create timeStamp to name the files
const time = new Date()
// const timeStamp = 'test'
const timeStamp = `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}at${time.getHours()}.${time.getMinutes()}.${time.getSeconds()}`

// node content of the file
let nodeContentJs = ''
// edge content of the file
let edgeContentJs = ''

const createDevices = (devices) => {
  let idCounterApplication = devices.length * 2
  Object.keys(devices).map(key => {
    let nodeInformation = devices[key].split('.')
    let nodeService = nodeInformation.pop()
    let nodeIP = nodeInformation.join('.')

    nodeContentJs += `
  {
    data: {
      id: '${key}',
      label: 'device',
      info: {
        description: '${nodeIP}',
        aspect: '',
        layer: '',
        type: '',
        service: '${nodeService}',
        input: '',
        output: '',
        update: '',
        concept: 'device'
      }
    }
  },
  {
    data: {
      id: '${idCounterApplication}',
      label: 'application',
      info: {
        description: 'port ${nodeService}',
        version: '',
        update: '',
        concept: 'application'
      }
    }
  },`

  // creates edge from the device node to the application nodes
    edgeContentJs += `
  {
    data: {
      id: 'e${key}${idCounterApplication}',
      source: '${key}',
      target: '${idCounterApplication}',
      update: '',
      label: 'has'
    }
  },`
    idCounterApplication += 1
  })
}

// creates network connections and adds edges between them and the devices
const createConnections = (devices, connections) => {
  // used as the id counter for the network connections
  let idCounterNetwork = devices.length

  // creates the edges and the network connection nodes concept
  connections.map(node => {
    let element = node.split(' ')
    let srcId = ''
    let trgId = ''

    // find the nodes id, used to create the edges
    Object.keys(devices).map(id => {
      if (devices[id] === element[0]) {
        srcId = id
      }
    })
    Object.keys(devices).map(id => {
      if (devices[id] === element[1]) {
        trgId = id
      }
    })

    nodeContentJs += `
  {
    data: {
      id: '${idCounterNetwork}',
      label: 'network connection',
      info: {
        description: '${element[2]}',
        listOfProtocols: '',
        concept: 'network connection'
      }
    }
  },`

    // creates edges between devices and network connections
    edgeContentJs += `
  {
    data: {
      id: 'e${srcId}${idCounterNetwork}',
      source: '${srcId}',
      target: '${idCounterNetwork}',
      label: 'connects'
    }
  },
  {
    data: {
      id: 'e${trgId}${idCounterNetwork}',
      source: '${trgId}',
      target: '${idCounterNetwork}',
      label: 'connects'
    }
  },`
    idCounterNetwork += 1
  })
}

// writes the data from the read function
// the data are read from the txt created in readFile function
const writeGraph = (cy, devices, connections) => {
  createDevices(devices)
  createConnections(devices, connections)
  // creates the first line of the file
  const fileStart = 'const graphModel = {}\ngraphModel.elements = [\n// nodes'
  // end of written file
  const fileEnd = '\n]\nmodule.exports = graphModel\n'

  // concatenates the created content
  const toWrite = fileStart
    .concat(nodeContentJs)
    .concat(edgeContentJs)
    .concat(fileEnd)

  // writes the graph on file
  fs.writeFile(`graphs/implementation/${timeStamp}.js`, toWrite, err => {
    if (err) throw err

    // loads the created graph on the tool
    cyOptions(cy, `../../graphs/implementation/${timeStamp}.js`)
    initialize(cy.out)
  })
}

// reads the .txt file that was created by the tcpdump command
const readTxtFile = cy => {
  fs.readFile(`graphs/implementation/${timeStamp}.txt`, (err, data) => {
    if (err) throw err

    const nodeArray = data.toString().split('\n')
    // stores the source concepts
    let srcNodes = []
    // store the target concepts
    let trgNodes = []
    // store the connection in the following format
    // source, target, network protocol
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
    const deviceNodes = [...new Set(srcNodes.concat(trgNodes))]
    // stores the edges
    // line format srcNode tgtNode protocol
    const uniqueConnections = [...new Set(uniqueLine)]

    // write graph data on as .js file
    writeGraph(cy, deviceNodes, uniqueConnections)
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
        const tcpDumpCommand = `tcpdump -qtn -r ${fileName} > graphs/implementation/${timeStamp}.txt`

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
