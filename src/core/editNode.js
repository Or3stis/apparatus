'use strict'

// dynamically edit nodes

const rmElement = require('../helpers/rmElement.js')

// create the form
const createForm = selectedNode => {
  const htmlElement = document.getElementById('info-nodes-id')
  const form = document.createElement('form')
  form.className = 'bubble'
  form.id = 'form-id'

  let label = ''
  let input = ''
  let inputIds = []

  const nodeData = selectedNode.data().info
  Object.keys(nodeData).map(key => {
    // won't display the concept attribute
    if (key !== 'concept') {
      label = document.createElement('label')
      input = document.createElement('input')
      input.className = 'input-form'
      // create an key-based id
      // to iterate on the submitted attributes
      input.id = key
      input.type = 'text'
      input.name = 'nodeValue'
      input.value = nodeData[key]

      label.setAttribute('for', key)
      label.textContent = `${key}: `
      form.appendChild(label)
      form.appendChild(input)
      // store the keys to later render them dynamically
      inputIds.push(key)
    }
  })

  // create a submit button
  const submit = document.createElement('input')
  submit.className = 'submit-form'
  submit.type = 'submit'
  submit.value = 'Submit'
  form.appendChild(submit)
  htmlElement.appendChild(form)

  const formId = document.getElementById('form-id')
  // capture the changed values of the node
  formId.onsubmit = () => {
    inputIds.map(keyValue => {
      let id = document.getElementById(keyValue)
      selectedNode.data().info[keyValue] = id.value
    })
    // remove elements once the submit is clicked
    rmElement('info-nodes-id', 'form-id')
    // return false to prevent the default form behavior
    return false
  }

  // focus on the description attribute of the form
  document.getElementById('description').focus()
}

// create the form element
const formNode = selectedNode => {
  const form = document.getElementById('form-id')
  if (form !== null) {
    rmElement('info-nodes-id', 'form-id')
    createForm(selectedNode)
  } else if (form === null) {
    createForm(selectedNode)
  }
}

module.exports = {
  formNode: formNode
}
