// design-state phase concept schema

const dgnStateMetamodel = {}

// allowed concepts connections
dgnStateMetamodel.modelArray = ['model', 'sensor', 'event']
dgnStateMetamodel.sensorArray = ['model', 'event']
dgnStateMetamodel.eventArray = ['sensor', 'model']

module.exports = dgnStateMetamodel
