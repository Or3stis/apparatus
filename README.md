# Graphical network security analysis tool

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) ![](https://travis-ci.org/Or3stis/apparatus.svg?branch=master)

A graphical security analysis tool for networks based on
[electron](http://electron.atom.io/) and
[sigma.js](http://sigmajs.org/).

The application is still in prototyping stage, which means a lot of
functionality is being added with each commit, along with massive changes in
about everything.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/Or3stis/apparatus.git
# Go into the repository
cd apparatus
# Install dependencies and run the app
npm install && npm start
```
## Instructions

The application uses sigma.js to parse a JSON file and generate the graph of the
network. In order to do security analysis the JSON has to follow a specific
schema that is not finalized yet. The basic idea is to extend the node objects
with a new object that will have information necessary for security analysis.
You can see some examples of properly structured JSON files in the JSON folder.

#### License [CC0 (Public Domain)](LICENSE.md)
