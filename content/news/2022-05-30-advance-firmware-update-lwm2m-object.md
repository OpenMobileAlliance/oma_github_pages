---
layout: news
image: /images/news/micro-controllers.png
title: Advanced LwM2M Firmware Update Object
description: Blog to announce the agreement to start working in a new Advance Firmware Update Object
subtitle: OMA SpecWorks is developing a new LwM2M Firmware Object
url: 
by: OMA SpecWorks
date: 2022-May-31
homepage: 1
tags:
    - microcontrollers
---

**Advanced Firmware Update Object** – [OMASpecWorks](https://omaspecworks.org/) is developing a new Firmware Object to support emerging microcontrollers in a standardized way using the [LwM2M](https://lwm2m.openmobilealliance.org/) protocol.

The new emerging microcontrollers need an advance Firmware Update. The actual [LwM2M Firmware Update Object](https://www.openmobilealliance.org/release/ObjLwM2M_Firmware/V1_1-20201110-A/OMA-SUP-XML_5-V1_1-20201110-A.xml) does not support multiple instances of firmware. It was designed to support basic microcontrollers consisting of a single firmware image only. The [Software Component Object](https://www.openmobilealliance.org/release/LWM2M_SWMGMT/V1_0_2-20210119-A/OMA-TS-LWM2M_SwMgmt-V1_0_2-20210119-A.pdf) is neither a good fit for the advanced microcontrollers for good technical reasons. Therefore [OMASpecWorks](https://omaspecworks.org/) has started to work on an **Advance Firmware Update Object** to address this gap.

<!--more-->

The [LwM2M](https://lwm2m.openmobilealliance.org/) specifications defines a Firmware Update Object, which allows a LwM2M Server to determine the firmware version running on the device, to update firmware on the device and to monitor the progress of the update. This Firmware Update Object has been widely implemented and is in deployment today in a number of IoT devices.

With advanced microcontrollers appearing on the market the firmware update process has become more complex since firmware became composed of multiple images, which are necessary for applications to work. Examples include:

- microcontrollers containing separate images for a bootloader, modem firmware and application firmware,
- microcontrollers with multiple cores, and
- microcontrollers using modern security features, like TrustZone, with firmware 
partioned into secure and non-secure processing environments.

While these firmware images can also be updated independently, they cannot be activated or deactivated, installed independently without considering the dependencies and might require restart of the device to apply the upgrade.

The LwM2M Firmware Update Object does not support multiple instances of firmware. It was designed to support basic microcontrollers consisting of a single firmware image only. Modifying the LwM2M Firmware Update Object definition to match multi-image firmware requirements introduces backwards compatibility problems.

To offer solutions for high-end IoT devices, for example those running embedded Linux, a dedicated Software Component Object was standardized. It specifically supports updates where many software packages need to be managed. The Software Component Object is not a good fit for the advanced microcontrollers for the following reasons:

- Create and Delete operations could not be supported, with each predefined instance modelling one of the firmware component.
- Each package would need to be permanently activated, with Activate, Deactivate and Uninstall operations either being no-ops or always returning errors.
- Features like dependency handling, error reporting, firmware encryption, etc. would need to be added to the object definition to fulfill the requirements for advanced microcontrollers.

The new work developed by the [DMSE Working Group](https://lwm2m.openmobilealliance.org/about/) aims to start work on an Advanced Firmware Update Object to support these emerging microcontrollers in a standardized way using the [LwM2M](https://lwm2m.openmobilealliance.org/) protocol.
