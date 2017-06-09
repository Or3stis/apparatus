const dgnStateMetamodel = {}

// allowed concepts connections
dgnStateMetamodel.modelArray = ['model', 'sensor', 'event']
dgnStateMetamodel.sensorArray = ['model', 'event']
dgnStateMetamodel.eventArray = ['sensor', 'mode']

module.exports = dgnStateMetamodel
