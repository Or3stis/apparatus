'use strict'

const load = require('./src/core/load.js')

let cy = {}

// loads a file on start
load(cy) // comment for debugging

/*
The default behavior of the app (asking to load graphs) can be annoying
when developing new features. To prevent that, uncomment the code below and
comment everything above it. It loads a hard coded graph every time you reload
the app.
*/

// uncomment the code below for debugging

// const testGraph = '../../graphs/implementation/smartHome.js'
// const initialize = require('./src/initialize.js')
// const cyOptions = require('./src/core/cyOptions.js')
//
// let cy = {}
// cyOptions(cy, testGraph) // uncomment for debugging
// initialize(cy.out) // uncomment for debugging
