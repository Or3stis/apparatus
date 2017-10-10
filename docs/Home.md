# Under development 🚧

If you have a question that is not answered in the wiki, please make a pull request (or be patient and hope it will be answered in the future).

# Welcome to the apparatus wiki 🎉!

## What is Apparatus?

Apparatus is a security framework to facilitate security analysis in IoT systems. To make the usage of the Apparatus framework easier the ASTo app was created (ASTo stands for Apparatus Software Tool).

## The Apparatus Framework

A requirement to use ASTo is familiarity with the Apparatus framework. If you have the time and patience, the best way to understand the framework is to read some research papers that were written about it. However, you can always read this wiki.

1. [Apparatus: Reasoning About Security Requirements in the Internet of Things](https://www.researchgate.net/publication/303823220_Apparatus_Reasoning_About_Security_Requirements_in_the_Internet_of_Things)
1. [ASTo: A Tool for Security Analysis of IoT Systems](https://www.researchgate.net/publication/318126697_ASTo_A_tool_for_security_analysis_of_IoT_systems)
1. [A Conceptual Model to Support Security Analysis in the Internet of Things](https://www.researchgate.net/publication/318240418_A_conceptual_model_to_support_security_analysis_in_the_internet_of_things)

### Apparatus in a nutshell

The Apparatus Framework provides a modeling language and analysis procedures for an IoT system during the following phases:

1. design phase (model the idea of a system) [high-level concepts]
1. design phase state (model the idea of a system different states)
1. implementation phase (model the implemented system) [low-level concepts]
1. implementation phase state (model the different states of a system)

Each phase has different concepts and rules on how those concepts interact with each other. The concepts of each phase are defined via UML class diagrams that in turn define the metamodels of Apparatus. The metamodels are translated into schemas that ASTo uses to validate modules. To access each phases metamodel, you can type `metamodel` in the ASTo's command console (bottom right corner, cmd/ctrl + l).

The Apparatus Framework uses a graph-based front-end representation of models. We leverage powerful graph based algorithms for a variety of analysis tasks.

<!-- Figure 1. Design phase metamodel
![](https://raw.githubusercontent.com/Or3stis/apparatus/master/metamodels/dgn-model.png)

Figure 2. Design State phase metamodel
![](https://raw.githubusercontent.com/Or3stis/apparatus/master/metamodels/dgn-state-model.png)

Figure 3. Implementation phase metamodel
![](https://raw.githubusercontent.com/Or3stis/apparatus/master/metamodels/imp-model.png)

Figure 4. Implementation State phase metamodel
![](https://raw.githubusercontent.com/Or3stis/apparatus/master/metamodels/imp-state-model.png) -->

Some of the features of ASTo have not been published yet, but I will try to add them as documentation here.

## How to use ASTo

To aid the speed of development any action can either be performed by pressing a button or by a hotkey. Once the application is more mature I will focus on better user-friendly behavior and features.

## Color themes

ASTo supports a light and a dark color theme. The colors themes are based on Atom's [One Dark](https://github.com/atom/one-dark-syntax) and [One Light](https://github.com/atom/one-light-syntax). You can switch between the themes by typing `toggle` in ASTo's console (bottom right corner, cmd/ctrl + l). To make the change persistent between startups you need to modify the `config.colorTheme` variable in the `./config/config.js` file. The value can either be `dark` or `light`.

### ASTo's layout

ASTo follows a traditional three-column architecture.

1.  First column - Buttons
1.  Second column - Graph container
1.  Third column - Results bar and command console

#### First Column - Buttons

Buttons offer certain functions to manipulate the graph and perform analysis. Several buttons, such as the _Overview_ button or the _Show neighbor_ button are shared between the different modeling phases, each phase has certain unique buttons.

1.  **add component** button: the ➕ icon is used to add new nodes to the graph. If you hover over the button you will be presented with a list of the node option in the current modeling phase you are in. Each newly created node will be added to the top left of the graph container (I am having some issues with the smart placement of nodes). If the node is _not_ created, there are probably some issues with the new node's id and the ids of the existing nodes in the graph. Each node must have a unique id in order to be added to the graph. The `addComponent.js` and `initialize.js` modules try to create a new id, but bugs may occur. If that happens, feel free to file an issue.
1.  **add connection:** button: the next button is used to add edges between nodes. To add an edge you need to click on the _source_ node first, then on the _target_ node and then click the _connection_ button. The first clicked node is highlighted to blue. When you click on the second node, the color of your first selection is turned to orange and the newly selected node is turned blue. As a reminder _blue_ node ➞ _target_ and _orange_ node ➞ _source_. Once the _connection_ button is clicked, an edge with the corresponding relationship will be created. If the modeling language doesn't allow the connection between the nodes, an error will be displayed on the results bar.   
_keyBinding_: macOs: `cmd + e`, Linux/Windows: `ctrl + e`
1.  **delete component** button: you can delete nodes and edges by selecting the element and clicking the ➖ icon.   
_keyBinding_: macOs: `cmd + backspace`, Linux/Windows: `ctrl + backspace`.
1. **select component** button: you can highlight the selected class of nodes. All the other nodes in the graphs will be faded. Moreover, you can see the total number of the highlighted nodes in the bottom left corner of the graph.
1. **select module** button: the Apparatus Framework groups concepts that share a similar thematic context. For example, concepts that are used to express networking constructs such as _network connections_ or _devices_ belong to the _network module_. All the nodes that are part of the selected module are highlighted and their total number is shown in the bottom left corner of the graph. The **select module** button is only available during the _design_ and _implementation_ phases.
1. **layout options** button: is used to apply different layout algorithms to on the graph. The layout algorithms are located in `/src/core/layout.js`.
1. **overview** button: returns a list of the number of node classification on the graph.
1. **model validation** button: is used to validate a model according to the metamodel of the phase. This function is useful for checking the correctiveness of imported models, since the add edge function disallows wrong connections.
1. **save model** button: once pressed it will display a native save dialog. You can select the location of the saved file as well as its name. The file will be saved with `.json` extension.    
_keyBinding_: macOs: `cmd + shift + s`, Linux/Windows: `ctrl + shift + s`.
1. **home** button: once click it navigate you back to home menu (phase selection). When you hover over the `home` icon it will display a message `save first`. ASTo does not monitor the state of your model, so it cannot prompt to save on exit as you would expect from other applications. That feature will be implemented in the [alpha](https://github.com/Or3stis/apparatus/wiki/Roadmap) version.

To **edit a node**, you can right click on it and a form will be created. When adding a node components, the attributes of the node concept based on the modeling language will be added as well. However, the values of the attributes will be empty.

## Generate graphs from `pcapng` files [Experimental feature]

ASTo can generate graphs using `pcapng` files as an input. This option is only available from the implementation phase menu. t uses `tcpdump` to create a `txt` with the current timestamp and then uses the `txt` to create the `js` file of the graph. The `txt` file is created for debugging purposes and will be deprecated in later commits. The generated files are stored in the `graphs/implementation` directory. Tcpdump is installed by default on Unix based systems. If `tcpdump` is not installed in your system, you will get an error message.

This feature is still experimental and has few issues.

1. Depending on the `pcapng` file, the rendered graph might have some duplicate network connections. This is because the `txt` file holds information from incoming and outgoing traffic. That means that a source node will send data to a target node and the target node will send data back to the source node. That results in having the same connection twice but with opposing origins, something like this: `src ➞ trg` and `trg ➞ src`. I have some filtering mechanisms to prevent the duplicates but they are not perfect.
1. IPs that have more than one services running are rendered as separate nodes instead of a single node. That may be useful for some use case but is not compliant with the Apparatus framework. Apparatus uses the concept of 'application' to express services and software running on a device. The aim is to render every detected IP a device node and their services as application nodes.
1. ASTo uses `commonPorts.js` to pair identified ports with common services. For example, port 80 is commonly associated with HTTP and port 22 with SSH. The `commonPorts.js` is still under development. If you find a wrongly identified port, please open an issue.

## Performing security analysis

### Using the console

ASTo has a command line console available on the bottom right corner of the app. The console was implemented to enable a text based interface to the models. You gain focus on the console by pressing the keybinding <meta> + l. If you type `help`, it will display a list of keywords that can be used.

The most important feature of the console is the search function. You can type any keyword that is included in the model, and the corresponding nodes will be highlighted. For example, if you type `device`, all the nodes that have the keyword 'device' will be highlighted. You can search both the attributes of the nodes and their key values.

### Design phase (model the idea of a system)

Types of Analysis
* identify threats
* identify assets
* identify constraints
* outward facing nodes
* model social engineering attacks
* develop high-level security policy
* model access control tokens

### Design phase state (model the idea of a system different states)

Types of Analysis
* model different configurations of a system based on detected events
* identified events can be used as alerts in system monitoring applications

### Implementation phase (model the implemented system)

Types of Analysis
* identify threats
* identify vulnerabilities
* identify assets
* identify constraints
* identify mechanisms
* outward facing nodes
* model social engineering attacks
* develop low-level security policy
* simulate penetration tests
* model access control tokens

### Implementation phase state (model the different states of a system)

Types of Analysis
* model different configurations of a system based on detected events
* model different configurations of the system based on the used mechanisms
* identified events can be used as alerts in system monitoring applications

# The architecture of ASTo

ASTo was designed with modularity and extendability in mind. Each module performs a specific function.

As with any Electron application, the first file that is being executed is the `main.js`. The `main.js` renders the `index.html` which is used as the home page of the app, so we can navigate to the different development phases.

Each phase has its own `.html` file where its graphical interface is declared.

1. Design phase -> `design.html`
2. Design state phase -> `design-state.html`
3. Implementation phase -> `implementation.html`
4. Implementation state phase -> `implementation-state.html`

## The `src` directory

Inside the `/src` directory you will also notice separate directories for each engineering phase. This is where things start to get interesting 😏. The `core` directory holds all the global modules. The other directories hold the phase-specific modules for each analysis phase (design, design-state, implementation, implementation-state) supported by Apparatus.

The `/scr/index.js` is the main module of ASTo. ASTo has a modular approach. You will see very little logic inside the `index.js`. The majority of the app's logic is imported from external modules in the `initialize.js`.

`initialize.js` is responsible for importing the logic of the app from the other modules.

Inside the `initialize.js`, you will spot a `test` button. Most of the time, there will be no code inside it. I mostly use it to try new functions.

The other function of the `/src/initialize.js` is to define the behavior of the app when the user interacts with the graph. There 3 types of direct interaction with the graph.

1.  "tapping" on a node.
1.  "tapping" on an edge.
1.  "tapping" on the stage (background).

To capture those events, we use the [cytoscape.js](http://js.cytoscape.org) `.on` method with the `tap` argument. In the ASTo's code, you will see:

```
cy.on('tap', 'node', selection => {
  // do stuff when tapping on node
}
```

As mentioned before, Apparatus supports analysis in several phases. Each phase is expressed by a different metamodel (predefined concepts). The metamodels have different concepts (and attributes) and rules (how concepts interact with other concepts). The rules and the concepts are defined in a schema file. The schema file names follow a simple convention, `<phase>Schema.js`. The schema files are used to validate user created models. If you need to validate a model you created you can click the `module validation` button. That button runs the `<phase>ModuleValidation.js` script of the phase you are currently analyzing. This is a manual process for now 😭. I plan to code it as a background process, once I figure a CPU friendly way to do it.

Another thing you will notice is that there are some unique modules in each engineering phase. Those modules are used for specific analysis function that can only be made in that particular phase. For example in the `/implementation` you will find a script named `findVuln.js`. This script parses the attributes of the graph to create a list of keywords that can be used to search for known vulnerabilities in vulnerabilities databases.

### `/src/core` directory modules

The core modules are scripts that are shared between the different engineering phases. Each module functionality is pretty self-explanatory by the title of the module. However, if there is any confusion, each module has documentation inside its code.

### `/src/helpers` directory

### `/src/phasesUI` directory

### `/src/design`

### `/src/design-state`

### `/src/implementation`

### `/src/implementation-state`

## The `/graphs` directory

Here is the home of all our graphs. ASTo can render graphs that stored as `.js` or `.json` files. ASTo has four different directories for storing graphs. One for each engineering phase.

If you check the `/src/helpers/cyOptions.js` file, you will the following code (it declares some information about the Cytoscape instant):
```
let cy = cytoscape({
  container: document.getElementById('graph-container'),
  autounselectify: true,
  elements: graphModel.elements, // .elements matches the .json object
  style: graphStyle.style
})
```

In the fourth line the `system.elements` extension points to the elements object in the rendered graph. That value must be consistent in both the `/src/helpers/cyOptions.js` and the loaded graph file. In your graphs, the `.elements` object stores all the information about the graph (nodes, edges, etc.)

In the style field, we import the stylistic choices of our graph. To make ASTo more modular, the graphs style configuration is stored in the [config](https://github.com/Or3stis/apparatus/wiki#the-config-directory) directory. A cool feature of the tool (and of course cytoscape.js) is when a graph instance is stored, we also store its style choices. If you want you to share the graph with your friends, there is nothing stopping you (besides changing the style field to `graphStyle.style`.

## The `/settings` directory

The `settings` is the home of GUI configuration files. If you want to change something in the appearance of ASTo, this is the directory to do it. Currently, the configuration files are to the color options of the app. Once the development of the app is more stable, I will introduce some options to configure its elements. The `config.js` holds the color values of the GUI (in the future the values will be dynamically loaded to the CSS as well) and the color values of the graph. `config.js` is imported by the `graphStyle.js`. As you remember from before, Cytoscape uses the `graphStyle.js` to render the style of a graph. One of the 😎 features of Cytoscape is that we can apply CSS rules to the graphs. We use different classes to style elements of the graph dynamically. The `graphStyle.style` object has some keys called 'selectors'. Those are used as CSS classes. For example, the `selector: node` is used to apply CSS rules on the graph's nodes, while the `selector: .faded` is used to reduce the opacity of the graph's elements.
