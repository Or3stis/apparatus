// design phase concept schema

const dgnMetamodel = {
  serviceProvArray: ['vnf', 'cescm', 'light dc', 'storage', 'process'],
  infrastructureProvArray: ['vnf', 'main dc', 'light dc', 'vim'],
  cescmArray: ['service provider', 'infrastructure provider', 'vim', 'main dc'],
  vimArray: ['infrastructure provider', 'cescm', 'main dc', 'light dc'],
  mainDcArray: [
    'infrastructure provider',
    'vnf',
    'storage',
    'process',
    'light dc',
    'vnf',
    'vim',
    'cescm',
    'constraint'
  ],
  lightDcArray: [
    'infrastructure provider',
    'service provider',
    'storage',
    'process',
    'main dc',
    'vnf',
    'vim',
    'cescm',
    'constraint'
  ],
  vnfArray: [
    'service provider',
    'infrastructure provider',
    'light dc',
    'main dc',
    'constraint',
    'asset'
  ],
  storageArray: [
    'service provider',
    'main dc',
    'light dc',
    'asset',
    'end user'
  ],
  processArray: [
    'service providers',
    'main dc',
    'light dc',
    'asset',
    'end user'
  ],
  constraintArray: ['main dc', 'light dc', 'vnf', 'threat'],
  assetArray: ['vnf', 'storage', 'process', 'threat'],
  endUserArray: ['storage', 'process'],
  threatArray: ['asset', 'constraint', 'malicious actor'],
  maliciousActorArray: ['threat']
}

dgnMetamodel.pairs = {
  'service provider': dgnMetamodel.serviceProvArray,
  'infrastructure provider': dgnMetamodel.infrastructureProvArray,
  cesm: dgnMetamodel.cescmArray,
  vim: dgnMetamodel.vimArray,
  'main dc': dgnMetamodel.mainDcArray,
  'light dc': dgnMetamodel.lightDcArray,
  vnf: dgnMetamodel.vnfArray,
  storage: dgnMetamodel.storageArray,
  processArray: dgnMetamodel.processArray,
  constraint: dgnMetamodel.constraintArray,
  asset: dgnMetamodel.assetArray,
  'end user': dgnMetamodel.endUserArray,
  threat: dgnMetamodel.threatArray,
  'malicious actor': dgnMetamodel.maliciousActorArray
}

module.exports = dgnMetamodel
