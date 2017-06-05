// CSS style for the graphs

const configGraph = require(`./configGraph.js`)

const graphStyle = {}

graphStyle.style = [{
  selector: 'node',
  style: {
    shape: 'ellipse',
    'background-color': configGraph.gray,
    label: 'data(label)',
    'text-valign': 'center',
    'color': configGraph.white,
    'text-outline-width': 2,
    'text-outline-color': configGraph.black
  }
}, {
  selector: 'edge',
  style: {
    'curve-style': 'bezier',
    'line-color': configGraph.gray,
    label: 'data(label)',
    'target-arrow-shape': 'triangle',
    'target-arrow-color': configGraph.gray,
    'width': 2,
    'color': configGraph.white,
    'text-outline-width': 2,
    'text-outline-color': configGraph.black
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
    'background-color': configGraph.blue,
    'line-color': configGraph.blue
  }
}, {
  selector: '.attention',
  style: {
    'background-color': configGraph.yellow
  }
}, {
  selector: '.protect',
  style: {
    'background-color': configGraph.lightBlue
  }
}]

module.exports = graphStyle
