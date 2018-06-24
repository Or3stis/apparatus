// dynamically edit nodes

const rmElement = require('../helpers/rmElement.js')

// options of the enumerated selections
const layerOptions = ['perception', 'gateway', 'application']
const inOutOptions = [
  'dataDigital',
  'dataEnvironmental',
  'command',
  'action',
  'notification',
  'trigger'
]

/**
 * creates dynamic selections for enumerated values
 *
 * @param {string} selectionForm form div element (= form)
 * @param {string} selectionKey iterator of node element
 * @param {Array} selectionOptions options of the enumerated selections
 * @param {Object} data node element data (= nodeData)
 * @param {Array} ids id div element (= inputIds)
 */
const selectionLayout = (
  selectionForm,
  selectionKey,
  selectionOptions,
  data,
  ids
) => {
  const selectionLabel = document.createElement('label')
  selectionLabel.setAttribute('for', selectionKey)
  selectionLabel.textContent = 'layer:'

  const selectionList = document.createElement('select')
  selectionList.className = 'input-form'
  selectionList.id = selectionKey

  const keyToFind = data[selectionKey]
  const index = selectionOptions.indexOf(keyToFind)

  selectionForm.appendChild(selectionLabel)
  selectionForm.appendChild(selectionList)
  selectionOptions.map(value => {
    let option = document.createElement('option')
    option.value = value
    option.text = value
    selectionList.appendChild(option)
  })
  // set the value the stored selection
  selectionList.selectedIndex = index
  // store the keys to later render them dynamically
  ids.push(selectionKey)
}

/**
 * creates a form to edit the node
 *
 * @param {Object} selectedNode selected node
 */
const createForm = selectedNode => {
  const htmlElement = document.getElementById('message-area-id')
  const form = document.createElement('form')
  form.className = 'bubble'
  form.id = 'form-id'

  let inputIds = []

  const nodeData = selectedNode.data().asto
  Object.keys(nodeData).map(key => {
    if (key === 'layer') {
      // device layer attribute
      selectionLayout(form, key, layerOptions, nodeData, inputIds)
    } else if (key === 'input' || key === 'output') {
      // device input/output
      selectionLayout(form, key, inOutOptions, nodeData, inputIds)
    } else if (key !== 'concept') {
      // won't display the concept attribute
      const label = document.createElement('label')
      const input = document.createElement('input')
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

  // capture the changed values of the node
  const formId = document.getElementById('form-id')
  formId.onsubmit = () => {
    inputIds.map(keyValue => {
      let id = document.getElementById(keyValue)
      selectedNode.data().asto[keyValue] = id.value
    })
    // remove elements once the submit is clicked
    rmElement('message-area-id', 'form-id')
    // return false to prevent the default form behavior
    return false
  }

  // focus on the description attribute of the form
  document.getElementById('description').focus()
}

/**
 * add/remove the form element
 *
 * @param {Object} selectedNode selected node
 */
const formNode = selectedNode => {
  const form = document.getElementById('form-id')
  if (form !== null) {
    rmElement('message-area-id', 'form-id')
    createForm(selectedNode)
  } else if (form === null) {
    createForm(selectedNode)
  }
}

module.exports = {
  formNode
}
