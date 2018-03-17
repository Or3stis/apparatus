/**
 * helper function to remove elements from the dom
 *
 * @param {Object} parentElement
 * @param {Object} childElement
 */
module.exports = function (parentElement, childElement) {
  const parentEl = document.getElementById(parentElement)
  const formEl = document.getElementById(childElement)

  // check if element exists before removing it
  if (formEl !== null) parentEl.removeChild(formEl)
}
