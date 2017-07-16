'use strict'

const load = require('./src/core/load.js')

let cy = {}

// loads a file on start
load(cy) // comment for debugging

/*
the default behavior of the app (asking to load graphs) can be annoying
when developing new features. To prevent that uncomment the code below and
commen everyting above it. It loads a hard coded graph everytime you reload it
*/

// uncomment the code below for debugging

// const testGraph = '../../graphs/implementation/smartHome.js'
// const initialize = require('./src/initialize.js')
// const cyOptions = require('./src/core/cyOptions.js')

// cyOptions(cy, testGraph) // uncomment for debugging
// initialize(cy.out) // uncomment for debugging
