'use strict'

const printChat = require('../helpers/printChat.js')
const rmElement = require('../helpers/rmElement.js')

module.exports = function patterns (cy) {
  // search pattern
  const searchPattern = pattern => {
    // flagged attributes
    let flaggedNodes = ''
    // apply the faded class to all the elements
    cy.elements().addClass('faded')

    // check all the nodes in graph for the search terms
    cy.nodes().map(node => {
      const nodeData = node.data().info
      Object.keys(nodeData).map(value => {
        pattern.map(i => {
          if (nodeData[value] === i) {
            flaggedNodes += `• ${node.data().label} -> ${i}\n`
            // remove faded class from the search nodes
            node.removeClass('faded')
          }
        })
      })
    })

    printChat(flaggedNodes)
  }

  const htmlElement = document.getElementById('info-nodes-id')

  // create the patter element
  const form = document.createElement('form')
  form.className = 'bubble'
  form.id = 'form-id'
  let label = document.createElement('label')
  let input = document.createElement('input')
  input.className = 'input-form'
  input.id = 'pattern-id'
  input.type = 'text'
  label.textContent = `keywords (spaces): `
  form.appendChild(label)
  form.appendChild(input)

  // create a submit button
  const submit = document.createElement('input')
  submit.className = 'submit-form'
  submit.type = 'submit'
  submit.value = 'Submit'
  form.appendChild(submit)
  htmlElement.appendChild(form)

  const formId = document.getElementById('form-id')
  formId.onsubmit = () => {
    let keywords = document.getElementById('pattern-id')
    let pattern = `${keywords.value}`.split(' ')

    rmElement('info-nodes-id', 'form-id')

    searchPattern(pattern)
    // return false to prevent the default form behavior
    return false
  }

  // focus on the input of the form
  document.getElementById('pattern-id').focus()
}
