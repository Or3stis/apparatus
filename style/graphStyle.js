// CSS style for the graphs

const configGraph = require(`${__dirname}/configGraph.js`)

const graphStyle = {}

graphStyle.style = [{
  selector: 'node',
  style: {
    shape: 'circle',
    'background-color': configGraph.gray,
    // 'color': configGraph.black,
    label: 'data(label)',
    'text-valign': 'center',
    'color': 'white',
    'text-outline-width': 2,
    'text-outline-color': configGraph.black
  }
}, {
  selector: 'edge',
  style: {
    'line-color': configGraph.gray,
    // 'color': configGraph.black,
    label: 'data(label)',
    'target-arrow-shape': 'triangle',
    'target-arrow-color': configGraph.gray,
    'width': 2,
    'curve-style': 'bezier',
    'color': 'white',
    'text-outline-width': 2,
    'text-outline-color': configGraph.black
  }
}, {
  selector: ':selected',
  style: {
    'background-color': configGraph.green
  }
}, {
  selector: '.faded',
  style: {
    'opacity': 0.25,
    'text-opacity': 0
  }
}, {
  selector: '.selection',
  style: {
    'background-color': configGraph.green,
    'line-color': configGraph.green
  }
}]

module.exports = graphStyle
