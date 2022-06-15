---
layout: news
image: /images/news/bootstrapping.jpeg
title: LwM2M, Bootstrapping in Cellular Networks
description: Creation of LightweightM2M Vanilla devices that can be configured automatically.
subtitle: New Work Item
url: 
by: OMA SpecWorks
date: 2022-Jun-14
homepage: 1
tags:
    - bootstrap
    - cellular networks
---

The Lightweight M2M protocol (LwM2M) has proven itself to be a well suited to operating within Cellular networks. LwM2M is being used with a wide range of Device Types from Low Latency critical IoT applications such as remote performance monitoring to high latency massive IoT application such as water metering. 

Currently, there are multiple approaches for deploying cellular device management but in most cases the devices have to be somehow provisioned to a LwM2M server before use. At a minimum this is the URL location of the LwM2M server, but it often also includes security credentials that are particular to the LwM2M server that it is tied to. Provisioning this information is done within the supply chain and adds cost and complexity to the roll out of device. In its simplest form, it involves using spreadsheets between organisations but for more mature supply chains, manufacturing systems can for example be integrated with LwM2M servers to provide a more seamless and secure approach. 

This work item looks to see how to avoid this supply chain complexity in cellular networks by utilising their inherent trustworthiness. Cellular networks already provide root of trust anchoring to the cellular subscription as well as various levels of encryption on the radio network. Cellular networks also provide a secure domain for which access can be controlled. 

The ultimate goal would be to allow a manufacturer to create devices in an entirely generic way and allow them to automatically attach to any operator defined server depending on which cellular subscription is used.

### About Open Mobile Alliance

OMA is the leading industry forum for developing market-driven, interoperable mobile service enablers. OMA was formed by the world’s leading mobile operators, device and network suppliers, information technology companies, and content providers as the industry focal point for the development of mobile service enabler specifications. OMA is a non-profit organization that delivers open specifications supporting the billions of new and existing terminals operating across traditional cellular operator networks and emerging networks supporting machine-to-machine communications for the Internet of Things (IoT). New work in OMA is leading to the development of next-generation mobile services in areas such as Device Management, LBS, IoT, APIs and more. See [About OMA](https://omaspecworks.org/about/)

### About LightweightM2M (LwM2M)
Please use this link to download [LwM2M v1.1](https://www.openmobilealliance.org/release/LightweightM2M/Lightweight_Machine_to_Machine-v1_1-OMASpecworks.pdf), [LwM2M v1.2](https://www.openmobilealliance.org/release/LightweightM2M/)