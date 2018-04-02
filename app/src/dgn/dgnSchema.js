// design phase concept schema

const dgnMetamodel = {}

// allowed concepts connections
dgnMetamodel.serviceProvArray = [
  'vnf',
  'cescm',
  'light dc',
  'storage',
  'process'
]
dgnMetamodel.infrastructureProvArray = ['vnf', 'main dc', 'light dc', 'vim']
dgnMetamodel.cescmArray = [
  'service provider',
  'infrastructure provider',
  'vim',
  'main dc'
]
dgnMetamodel.vimArray = [
  'infrastructure provider',
  'cescm',
  'main dc',
  'light dc'
]
dgnMetamodel.mainDcArray = [
  'infrastructure provider',
  'vnf',
  'storage',
  'process',
  'light dc',
  'vnf',
  'vim',
  'cescm',
  'constraint'
]
dgnMetamodel.lightDcArray = [
  'infrastructure provider',
  'service provider',
  'storage',
  'process',
  'main dc',
  'vnf',
  'vim',
  'cescm',
  'constraint'
]
dgnMetamodel.vnfArray = [
  'service provider',
  'infrastructure provider',
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
