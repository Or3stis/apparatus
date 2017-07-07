// CSS style for the graphs

const config = require(`./config.js`)

const graphStyle = {}

graphStyle.style = [{
  selector: 'node',
  style: {
    shape: 'ellipse',
    'background-color': config.gray
  }
}, {
  selector: 'edge',
  style: {
    'curve-style': 'bezier',
    'line-color': config.gray,
    'width': 2
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
    'background-color': config.blue,
    'line-color': config.blue
  }
}, {
  selector: '.attention',
  style: {
    'background-color': config.yellow
  }
}, {
  selector: '.protect',
  style: {
    'background-color': config.lightBlue
  }
}, {
  selector: '.label-nodes',
  style: {
    label: 'data(label)',
    'text-valign': 'center',
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.black
  }
}, {
  selector: '.label-edges',
  style: {
    label: 'data(label)',
    'target-arrow-shape': 'triangle',
    'target-arrow-color': config.gray,
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.black
  }
}]

module.exports = graphStyle
