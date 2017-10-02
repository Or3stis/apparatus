// design-state phase concept schema

const dgnStateMetamodel = {}

// allowed concepts connections
dgnStateMetamodel.modelArray = ['model', 'cesm', 'event']
dgnStateMetamodel.cesmArray = ['model', 'event']
dgnStateMetamodel.eventArray = ['cesm', 'model']

module.exports = dgnStateMetamodel
