---
title: "Roadmap"
---
# ASTo - Roadmap

## Before alpha release

Improvements on the functionality of the tool.

- [✓] add search form that will replace the filter buttons
- [✓] need to put an add node option
- [✓] add a right click option to the nodes
- [✓] add form when right clicking a node to add an edge to another
- [✓] finish the validation module
- [✓] add selection to add new nodes
- [✓] add vulnerability to network connection
- [✓] Make edge only to valid connections. Check source if valid to target.
- [✓] Add more info in the label. Make a toggle button
- [✓] move the edges functions into models
- [✓] Change property to objective
- [✓] Change the opacity of the buttons
- [✓] remove edges
- [✓] reset filters
- [✓] Change the em to px
- [✓] dynamically edit nodes
- [✓] Show the selected edge or remove selection when clicking on something else
- [✓] edges should not connect the same node
- [✓] make live validation on the new edges. Do not allow edges to connect to wrong nodes
- [✓] remove text selection when double clicking the graph
- [✓] fix the flex option in css, the first element does not have the whole height of the window
- [✓] add command console
- [✓] search attributes from the command console
- [✓] add hotkeys (backspace, cmd + e to add edge)
- [✓] add more filtering options
- [✓] add flags
- [✓] fix the overlay of the information bubble
- [✓] add graph setting to the config file
- [✓] fix the undo
- [✓] load/open function
- [✓] make the metamodels into a module object
- [✓] add total number of nodes
- [✓] add individual  number of nodes
- [✓] add different background in the graph
- [✓] vulnerability identification from cve database
- [✓] change console color on focus
- [✓] save file in every action
- [✓] add nodes using a template
- [✓] add design statecharts
- [✓] add implementation statecharts
- [✓] add help window with metamodels
- [✓] add `clear` command in keyboard.js
- [✓] add analysis option when clicking a node (highlight, delete)
- [✓] focus on node edit form
- [✓] show/hide labels
- [✓] add specific types of edges
- [✓] disallow wrong edges
- [✓] change between the phases
- [✓] fix keybinding as external module
- [✓] smart placement when adding new nodes
- [✓] import from pcap-ng files
- [✓] load is not working
- [✓] button to show node id
- [✓] choose pattern keywords
- [✓] Filter by concept
- [✓] change buttons to icons
- [✓] move total inside the graph
- [✓] save as hotkey
- [✓] add edge hotkey
- [✓] improve output on Overview.js
- [✓] option for new file
- [✓] different layout options
- [✓] cross-platform keybindings
- [✓] highlight target node selection
- [✓] remove node position when adding a node
- [✓] add wiki url to help menu
- [✓] add common port services when creating application concepts with pcapng import
- [✓] check if device IP exists when creating devices nodes with pcapng import

## alpha release

- [✓] move to a single page architecture
- [✓] fix resize issues
- [✓] use electron dialog when prompting for module operations
- [✓] move core to core functions and core buttons
- [✓] improve the import pcapng module
- [✓] detect changes in the model to prompt for save
- [✓] generate report
- [✓] add model transformation rules
- [✓] add dynamic color themes
- [✓] add expose option to graphs to show the information on all the nodes
- [✓] add a menu bar
- [✓] add a developer option on `npm run` that will allow refresh, hot reloading and other developer features
- [✓] disallow page refresh (cmd + r) on non-developer mode
- [✓] identify and highlight insecure patterns
- [ ] configurable insecure patterns
- [ ] create a new file to save when starting a new model
- [ ] autosave the changes to current working file, but confirm the location first
- [✓] toggle button for light/dark theme
- [ ] window for settings
- [ ] interactive metamodel window

## beta release

- [✓] configure electron-builder
- [✓] design an app icon
- [ ] configure auto-update with electron-builder
- [ ] fix the settings options on the binary
- [ ] autocompletion in the console
- [ ] build step to produce binaries for windows and linux
