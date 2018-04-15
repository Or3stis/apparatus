---
title: "Apparatus modeling language"
---

# Under development 🚧

1. [Apparatus modeling language](https://or3stis.github.io/apparatus/language#apparatus-modeling-language)
1. [Apparatus Design phase modeling](https://or3stis.github.io/apparatus/language#apparatus-design-phase-modeling)
1. [Apparatus Implementation phase modeling](https://or3stis.github.io/apparatus/language#apparatus-implementation-phase-modeling)

# Apparatus modeling language

The modeling language is composed of two metamodels. The first metamodel provides concepts and constraints to model an IoT system during the design phase. The second metamodel provides concepts and constraints to model IoT systems during the implementation phase. The distinction is made due to the different requirements and different information engineers have about a system during each phase. During the design phase, an engineer models the idea of the system without being restricted by the hardware or software specifications. For example during the design phase, an engineer may require a system component that will function as an Intrusion Detection (IDS) system. The engineer may not know at the design time whether the IDS will be a hardware device or a software application. During the implementation phase whether the IDS will be a hardware device or a software application is necessary since it affects both the topology of the network and its security requirements.

Each phase offers different types of security analysis. During the design phase,an engineer can model the threats and the vulnerabilities of the system. Design phase security analysis cannot be used to express specific vulnerabilities of the system or security mechanisms that aim to mitigate them. Both the vulnerability and the security mechanism are concepts of an implemented system since they represent specific weaknesses or improvements on the hardware or software components of a system.

## Apparatus Design phase modeling

The design phase metamodel provides a set of rules that design phase IoT models must adhere to. The metamodel is defined via a UML class diagram. Each UML class defines a concept that either describes an component of the system or behavior that impacts that system. Concepts are composed by a set of attributes that capture specific information of the model. Each concept, unless otherwise noted has the property _description_ which describes the component of the IoT system. The design phase metamodel has the following concepts:

### Design Network module

* **Device:** It is an object of the physical world (physical thing) or an object of the virtual world (virtualized thing). It is used to represent either physical components, such as hardware based actuators and mobiles phones or virtualized components, such as cloud-based devices of an IoT system.
* **Application:** is part of the information world (information thing). An Application represents a software component that is running on a Device.
* **Micronet:** is an environment that a security engineer can configure in terms of their security. A Micronet is a managed environment that constitutes a collection of Devices and Applications enable an IoT system to perform a function. Examples of Micronets are a smart home, an agricultural network of sensors or a company's internal network. The boundaries of the Micronet are defined during the model creation by the engineer. For example, one Micronet can include only the devices that are part of a specific network domain, while another can include all the devices that are in the same room. The same device can belong to both Micronets and each Micronet can impose different security controls on the devices. The property of the Micronet is:
  * _purpose:_ describes the goal or the function of the Micronet.
* **Net:** represents environments that their security configuration is not known and their behavior cannot be configured by the security engineer. While Nets may not be malicious, they represent a level of danger to an IoT system that must taken into account during the model development. Similarly to the Micronet, the boundaries of a Net are defined by the engineer. Examples of the Net are external networks to the IoT system that a security engineer either has little or no knowledge of, such as a third party cloud infrastructure or hostile deployment environments. It is possible, that the same device can be part of Net and a Micronet. For example, an IoT system has a server that hosts a set of virtual machines to its users. While the engineer can configure the server, the usage of the virtualized assets of the servers are configured by the users. Malicious user can try to exploit the virtualized assets in order to compromise the server. As a result, the virtualized assets compose a Net.
* **Information:** is represents either hard data, such as authentication logs and temperature data, or soft data, such as access credentials and user passwords.

### Design Social module

* **Actor:** is used to represent people or groups of people that interact with an IoT system. An Actor can be a stakeholder of the system. An Actor may never be malicious. The concept of Actor can be used to represent groups of people with different privileges, such as root users or the administrative personnel of a University. The property of the Actor is the following:
  * _intent:_ describes what the Actor wants to achieve or gain by interacting with the IoT system.

### Design Security module

* **Asset:** any actor, device, application or information of the system that either (1) is considered valuable by the stakeholders and needs to be protected; (2) a malicious actor wants; or (3) acts as a stepping stone to further attacks. While assets that are valuable by the stakeholders can be elicited requirements phases, assets that malicious actor wants or can be used for further attacks are not always apparent. Examples of assets are the access credentials known by an actor, sensitive information stored in a database or a sensor that has read/write privileges to a server.
* **Threat:** a function that can be used maliciously or a system that has the means to exploit a vulnerability of a legitimate system. A threat can only target an asset of the IoT system. The property of the threat is:
  * _threatType:_ represents the classification of the threat according to the STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) acronym.
* **Constraint:** is ``a restriction related to security issues, such as privacy, integrity, and availability, which can influence the analysis and design of a system under development by restricting some alternative design solutions, by conflicting with some of the requirements of the system, or by refining some of the system’s objectives''. The constraint has the following property:
  * _propertyType:_ the classification of the constraint according to the extended CIA (Confidentiality, Integrity, Authentication, Authorization, Availability, Non-Repudiation) triad.

![Apparatus design metamodel](https://raw.githubusercontent.com/Or3stis/apparatus/master/app/metamodels/dgn-model.png)

## Apparatus implementation phase modeling

The implementation phase metamodel refines the design phase with additional concepts and attributes. The added concepts and attributes represent information that is not known in the design phase and is beneficial for security analysis. A security engineer has more detailed knowledge of an IoT system and better understanding of its security requirements. For example, in the implementation phase, the security engineer knows the type of network protocols that will be used by the system. Moreover the software versions of the devices that provide services to the system is known. That additional information can be used to elicit security issues that were not apparent in the design phase. We can leverage implementation specific knowledge to either automate or semi-automate certain types of security analysis. For example, the process of vulnerability identification requires hardware and software information.

The refined concepts of the implementation phase are the: _(1) Device_; _(2) Application_; _(3) Micronet_ and _(4) Information_. The added concepts are: _(1) Vulnerability_ and _(2) Mechanism_.

### Implementation Network module

* **Device:** implementation phase concept, refines the design phase Device concept with additional attributes. The added properties of the Device are:
  * _layer:_ the conceptual layer of the IoT architecture to which the Device belongs. Apparatus uses a three-layer architecture that consists of the Application Layer, Network Layer and the Perception Layer. The value of the _layer_ attribute can be (1) application, (2) gateway or (3) perception;
  * _type:_ is used to define the kind of the Device. Examples of a Device type are a sensor, a mobile phone or a server;
  * _service:_ is the type of role or operation that the Device performs for the system. This value may include network services such as _ssh_, _ftp_, data processing filtering and relaying of data;
  * _input:_ what is required in order for the node to perform its role or operation. It takes an enumerated value as an input that is dataEnvironmental, dataDigital, command, action, notification, trigger;
  * _output:_ is the result of the Device operation or role. It may take the same values as the _input_ property;
  * _update:_ how the software on the Device is being updated. The updates can be automatic, require a specific action or false.
* **Network Connection:** the type of network communication protocol used between the Devices. The properties of the network connection are:
  * _description:_ the type of connection, it can either be _wireless_, signifying a connection using a wireless protocol or _cable_, signifying a connection using a wired medium. It takes an enumerated value as an input;
  * _listOfProtocols:_ is a list of the supported network protocols by the network connection. It takes an array of string values as an input, each value in the array represents a supported network protocol.
* **Application:** implementation phase concept refines the design phase concept of Application with additional attributes. The properties of the Application are:
  * _version:_ the software's version type number. For example, if the Application represents the iOS operating system, the version would be the iOS release version, such as v10.2.3.
  * _update:_ how the Application is being updated. The updates can be automatic, require a specific action or false.
* **Micronet:** implementation phase concept refines the design phase concept with an additional attribute. The property of the Micronet is:
  * _state:_ the nature of a Micronet in terms of its Device network connectivity gateway layer. The _state_ can either be _dynamic_, meaning that the Devices in the network change network domains during their usage or _static_ meaning that the Devices in the system do not change network domains. Examples of dynamic IoT systems are networks of vehicular fleets, drones, and other mobile devices since devices in such networks move distances geographically. Examples of static IoT are smart homes and industrial IoT systems since devices in such systems are stationary during their life cycle.
* **Information:** implementation phase concept that extends the design phase concept of Information with an added attribute. The additional attribute of Information is:
  * _location:_ corresponds to the geographical location of the information stored in the device. It can be used to represent if information (data) is physically stored inside a network or are hosted by a third-party service. Moreover different regions have different laws regarding digital information that ultimately affect the overall security of a system and the proposed constraints of the system.

### Implementation Security Module

* **Vulnerability:** a software, hardware or usage policy weakness that can be exploited by an adversary toward compromising a system. Hardware and Software Vulnerabilities can be identified using techniques such as penetration testing. Hardware and software vulnerabilities can be identified from public access vulnerability databases such as [CVE](https://cve.mitre.org/cve/) and [NVD](https://nvd.nist.gov/vuln/search). Such databases store vulnerabilities using unique IDs. Vulnerabilities IDs are used among security engineers to exchange information about security incidents.
* **Mechanism:** a Mechanism when implemented protects against one or more Vulnerabilities. If the Vulnerability is publicly identified and stored in a vulnerability database, a security engineer can use the proposed security mechanisms in order to mitigate it. A Mechanism could be applied dynamically when a certain event is detected by the system or they can be a constant process. For example, during the event of DoS attack, a system may enlist additional resources to spread the impact of the attack. Once the attack is mitigated, the system will release the additional resources reduce its operational costs. The property of Mechanism is:
  * _trigger:_ is used to describe the behavior or event that will cause the application of the Mechanism. For example, a trigger could be a constant, meaning that the mechanism is continuously active, or it could be a detection of an attack.

![Apparatus implementation metamodel](https://raw.githubusercontent.com/Or3stis/apparatus/master/app/metamodels/imp-model.png)
