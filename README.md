# ASTo - Apparatus Software Tool

## An IoT network security analysis tool and visualizer

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) ![](https://travis-ci.org/Or3stis/apparatus.svg?branch=master)

ASTo is security analysis tool for IoT networks. It is developed to support the Apparatus security framework. ASTo is based on
[electron](http://electron.atom.io/) and
[cytoscape.js](http://js.cytoscape.org/).

The application is still in prototyping stage, which means a lot of
functionality is being added with each commit, along with massive changes in
almost everything.

Some screenshots..

![](https://raw.githubusercontent.com/Or3stis/apparatus/master/assets/screenShot1.png)

![](https://raw.githubusercontent.com/Or3stis/apparatus/master/assets/screenShot2.png)

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer. To download and install the app, type the following in your terminal:

```bash
# Clone this repository
git clone https://github.com/Or3stis/apparatus.git
# Go into the repository
cd apparatus
# Install dependencies and run the app
npm install && npm start
```
## Instructions

ASTo uses cytoscape.js to render an IoT system as a graph diagram. The concepts (nodes and edges) follow the Apparatus ontology. The modeling language is encoded in a json schema (not finalized). The schemas are located in the `src/design/dgnSchema.js` and `src/`implementation/impSchema.js`

The style of the app can be configured by the user. The values are located in the `style` folder.

#### License [MIT](LICENSE.md)
