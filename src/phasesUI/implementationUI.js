'use strict'

const phaseMenu = require('../../src/phaseMenu.js')

module.exports = function implementationUI () {
  // shows design phase on the title
  const title = document.getElementById('title-bar-id')
  title.innerHTML = `implementation phase`

  // show sidebars
  const actionBar = document.getElementById('action-bar-id')
  actionBar.style.display = 'block'
  const sidebar = document.getElementById('sidebar-id')
  sidebar.style.display = 'block'

  // binds the design phase buttons on the UI
  const dgnComponents = document.getElementById('components-id')

  dgnComponents.innerHTML = `
  <div class="dropdown" id="add-component-id">
    <button class="button-icon dropbtn">
      <svg width="24" height="24">
        <use xlink:href="icons/add-node.svg#add-node" class="icon"></use>
     </svg>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#device">device</a></li>
      <li><a href="#network connection">network connection</a></li>
      <li><a href="#application">application</a></li>
      <li><a href="#information">information</a></li>
      <li><a href="#micronet">micronet</a></li>
      <li><a href="#threat">threat</a></li>
      <li><a href="#vulnerability">vulnerability</a></li>
      <li><a href="#asset">asset</a></li>
      <li><a href="#constraint">constraint</a></li>
      <li><a href="#mechanism">mechanism</a></li>
      <li><a href="#actor">actor</a></li>
      <li><a href="#malicious actor">malicious actor</a></li>
      <li><a href="#unidentified node">unidentified node</a></li>
      <li><a href="#net">net</a></li>
      <li><a href="#event sensor">event sensor</a></li>
      <li><a href="#report sensor">report sensor</a></li>
      <li><a href="#control sensor">control sensor</a></li>
    </ul>
  </div>

  <button class="button-icon" id="add-edge" title="connection">
    <svg width="24" height="24">
      <use xlink:href="icons/connection.svg#connection" class="icon"></use>
    </svg>
  </button>

  <button class="button-icon" id="delete" title="remove">
    <svg width="24" height="24">
      <use xlink:href="icons/remove.svg#remove" class="icon"></use>
    </svg>
  </button>

  <div class="dropdown" id="selection-id">
    <button class="button-icon dropbtn">
      <svg width="24" height="24">
        <use xlink:href="icons/list.svg#list" class="icon"></use>
      </svg>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#device">device</a></li>
      <li><a href="#network connection">network connection</a></li>
      <li><a href="#application">application</a></li>
      <li><a href="#information">information</a></li>
      <li><a href="#micronet">micronet</a></li>
      <li><a href="#threat">threat</a></li>
      <li><a href="#vulnerability">vulnerability</a></li>
      <li><a href="#asset">asset</a></li>
      <li><a href="#constraint">constraint</a></li>
      <li><a href="#mechanism">mechanism</a></li>
      <li><a href="#actor">actor</a></li>
      <li><a href="#malicious actor">malicious actor</a></li>
      <li><a href="#unidentified node">unidentified node</a></li>
      <li><a href="#net">net</a></li>
      <li><a href="#event sensor">event sensor</a></li>
      <li><a href="#report sensor">report sensor</a></li>
      <li><a href="#control sensor">control sensor</a></li>
    </ul>
  </div>

  <div class="dropdown" id="module-group">
    <button class="button-icon dropbtn">
      <svg width="24" height="24">
        <use xlink:href="icons/module.svg#module" class="icon"></use>
      </svg>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#network">network</a></li>
      <li><a href="#security">security</a></li>
      <li><a href="#social">social</a></li>
      <li><a href="#sensing">sensing</a></li>
      <li><a href="#network-security">network-security</a></li>
      <li><a href="#network-sensing">network-sensing</a></li>
      <li><a href="#security-sensing">security-sensing</a></li>
      <li><a href="#network-social">network-social</a></li>
    </ul>
  </div>

  <div class="dropdown" id="layout-button">
    <button class="button-icon dropbtn" title="layout options">
      <svg width="24" height="24">
        <use xlink:href="icons/group.svg#group" class="icon"></use>
      </svg>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#cose">cose</a></li>
      <li><a href="#breadthfirst">breadthfirst</a></li>
      <li><a href="#breadthfirst(circle)">breadthfirst(circle)</a></li>
      <li><a href="#circle">circle</a></li>
      <li><a href="#grid">grid</a></li>
    </ul>
  </div>

  <button class="button-icon" id="neighbors-button" title="show neighbors">
    <svg width="24" height="24">
      <use xlink:href="icons/share.svg#share" class="icon"></use>
    </svg>
  </button>

  <button class="button-icon" id="threat-verify-button" title="threat verification">
    <svg width="24" height="24">
      <use xlink:href="icons/security.svg#security" class="icon"></use>
    </svg>
  </button>

  <button class="button-icon" id="vuln-verify-button" title="vulnerability verification">
    <svg width="24" height="24">
      <use xlink:href="icons/lock_open.svg#lock_open" class="icon"></use>
    </svg>
  </button>

  <button class="button-icon" id="find-vuln-button" title="search vulnerabilities">
    <svg width="24" height="24">
      <use xlink:href="icons/eye.svg#eye" class="icon"></use>
    </svg>
  </button>

  <button class="button-icon" id="model-validate-button" title="model validation">
    <svg width="24" height="24">
      <use xlink:href="icons/check.svg#check" class="icon"></use>
    </svg>
  </button>

  <button class="button-icon" id="pattern-button" title="patterns">
    <svg width="24" height="24">
      <use xlink:href="icons/search.svg#search" class="icon"></use>
    </svg>
  </button>


  <button class="button-icon" id="overview-button" title="overview">
    <svg width="24" height="24">
      <use xlink:href="icons/explore.svg#explore" class="icon"></use>
    </svg>
  </button>

  <button class="button-icon" id="save-button">
    <svg width="24" height="24">
      <use xlink:href="icons/save.svg#save" class="icon"></use>
    </svg>
  </button>

  <!-- <button class="button-icon" id="load-button">
    <svg width="24" height="24">
      <use xlink:href="icons/folder.svg#folder" class="icon"></use>
    </svg>
  </button> -->

  <form>
    <button class="button-icon" id="home-button-id" type="submit" formaction="index.html" title="home">
      <svg width="24" height="24"><use xlink:href="icons/home.svg#home" class="icon"></use>
      </svg>
    </button>
  </form>

  <button class="button-icon" id="test-button" title="test">
    <svg width="24" height="24">
      <use xlink:href="icons/bug.svg#bug" class="icon"></use>
    </svg>
  </button>

  <div class="label-wrapper" id="label-wrapper-id">
    <button class="label-button" id="hide-label" title="hide labels">1</button>
    <button class="label-button" id="show-label-edge" title="show edge labels">2</button>
    <button class="label-button" id="show-label-node" title="show node labels">3</button>
    <button class="label-button" id="show-node-id" title="show nodes id">4</button>
    <button class="label-button" id="show-node-disc" title="show node description">5</button>
  </div>

</div>`

  phaseMenu('implementation')
}
