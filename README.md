# ASTo - Apparatus Software Tool

## An IoT network security analysis tool and visualizer

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) ![](https://travis-ci.org/Or3stis/apparatus.svg?branch=master)
[![dependencies Status](https://david-dm.org/or3stis/apparatus.svg)]()
[![devDependencies Status](https://david-dm.org/or3stis/apparatus/dev-status.svg)]()


ASTo is security analysis tool for IoT networks. It is developed to support the Apparatus security framework. ASTo is based on
[electron](http://electron.atom.io/) and
[cytoscape.js](http://js.cytoscape.org/). The icons are provided by Google's [Material Design](https://material.io/icons/).

The application is still in prototyping stage, which means a lot of
functionality is being added with each commit, along with massive changes in
almost everything.

Some screenshots..

![](https://raw.githubusercontent.com/Or3stis/apparatus/master/assets/screenShot1.png)

![](https://raw.githubusercontent.com/Or3stis/apparatus/master/assets/screenShot2.png)

![](https://raw.githubusercontent.com/Or3stis/apparatus/master/assets/screenShot3.png)

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer. To download and install the app, type the following in your terminal:

```bash
# Clone this repository
git clone https://github.com/Or3stis/apparatus.git
# Go into the repository
cd apparatus
# Install dependencies
npm install
# to run the app
npm start
```

Because the app is still in prototype stage, it is best to keep up to date with the most recent commits. To do so, before starting the app, type:

```bash
# inside the apparatus directory

# update to latest
git pull
```

The first window (home screen) will ask you to choose which modeling phase would you like to perform analysis in. After you select a phase, a native dialog window will be displayed and ask you choose a file to load. By default, you can only choose `.js` or `.json` files.

You will find some example graphs in the `graphs` folder.

## Instructions

If you want to contribute that's great news 😃. Check the [contributing](https://github.com/Or3stis/apparatus/blob/master/CONTRIBUTING.md) guide. The application is being developed on Mac. That means that new commits might introduce breaking changes in other platforms. Especially commits that involve access to the file system. If something is not working, don't hesitate to create an [issue](https://github.com/Or3stis/apparatus/issues).

If you want to find out how the app works check the [wiki](https://github.com/Or3stis/apparatus/wiki).

You can check the project's planned features in the [roadmap](https://github.com/Or3stis/apparatus/wiki/Roadmap).

## Thanks

A shoutout to [@NOMNUDS](https://github.com/NOMNUDS) who provides the much-needed feedback on Windows.


#### License [MIT](LICENSE.md)
