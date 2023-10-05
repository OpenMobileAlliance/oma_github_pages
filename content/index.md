---
title: Home page
description: Main page of the web application
modules:
  -
    name: RowText
    text: |
          # LwM2M 
          The Lightweight Machine-to-Machine (LwM2M) protocol is a specialized Internet of Things device management protocol, which was initially designed for use with constrained devices and constrained networks in the Internet of Things (IoT). It is, however, also successfully used on high-end IoT devices as well. LwM2M is deployed in a variety of verticals, such as smart energy, building automation, precision farming, logistics, etc. The object and resource model defined for LwM2M allows extensiblity while maintaining interoperability. More than 300 objects and resources have been specified to retrieve sensor data, control actuators, and to manage application data. These objects and resources are free to use and publically available.
  -
    name: RowSeparator
    size: S #provide XS, S, M, L, XL spacing between component
  -
    name: RowMultiColumns
    cols: 1
    widths: [12]
    modules:
      -
        name: RowButtonGrid
        cols:
          -
            title: LwM2M
            subtitle: Protocol
            image: fas cog
            items:
              -
                title: Version 1.2.1 - CORE
                subtitle: PDF Format
                status: active
                url: https://openmobilealliance.org/release/LightweightM2M/V1_2_1-20221209-A/OMA-TS-LightweightM2M_Core-V1_2_1-20221209-A.pdf
                target: _blank
              -
                title: Version 1.2.1 - Transport
                subtitle: PDF Format
                status: active
                url: https://openmobilealliance.org/release/LightweightM2M/V1_2_1-20221209-A/OMA-TS-LightweightM2M_Transport-V1_2_1-20221209-A.pdf
                target: _blank
              -
                title: Version 1.2.1 - CORE
                subtitle: HTML Format
                status: active
                url: https://openmobilealliance.org/release/LightweightM2M/V1_2_1-20221209-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_2_1-20221209-A.html
                target: _blank
              -
                title: Version 1.2.1 - Transport
                subtitle: HTML Format
                status: active
                url: https://openmobilealliance.org/release/LightweightM2M/V1_2_1-20221209-A/HTML-Version/OMA-TS-LightweightM2M_Transport-V1_2_1-20221209-A.html
                target: _blank
              -
                title: Version 1.2.1
                subtitle: Zip File
                status: active
                url: https://openmobilealliance.org/release/LightweightM2M/V1_2_1-20221209-A/OMA-ERP-LightweightM2M-V1_2_1-20221209-A.zip
                target: _blank
              -
                title: V1.1.1
                subtitle: 17-Jun-2019
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#v11-functionality
                target: _blank
              - 
                title: V1.0.2
                subtitle: 02-Feb-2018
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#v10-functionality
                target: _blank
          -
            title: LwM2M
            subtitle: Enablers
            image: fas spinner
            items:
              - 
                title: Binary Application Data
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/enablers#lwm2m-binary-application-data-container
                target: _blank
              - 
                title: Connectivity Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/enablers/#lwm2m-connectivity-management
                target: _blank
              - 
                title: Device Capabilities Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/enablers#lwm2m-device-capabilities-management
                target: _blank
              - 
                title: Event Log
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/enablers#lwm2m-event-log
                target: _blank
              - 
                title: Gateway
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/enablers/#lwm2m-gateway
                target: _blank
              -  
                title: Lock & Wipe
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/enablers#lwm2m-lock--wipe
                target: _blank
              - 
                title: Portfolio Object
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/enablers#lwm2m-portfolio-object
                target: _blank
              - 
                title: Software Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/enablers/#lwm2m-software-management
                target: _blank
              - 
                title: LwM2M Virtual Observation
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/enablers/#lwm2m-virtual-observation
                target: _blank
          -
            title: Resources
            subtitle: Information
            image: fas laptop
            items:
              - 
                title: LwM2M Registry
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html
                target: _blank
              - 
                title: Developer's Wiki
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki
                target: _blank
              -
                title: Test V1.2
                subtitle: Pending
                status: pending  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url:
              - 
                title: Test V1.1
                subtitle: 12-Sep-2019
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/release/LightweightM2M/ETS/OMA-ETS-LightweightM2M-V1_1-20190912-D.pdf
              - 
                title: Test V1.0.2
                subtitle: 18-Aug-2015
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/release/LightweightM2M/ETS/OMA-ETS-LightweightM2M-V1_0_2-20180815-A.zip
          -
            title: Implementation(*)
            subtitle: Code
            image: fas handshake
            items:
              - 
                title: Leshan
                subtitle: (Eclipse)
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/eclipse/leshan
                target: _blank
              - 
                title: Wakaama
                subtitle: (Eclipse)
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/eclipse/wakaama
                target: _blank
              - 
                title: Anjay
                subtitle: (AVSystem)
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/AVSystem/Anjay
                target: _blank
              -
                title: IOWA
                subtitle: (IoTerop)
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/IOTEROP/IOWA
                target: _blank
              -
                title: Zephyr
                subtitle: (LwM2M Client)
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://docs.zephyrproject.org/latest/samples/net/lwm2m_client/README.html
                target: _blank
              -
                title: Leshan Sandbox
                subtitle: (Server Sandbox)
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url:  https://github.com/eclipse/leshan#test-server-sandbox
                target: _blank
              - 
                title: Tools
                subtitle: LwM2M
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/tools
                target: _blank
          -
            title: Events
            subtitle: Future/Past
            image: fas users
            items:
              - 
                title: Member Meetings
                subtitle: Events
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://omaspecworks.org/events/member-meetings/
                target: _blank
              - 
                title: Previous TestFests
                subtitle: Events
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://guidelines.openmobilealliance.org/testfests
                target: _blank
              - 
                title: Post-Workshop Utilities
                subtitle: Events
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://21247113.hs-sites.com/iot-for-utilities-workshop-1
                target: _blank
              - 
                title: Workshop Utilities
                subtitle: Events
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: /news/2023-10-03-outreach-utility-november/
                target: _blank
  -
    name: RowText
    text: (*) _Note - The Open Mobile Alliance is not responsible for the content of any particular implementation and does not endorse any particular implementation._
 
  -
    name: RowSeparator
    size: XL #provide XS, S, M, L, XL spacing between component
  - 
    name: RowText
    text: |
          ## Latest News
  -
    name: RowSeparator
    size: L #provide XS, S, M, L, XL spacing between component
  -
    name: RowNewsCards
    news: 
---

