// design phase concept schema

const dgnMetamodel = {}

// metamodel group concepts
dgnMetamodel.network = ['micronet', 'net', 'information', 'thing']
dgnMetamodel.security = ['asset', 'threat', 'constraint', 'malicious actor']
dgnMetamodel.social = ['actor']
dgnMetamodel.sensing = ['sensor']

// allowed concepts connections
dgnMetamodel.serviceProvArray = [
  'vnf',
  'cesm',
  'light dc',
  'storage',
  'process'
]
dgnMetamodel.infrastructureProvArray = ['vnf', 'main dc', 'light dc', 'vim']
dgnMetamodel.cesmArray = [
  'service provider',
  'infrastrure provider',
  'vim',
  'main dc'
]
dgnMetamodel.vimArray = ['infrastrure provider', 'cesm', 'main dc', 'light dc']
dgnMetamodel.mainDcArray = [
  'infrastrure provider',
  'vnf',
  'storage',
  'process',
  'light dc',
  'vnf',
  'vim',
  'cesm',
  'constraint'
]
dgnMetamodel.lightDcArray = [
  'infrastrure provider',
  'service provider',
  'storage',
  'process',
  'main dc',
  'vnf',
  'vim',
  'cesm',
  'constraint'
]
dgnMetamodel.vnfArray = [
  'service provider',
  'infrastrure provider',
  'light dc',
  'main dc',
  'constraint',
  'asset'
]
dgnMetamodel.storageArray = [
  'service provider',
  'main dc',
  'light dc',
  'asset',
  'end user'
]
dgnMetamodel.processArray = [
  'service providers',
  'main dc',
  'light dc',
  'asset',
  'end user'
]
dgnMetamodel.constraintArray = ['main dc', 'light dc', 'vnf', 'threat']
dgnMetamodel.assetArray = ['vnf', 'storage', 'process', 'threat']
dgnMetamodel.endUserArray = ['storage', 'process']
dgnMetamodel.threatArray = ['asset', 'constraint', 'malicious actor']
dgnMetamodel.maliciousActorArray = ['threat']

module.exports = dgnMetamodel
