---
layout: news
image: /images/news/nuSIM_Label_1C_tagline_3C.png
title: LwM2M Objects for nuSIM Integrated SIM
subtitle: OMA SpecWorks defines new Objects for nuSIM
description: nuSIM is an optimized iSIM solution for IoT
url: 
date: 2022-Apr-12
by:  OMASpecWorks
homepage: 400
tags:
---

The increasing demand for power-efficiency, robustness and small form factors along with growing simplicity needs along the value chain have caused the mobile industry to consider alternative solutions to the classical SIM, spearheaded by the integrated SIM (iSIM) – where the SIM functionality is integrated into the application processor or radio chip. 

nuSIM is an optimized iSIM solution for IoT. It comes on the main chipset inside the IoT device's communication module, thus making a separate SIM component obsolete. Configuration data and credentials for a mobile carrier are installed on the device by loading a small (1 kB) set of encrypted data, called profile. Accordingly, the handling of physical SIMs is replaced by a fully digital process, ideal for the emerging IoT mass-market. <!--more-->

Many IoT use cases can be satisfied with a one-time profile provisioning at device manufacturing so the profile remains operational until the device’s end-of-life. Other cases require an option to switch the profile - and therefore the carrier - after the device is already deployed, i.e. over the air.

This is when profile switching becomes a device management task - a core feature of OMA SpecWorks' Lightweight M2M (LwM2M). Two dedicated objects were defined in the OMA LwM2M Object and Resource Registry: 

* Object 507 represents one or more nuSIM profile packages comprising the encrypted carrier profile along with associated public key material
* Object 508 represents the nuSIM framework and its resources, such as a unique identifier (EID -- eSIM Identifier) and an X.509 certificate containing a public key 

### Eases porting across mobile carriers
When an IoT device is to be switched to another carrier, a LwM2M server will first write a new nuSIM Profile object to the LwM2M client on the device, then trigger an executable resource in the client's nuSIM object to load the new profile package to the actual nuSIM on the chipset. The nuSIM will automatically decrypt and install it in place of the previous profile. Carrier switch done.

### Increases implementation flexibility
The developer of the LwM2M client can further enrich this basic function e.g. by keeping multiple nuSIM Profile instances (hence the device could switch between several pre-loaded profiles) or storing a persistent backup of the last profile (so the device can fall back if needed). Many options exist to make carrier switching dependent on local parameters, such as geographic location or network reception quality.

OMA SpecWorks sees this latest addition to the object registry as an important enabler for interoperable LwM2M implementations to support remote profile provisioning and carrier switch for rather simple and cost-optimized IoT devices. By supporting the emerging nuSIM ecosystem, the LwM2M standard once more proves its versatile applicability for use cases across the entire IoT market.

These objects can be found in the OMA SpecWorks LwM2M Registry, [website](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html), [Github](https://github.com/OpenMobileAlliance/lwm2m-registry).


