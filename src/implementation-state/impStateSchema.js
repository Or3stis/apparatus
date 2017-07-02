const impStateMetamodel = {}

// allowed concepts connections
impStateMetamodel.modelArray = [
  'model',
  'event sensor',
  'control sensor',
  'report sensor',
  'event'
]
impStateMetamodel.eventSensorArray = ['model', 'event']
impStateMetamodel.controlSensorArray = impStateMetamodel.eventSensorArray
impStateMetamodel.reportSensorArray = impStateMetamodel.eventSensorArray
impStateMetamodel.eventArray = [
  'event sensor',
  'control sensor',
  'report sensor',
  'model'
]

module.exports = impStateMetamodel
