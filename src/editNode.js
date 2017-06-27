'use strict'

// dynamically edit nodes

// remove the created form element
const removeNode = () => {
  const parentEl = document.getElementById('info-nodes-id')
  const formEl = document.getElementById('form-id')
  if (formEl !== null) {
    parentEl.removeChild(formEl)
  }
}

// create the form element
const formNode = (selectedNode) => {
  const htmlElement = document.getElementById('info-nodes-id')
  const form = document.createElement('form')
  form.className = 'bubble'
  form.id = 'form-id'

  let label = ''
  let input = ''
  let inputIds = []

  const nodeData = selectedNode.data().info
  Object.keys(nodeData).map((key) => {
    // won't display the concept attribute
    if (key !== 'concept') {
      label = document.createElement('label')
      input = document.createElement('input')
      input.className = 'input-form'
      // create an key-based id
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

  const idForm = document.getElementById('form-id')
  // capture the changed values of the node
  idForm.onsubmit = () => {
    inputIds.map((keyValue) => {
      let id = document.getElementById(keyValue)
      selectedNode.data().info[keyValue] = id.value
    })
    // to remove it
    removeNode()
    // return false to prevent the default form behavior
    return false
  }
}

module.exports = {
  removeNode: removeNode,
  formNode: formNode
}
