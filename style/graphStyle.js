// style configGraph for the graphs
const configGraph = require(`${__dirname}/configGraph.js`)

const graphStyle = {}

graphStyle.style = [{
  selector: 'node',
  style: {
    shape: 'circle',
    'background-color': configGraph.blue,
    'color': configGraph.comment,
    label: 'data(label)'
  }
}, {
  selector: 'edge',
  style: {
    'line-color': configGraph.blue,
    'color': configGraph.comment,
    label: 'data(label)',
    'target-arrow-shape': 'triangle',
    'target-arrow-color': configGraph.blue,
    'width': 2
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
