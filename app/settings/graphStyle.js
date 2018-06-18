// CSS style for the graphs

const remote = require('electron').remote

const userDataPath = remote.app.getPath('userData')
const settings = require(`${userDataPath}/astoSettings.js`)

const graphStyle = {}

graphStyle.setStyle = color => {
  // set the graph's color values based on the app theme
  settings.setColors(color)

  // graph style rules
  graphStyle.style = [
    {
      selector: 'node',
      style: {
        shape: 'ellipse',
        'background-color': settings.text,
        'text-wrap': 'wrap',
        'text-max-width': '100px'
      }
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'bezier',
        'line-color': settings.text,
        width: 2
      }
    },
    {
      selector: '.faded',
      style: {
        opacity: 0.25,
        'text-opacity': 0
      }
    },
    {
      selector: '.selection',
      style: {
        'background-color': settings.blue,
        'line-color': settings.blue
      }
    },
    {
      selector: '.old-selection',
      style: {
        'background-color': settings.orange
      }
    },
    {
      selector: '.attention',
      style: {
        'background-color': settings.yellow
      }
    },
    {
      selector: '.protect',
      style: {
        'background-color': settings.cyan
      }
    },
    {
      selector: '.label-nodes',
      style: {
        label: 'data(label)',
        'text-valign': 'center',
        color: settings.text,
        'text-outline-width': 2,
        'text-outline-color': settings.background
      }
    },
    {
      selector: '.label-edges',
      style: {
        label: 'data(label)',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': settings.text,
        color: settings.text,
        'text-outline-width': 2,
        'text-outline-color': settings.background
      }
    },
    {
      selector: '.label-id',
      style: {
        label: 'data(id)',
        'text-valign': 'center',
        color: settings.text,
        'text-outline-width': 2,
        'text-outline-color': settings.background
      }
    },
    {
      selector: '.label-dsc',
      style: {
        label: 'data(info.description)',
        'text-valign': 'center',
        color: settings.text,
        'text-outline-width': 2,
        'text-outline-color': settings.background
      }
    }
  ]
}

module.exports = graphStyle
