// style config for the graphs
const config = require(`${__dirname}/configGraphs.js`)

const graphStyle = {}

graphStyle.style = [{
  selector: 'node',
  style: {
    shape: 'circle',
    'background-color': config.blue,
    'color': config.comment,
    label: 'data(label)'
  }
}, {
  selector: 'edge',
  style: {
    'line-color': config.blue,
    'color': config.comment,
    label: 'data(label)',
    'target-arrow-shape': 'triangle',
    'target-arrow-color': config.blue,
    'width': 2
  }
}, {
  selector: ':selected',
  style: {
    'background-color': config.green
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
    'background-color': config.green,
    'line-color': config.green
  }
}]

module.exports = graphStyle
