// CSS style for the graphs

const config = require(`./config.js`)

const graphStyle = {}

graphStyle.style = [{
  selector: 'node',
  style: {
    shape: 'ellipse',
    'background-color': config.white
  }
}, {
  selector: 'edge',
  style: {
    'curve-style': 'bezier',
    'line-color': config.white,
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
    'background-color': config.cyan
  }
}, {
  selector: '.label-nodes',
  style: {
    label: 'data(label)',
    'text-valign': 'center',
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}, {
  selector: '.label-edges',
  style: {
    label: 'data(label)',
    'target-arrow-shape': 'triangle',
    'target-arrow-color': config.white,
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}, {
  selector: '.label-id',
  style: {
    label: 'data(id)',
    'text-valign': 'center',
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}, {
  selector: '.label-dsc',
  style: {
    label: 'data(info.description)',
    'text-valign': 'center',
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}]

module.exports = graphStyle
