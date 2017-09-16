'use strict'

// helper function to remove elements from the dom
module.exports = function (parentElement, childElement) {
  const parentEl = document.getElementById(parentElement)
  const formEl = document.getElementById(childElement)

  // check if element exists before removing it
  if (formEl !== null) parentEl.removeChild(formEl)
}
