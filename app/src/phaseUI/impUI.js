const phaseMenu = require('../../src/phaseMenu.js')

/** loads the implementation phase UI */
module.exports = function implementationUI () {
  // shows design phase on the title
  const title = document.getElementById('title-phase-id')
  title.textContent = `implementation phase`

  // show sidebars
  const actionBar = document.getElementById('action-bar-id')
  actionBar.style.display = 'block'
  const sidebar = document.getElementById('sidebar-id')
  sidebar.style.display = 'block'

  // binds the design phase buttons on the UI
  const dgnComponents = document.getElementById('components-id')

  dgnComponents.innerHTML = `
  <div class="dropdown">
    <button class="icon-button dropbtn">
      <svg width="24" height="24">
        <use xlink:href="icons/add-node.svg#add-node" class="icon"></use>
     </svg>
    </button>
    <ul class="dropdown-menu" id="add-component-id">
      <li><a>device</a></li>
      <li><a>connection</a></li>
      <li><a>application</a></li>
      <li><a>information</a></li>
      <li><a>micronet</a></li>
      <li><a>net</a></li>
      <li><a>actor</a></li>
      <li><a>asset</a></li>
      <li><a>threat</a></li>
      <li><a>vulnerability</a></li>
      <li><a>malicious actor</a></li>
      <li><a>constraint</a></li>
      <li><a>mechanism</a></li>
    </ul>
  </div>

  <button class="icon-button" id="add-edge" title="connection">
    <svg width="24" height="24">
      <use xlink:href="icons/add-edge.svg#add-edge" class="icon"></use>
    </svg>
  </button>

  <button class="icon-button" id="delete" title="remove">
    <svg width="24" height="24">
      <use xlink:href="icons/remove.svg#remove" class="icon"></use>
    </svg>
  </button>

  <div class="dropdown">
    <button class="icon-button dropbtn">
      <svg width="24" height="24">
        <use xlink:href="icons/list.svg#list" class="icon"></use>
      </svg>
    </button>
    <ul class="dropdown-menu" id="selection-id">
      <li><a>device</a></li>
      <li><a>connection</a></li>
      <li><a>application</a></li>
      <li><a>information</a></li>
      <li><a>micronet</a></li>
      <li><a>net</a></li>
      <li><a>actor</a></li>
      <li><a>asset</a></li>
      <li><a>threat</a></li>
      <li><a>vulnerability</a></li>
      <li><a>malicious actor</a></li>
      <li><a>constraint</a></li>
      <li><a>mechanism</a></li>
    </ul>
  </div>

  <div class="dropdown">
    <button class="icon-button dropbtn">
      <svg width="24" height="24">
        <use xlink:href="icons/module.svg#module" class="icon"></use>
      </svg>
    </button>
    <ul class="dropdown-menu" id="module-group">
      <li><a>network</a></li>
      <li><a>security</a></li>
      <li><a>social</a></li>
      <li><a>network-security</a></li>
      <li><a>network-social</a></li>
    </ul>
  </div>

  <div class="dropdown">
    <button class="icon-button dropbtn" title="layout options">
      <svg width="24" height="24">
        <use xlink:href="icons/layout.svg#layout" class="icon"></use>
      </svg>
    </button>
    <ul class="dropdown-menu" id="layout-btn">
      <li><a>cose</a></li>
      <li><a>breadthfirst</a></li>
      <li><a>breadthfirst(circle)</a></li>
      <li><a>circle</a></li>
      <li><a>grid</a></li>
      <li><a>concentric</a></li>
    </ul>
  </div>

  <div class="dropdown">
    <button class="icon-button dropbtn" title="label options">
      <svg width="24" height="24">
        <use xlink:href="icons/label.svg#label" class="icon"></use>
      </svg>
    </button>
    <ul class="dropdown-menu" id="labels-btn">
      <li><a>hide all labels</a></li>
      <li><a>show edge labels</a></li>
      <li><a>show node concepts</a></li>
      <li><a>show node IDs</a></li>
      <li><a>show node descriptions</a></li>
    </ul>
  </div>

  <button class="icon-button" id="threat-ver-btn" title="threat verification">
    <svg width="24" height="24">
      <use xlink:href="icons/security.svg#security" class="icon"></use>
    </svg>
  </button>

  <button class="icon-button" id="vuln-ver-btn" title="vulnerability verification">
    <svg width="24" height="24">
      <use xlink:href="icons/lock_open.svg#lock_open" class="icon"></use>
    </svg>
  </button>

  <button class="icon-button" id="find-vuln-btn" title="search vulnerabilities">
    <svg width="24" height="24">
      <use xlink:href="icons/eye.svg#eye" class="icon"></use>
    </svg>
  </button>

  <button class="icon-button" id="model-val-btn" title="model validation">
    <svg width="24" height="24">
      <use xlink:href="icons/check.svg#check" class="icon"></use>
    </svg>
  </button>

  <button class="icon-button" id="expose-btn" title="expose">
    <svg width="24" height="24">
      <use xlink:href="icons/explore.svg#explore" class="icon"></use>
    </svg>
  </button>

  <button class="icon-button" id="pattern-btn" title="patterns">
    <svg width="24" height="24">
      <use xlink:href="icons/search.svg#search" class="icon"></use>
    </svg>
  </button>

  <button class="icon-button" id="transition-btn">
    <svg width="24" height="24">
      <use xlink:href="icons/swap.svg#swap" class="icon"></use>
    </svg>
  </button>

  <button class="icon-button" id="save-btn">
    <svg width="24" height="24">
      <use xlink:href="icons/save.svg#save" class="icon"></use>
    </svg>
  </button>

  <!-- <button class="icon-button" id="load-button">
    <svg width="24" height="24">
      <use xlink:href="icons/folder.svg#folder" class="icon"></use>
    </svg>
  </button> -->

  <button class="icon-button" id="home-btn" title="home">
    <svg width="24" height="24">
      <use xlink:href="icons/home.svg#home" class="icon"></use>
    </svg>
  </button>

  <div class="toggle-wrapper">
    <input type="checkbox" id="theme-btn" class="toggle"/>
    <label for="theme-btn" class="toggle-label"></label>
  </div>`

  // links the implementationUI with the rest of the app
  phaseMenu('implementation')
}
