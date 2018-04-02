// design-state phase concept schema

const dgnStateMetamodel = {}

// allowed concepts connections
dgnStateMetamodel.modelArray = ['model', 'cescm', 'event']
dgnStateMetamodel.cescmArray = ['model', 'event']
dgnStateMetamodel.eventArray = ['cescm', 'model']

module.exports = dgnStateMetamodel
