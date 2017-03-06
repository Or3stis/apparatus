// style config for the graphs
const config = require(`${__dirname}/config1.js`)

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
    'line-color': config.blue
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
