---
title: 'Apparatus Framework'
---

# ASTo - Apparatus Software Tool

## An IoT network security analysis and visualization tool

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![travis build](https://travis-ci.org/Or3stis/apparatus.svg?branch=master)
[![devDependencies Status](https://david-dm.org/or3stis/apparatus/dev-status.svg)](https://david-dm.org/or3stis/apparatus?type=dev)
<!-- [![dependencies Status](https://david-dm.org/or3stis/apparatus.svg)](https://david-dm.org/or3stis/apparatus) -->

ASTo is security analysis tool for IoT networks. It is developed to support the Apparatus security framework. ASTo is based on
[electron](http://electron.atom.io/) and
[cytoscape.js](http://js.cytoscape.org/). The icons are provided by Google's [Material Design](https://material.io/icons/).

The application is in alpha stage. The focus now is to improve the core functionality of the application along with the introduction of additional features, in order to reach beta stage.

Some screenshots

![asto home](https://raw.githubusercontent.com/Or3stis/apparatus/master/assets/screenShot1.png)

![asto UI 1](https://raw.githubusercontent.com/Or3stis/apparatus/master/assets/screenShot2.png)

![asto UI 2](https://raw.githubusercontent.com/Or3stis/apparatus/master/assets/screenShot3.png)

![asto UI 2](https://raw.githubusercontent.com/Or3stis/apparatus/master/assets/screenShot4.png)

## Color themes

ASTo supports a light and a dark color theme. The colors themes are based on Atom's [One Dark](https://github.com/atom/one-dark-syntax) and [One Light](https://github.com/atom/one-light-syntax). You can switch between the themes by typing `toggle` in ASTo's console (bottom right corner, cmd/ctrl + l). To make the change persistent between startups you need to modify the `settings.colorTheme` variable in the `./app/settings/settings.js` file. The value can either be `dark` or `light`.

## Experimental features

ASTo can generate graph files from network captures files (.pcapng). This is part of an ongoing process to automate certain parts of the plebeian and time-consuming task of graph creation. The `pcapng` import feature is only available from the implementation phase menu. It uses `tcpdump` to create a `txt` with the current timestamp and then uses the `txt` to create the `js` file of the graph. The `txt` file is created for debugging purposes and will be deprecated in later commits. The generated files are stored in the `graphs/implementation` directory. If you want to know more about how this feature works, visit the [wiki](https://or3stis.github.io/apparatus/wiki#generate-graphs-from-pcapng-files-experimental-feature).

Tcpdump is installed by default on Unix based systems. If `tcpdump` is not installed in your system, the tool will display an error message.

\- _Note in performance_. If you render a graph with more than a thousand nodes, depending on your hardware, you might detect some performance issues. The reason is that the default label rendering of nodes and edges in ASTo is quite expensive. Rendering label on nodes and edges along with directional arrows is expensive. To improve performance you can hide the labels and the directional arrows by pressing the `1` button in the bottom right corner. The `1` button hides all the specific styles imposed by ASTo and leaves a default graph. Button `2` restores the labels on both the nodes and the edges, along with the directional arrows. Buttons `3` (node label) `4`(node id) `5`(node description) replace the labels on the nodes with different information. A trick to improve performance while retaining some information is to only hide the directional arrows (which are the most expensive) and the labels on the edges. To do so, press `1` to hide everything and then either `3` `4` or `5` to only show the labels on the nodes.

You can find more information about Cytoscape's performance optimizations in this [link](http://js.cytoscape.org/#performance).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer. To download and install the app, type the following in your terminal:

```bash
# Clone this repository
git clone https://github.com/Or3stis/apparatus.git
# Go into the repository
cd apparatus
# Install dependencies
npm install
# to run the app in the default mode
npm start
# to run the app in developer mode
npm run dev
```

Because the app is still in prototype stage, it is best to keep up to date with the most recent commits. To do so, before starting the app, type:

```bash
# inside the apparatus directory

# update to latest
git pull
```

Once the app starts, the first window (home screen) will ask you to choose which modeling phase would you like to perform analysis in. After you select a phase, you will be presented with three choices. The first is to create a new graph. The second choice is to load an existing graph. By default, you can only choose `.js` or `.json` files. The layout of the loaded graph is set in `/src/helpers/cyOptions.js` and it will run a breadth-first placement algorithm. The third option is the debug app, which loads a default graph used for debugging purposes.

You will find some example graphs in the `graphs` folder.

## Instructions

If you want to contribute that's great 😃. Check the [contributing](https://github.com/Or3stis/apparatus/blob/master/CONTRIBUTING.md) guide. The application is being developed on Mac. That means that new commits might introduce breaking changes in other platforms. Especially commits that involve access to the file system. If something is not working, don't hesitate to create an [issue](https://github.com/Or3stis/apparatus/issues).

If you want to find out how the app works check the [docs](https://or3stis.github.io/apparatus/docs).

You can check the project's planned features in the [roadmap](https://or3stis.github.io/apparatus/roadmap).

## Thanks

A shoutout to [@NOMNUDS](https://github.com/NOMNUDS) and [@nickarg](https://github.com/nickarg) who provide the much-needed feedback on Windows.

### License [MIT](LICENSE.md)
