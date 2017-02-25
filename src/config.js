// configuration values

const config = {}

config.white = '#e5e9f0'
config.darkWhite = '#eceff4'
config.black = '#3b4251'
config.deepBlack = '#2e3440'
config.veryLightGray = '#bdc3c7'
config.blue = '#82a2c0'
config.red = '#bd626b'
config.orange = '#cf8772'
config.green = '#a4bd8e'
config.yellow = '#eaca8f'
config.gray = '#d8dee9'
config.darkLine = '#242933'
config.lightLine = '#e0e0e0'
config.comment = '#94a4a5'

// settings of sigma graph
config.sigmaOptions = {
  labelSize: 'fixed',
  defaultLabelSize: 20,
  defaultEdgeLabelSize: 20,
  labelThreshold: 1,
  edgeLabelSize: 'proportional',
  defaultLabelColor: config.deepBlack,
  defaultEdgeLabelColor: config.deepBlack,
  // mouseWheelEnabled: true,
  // must enable canvas in type for edge hovering
  enableEdgeHovering: true,
  edgeHoverSizeRatio: 2,
  edgeHoverExtremities: true,
  doubleClickEnabled: false,
  enableCamera: true
}
// values for the flagged list
// see flagNodes.js
config.flag = ['wireless', 'perception']

module.exports = config
