'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = {
  switchLightTheme: () => {
    document.getElementsByTagName('body')[0].style.background = '#f5f5f5'
    document.getElementsByTagName('body')[0].style.color = '#35495d'
    document.getElementsByClassName('graph')[0].style.background = '#ecf0f1'
    let buttonValues = document.getElementsByClassName('button')
    Object.keys(buttonValues).map((i) => {
      buttonValues[i].style.color = '#35495d'
    })
  },

  switchThemeDark: () => {
    document.getElementsByTagName('body')[0].style.background = '#35495d'
    document.getElementsByTagName('body')[0].style.color = '#e0e0e0'
    document.getElementsByClassName('graph')[0].style.background = '#2d3e4f'
    let buttonValues = document.getElementsByClassName('button')
    Object.keys(buttonValues).map((i) => {
      buttonValues[i].style.color = '#e0e0e0'
    })
  }
}
