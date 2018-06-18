# 5G-SAT - 5G Security Analysis Tool

## An 5G security analysis and visualization tool

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![travis build](https://travis-ci.org/Or3stis/apparatus.svg?branch=master)
[![dependencies Status](https://david-dm.org/or3stis/apparatus.svg)](https://david-dm.org/or3stis/apparatus)
[![devDependencies Status](https://david-dm.org/or3stis/apparatus/dev-status.svg)](https://david-dm.org/or3stis/apparatus?type=dev)

5G-SAT is security analysis tool for 5G systems. It is a fork of the IoT security analysis tool [ASTo](https://github.com/Or3stis/apparatus). 5G-SAT is based on
[electron](http://electron.atom.io/) and
[cytoscape.js](http://js.cytoscape.org/). The icons are provided by Google's [Material Design](https://material.io/icons/).

Some screenshots..

![](https://raw.githubusercontent.com/CapriTechLimited/5G-SAT/master/assets/screenShot1.png)

![](https://raw.githubusercontent.com/CapriTechLimited/5G-SAT/master/assets/screenShot2.png)

![](https://raw.githubusercontent.com/CapriTechLimited/5G-SAT/master/assets/screenShot3.png)

![](https://raw.githubusercontent.com/CapriTechLimited/5G-SAT/master/assets/screenShot4.png)

![asto UI 2](https://raw.githubusercontent.com/Or3stis/apparatus/master/assets/screenShot3.png)

5G-SAT supports a light and a dark color theme. The colors themes are based on Atom's [One Dark](https://github.com/atom/one-dark-syntax) and [One Light](https://github.com/atom/one-light-syntax). You can switch between the themes by typing `toggle` in ASTo's console (bottom right corner, cmd/ctrl + l). To make the change persistent between startups you need to modify the `config.colorTheme` variable in the `./app/settings/config.js` file. The value can either be `dark` or `light`.


## Color themes

ASTo supports a light and a dark color theme. The colors themes are based on Atom's [One Dark](https://github.com/atom/one-dark-syntax) and [One Light](https://github.com/atom/one-light-syntax). To switch between themes use the toggle button on the bottom left corner.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer. To download and install the app, type the following in your terminal:

```bash
# Clone this repository
git clone https://github.com/CapriTechLimited/5G-SAT.git
# Go into the repository
cd 5G-SAT
# Install dependencies
npm install
```

Different mode operations of the app.

```bash
# To run the app in the default mode
npm start
# To run the app in developer mode
npm run dev
# To build the app into binary
npm run dist
```

Because the app is still in prototype stage, it is best to keep up to date with the most recent commits. To do so, before starting the app, type:

```bash
# inside the 5G-SAT directory

# update to latest
git pull
```

Once the app starts, the first window (home screen) will ask you to choose which modeling phase would you like to perform analysis in. After you select a phase, you will be presented with three choices. The first is to create a new graph. The second choice is to load an existing graph. The third option is the debug app, which loads a default graph used for debugging purposes.

You will find some example graphs in the `sample` folder.

\- _Note in performance_. If you render a graph with more than a thousand nodes, depending on your hardware, you might detect some performance issues. The reason is that the default label rendering of nodes and edges in ASTo is quite expensive. Rendering label on nodes and edges along with directional arrows is expensive. To improve performance you can hide the labels and the directional arrows by pressing the `label` button.

You can find more information about Cytoscape's performance optimizations in this [link](http://js.cytoscape.org/#performance).

## Contributing

If you want to contribute that's great news 😃. Check the [contributing](https://github.com/CapriTechLimited/5G-SAT/blob/master/CONTRIBUTING.md) guide. The application is being developed on Mac. That means that new commits might introduce breaking changes in other platforms. Especially commits that involve access to the file system. If something is not working, don't hesitate to create an [issue](https://github.com/CapriTechLimited/5G-SAT/issues).

<!-- If you want to find out how the app works check the [wiki](https://github.com/CapriTechLimited/5G-SAT/wiki). -->

<!-- You can check the project's planned features in the [roadmap](https://github.com/Or3stis/apparatus/wiki/Roadmap). -->


### License [MIT](LICENSE.md)
