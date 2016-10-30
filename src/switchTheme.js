const config = require('./config')

'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = {
  switchLightTheme: () => {
    document.getElementsByTagName('body')[0].style.background = config.white
    document.getElementsByTagName('body')[0].style.color = config.black
    document.getElementsByClassName('graph')[0].style.background = config.darkWhite
    // document.getElementsByClassName('footer')[0].style.background = darkWhite

    let buttonValues = document.getElementsByClassName('button')
    Object.keys(buttonValues).map((i) => {
      buttonValues[i].style.color = config.black
    })

    let selectionValues = document.getElementsByClassName('selection')
    Object.keys(selectionValues).map((i) => {
      selectionValues[i].style.color = config.black
    })
  },

  switchThemeDark: () => {
    document.getElementsByTagName('body')[0].style.background = config.black
    document.getElementsByTagName('body')[0].style.color = config.veryLightGray
    document.getElementsByClassName('graph')[0].style.background = config.deepBlack
    // document.getElementsByClassName('footer')[0].style.background = black

    let buttonValues = document.getElementsByClassName('button')
    Object.keys(buttonValues).map((i) => {
      buttonValues[i].style.color = config.veryLightGray
    })

    let selectionValues = document.getElementsByClassName('selection')
    Object.keys(selectionValues).map((i) => {
      selectionValues[i].style.color = config.veryLightGray
    })
  }
}
