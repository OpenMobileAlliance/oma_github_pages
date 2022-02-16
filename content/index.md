---
title: Home page
description: Main page of the web application
modules:
  -
    name: RowText
    text: |
      ### <h1>LwM2M</h1><br>The Lightweight Machine-to-Machine (LwM2M) protocol is a specialized Internet of Things device management protocol, which was initially designed for use with constrained devices and constrained networks in the Internet of Things (IoT). It is, however, also successfully used on high-end IoT devices as well. LwM2M is deployed in a variety of verticals, such as smart energy, building automation, precision farming, logistics, etc. The object and resource model defined for LwM2M allows extensiblity while maintaining interoperability. More than 300 objects and resources have been specified to retrieve sensor data, control actuators, and to manage application data. These objects and resources are free to use and publically available.
      
  -
    name: RowSeparator
    size: S #provide XS, S, M, L, XL spacing between component
  -
    name: RowMultiColumns
    cols: 3
    widths: [2, 8, 2]
    modules:
      - 
        name: RowNewsList
        title: News
        subtitle: Latest
        image: fas cube
      -
        name: RowButtonGrid
        cols:
          -
            title: LwM2M
            subtitle: Protocol
            image: fas cog
            items:
              -
                title: Version 1.2: CORE
                subtitle: PDF Format
                status: active
                url: http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Core-V1_2-20201110-A.pdf
                target: _blank
              -
                title: Version 1.2: Transport
                subtitle: PDF Format
                status: active
                url: http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf
                target: _blank
              -
                title: Version 1.2: CORE
                subtitle: HTML Format
                status: active
                url: http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_2-20201110-A.html
                target: _blank
              -
                title: Version 1.2: Transport
                subtitle: HTML Format
                status: active
                url: http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/HTML-Version/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.html
                target: _blank
              -
                title: Version 1.2
                subtitle: Zip File
                status: active
                url: https://openmobilealliance.github.io/dmse-documentation/#v12-functionality
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
            title: Test
            subtitle: Specs
            image: fas check-circle
            items:
              -
                title: V1.2
                subtitle: Pending
                status: pending  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url:
              - 
                title: V1.1
                subtitle: 12-Sep-2019
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/release/LightweightM2M/ETS/OMA-ETS-LightweightM2M-V1_1-20190912-D.pdf
              - 
                title: V1.0.2
                subtitle: 18-Aug-2015
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/release/LightweightM2M/ETS/OMA-ETS-LightweightM2M-V1_0_2-20180815-A.zip
          -
            title: LwM2M
            subtitle: Enablers
            image: fas spinner
            items:
              - 
                title: Binary Application Data
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-binary-application-data
                target: _blank
              - 
                title: Connectivity Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-connectivity-management
                target: _blank
              - 
                title: Device Capabilities Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-device-capabilities-management
                target: _blank
              - 
                title: Event Log
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-event-log
                target: _blank
              - 
                title: Lock & Wipe
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-lock--wipe
                target: _blank
              - 
                title: Portfolio Object
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-portfolio-object
                target: _blank
              - 
                title: Software Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-software-management
                target: _blank
              - 
                title: LwM2M Virtual Observation
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-virtual-observation
                target: _blank
          -
            title: Resources
            subtitle: Information
            image: fas laptop
            items:
              - 
                title: LwM2M Registry
                subtitle:
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html
                target: _blank
              - 
                title: Developer's Wiki
                subtitle:
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki
                target: _blank
          -
            title: Implementations
            subtitle: Code
            image: fas handshake
            items:
              - 
                title: Leshan
                subtitle: (Eclipse)
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/eclipse/leshan
                target: _blank
              - 
                title: Wakaama
                subtitle: (Eclipse)
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/eclipse/wakaama
                target: _blank
              - 
                title: Anjay
                subtitle: (AVSystem)
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/AVSystem/Anjay
                target: _blank
      - 
        name: RowButtonGrid
        id: events
        cols:
          -
            title: Events
            subtitle: Coming
            image: fas users
            items:
              - 
                title: Last Virtual Event
                subtitle: 2021-Nov-10
                status: deactive  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/Virtual-TestFest-Mar-2021
                target: _blank
              - 
                title: Previous
                subtitle: Events
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/Virtual-TestFest-Mar-2021
                target: _blank
  -
    name: RowSeparator
    size: XL #provide XS, S, M, L, XL spacing between component
  -
    name: RowImageText
    cols: 3
    image: images/dmse.png
    status: second #second-wide (extend the width of the image), "second" provides a background color to the text or empty
    text: | 
      ##### **Device Management & Service Enablement Working Group**

      *Home to the widely deployed Internet of Things (IoT) protocol, LightweightM2M (LwM2M), the Device Management & Service Enablement Working Group (DMSE WG) specifies protocols and mechanisms to achieve the management of mobile devices, services access and software on connected devices across networks.*
      
      Since 2002, the DMSE WG has released a suite of specifications which includes 20+ mobile service enabler specifications and more than 60 Management Objects providing simple, reliable and cost-effective ways to deploy new applications and services while minimizing the risk. The most market diffused of the Management Objects is certainly the Firmware Update Management Object (FUMO) with **deployments in the billions of devices**. An additional 20+ Management Objects have been defined by other standards organizations, which cooperate with OMA SpecWorks to avoid fragmentation and duplication. DMSE technologies easily manage converged and multi-mode devices on any network, including devices that do not have a SIM card, as well as resource-constrained devices. Explore the OMA [DMSE](https://technical.openmobilealliance.org/index.html)and [LwM2M](https://openmobilealliance.github.io/dmse-documentation/) specifications.

  -
    name: RowSeparator
    size: XL #provide XS, S, M, L, XL spacing between component
  -
    name: RowTextImage
    cols: 9
    image: images/ipso.png
    status: #second-wide
    text: | 
      ##### **IPSO Smart Objects Working Group (IPSO)**
      In December 2017, the IPSO Alliance joined forces with the Open Mobile Alliance. OMA SpecWorks was launched in early 2018 from the two organizations and the IPSO Smart Objects Working Group (IPSO WG) was formed. The IPSO WG is focused on enabling IoT devices to communicate, understand and trust each other with global interoperability based on open standards.

      IPSO WG’s charter is to develop, establish, and create the industry leadership of an “IPSO Platform” that includes the definition and support of Smart Objects with an emphasis on object interoperability on protocol and data layers and of Identity and Privacy technologies. The mission is to create a platform and support system that includes libraries, repositories, design kits, and industry awareness for discovery and interoperability of IoT Smart Objects.

      The IPSO Alliance is not a standards organization, but an alliance that promotes and supports Smart Objects, and manages an IPSO Smart Object Registry that includes libraries, icons and repositories to be used by worldwide standard definition organizations (SDOs), special interest groups (SIGs), open communities and original equipment manufacturers (OEMs). The creation of a fully functional IPSO Smart Object Registry provides an avenue for industry adoption. IPSO has the goal to create Smart Object definitions, instantiations, data models, design models, reference architectures, icons, and brand, which include all the attributes needed to be an integral component of an IoT Smart Object Marketplace.
  -
    name: RowSeparator
    size: L #provide XS, S, M, L, XL spacing between component
---

##### ***About OMA SpecWorks***

*OMA SpecWorks is an innovative kind of Standards Development Organization (SDO) where the needs for wireless industry consensus versus the quick and accurate creation of specifications and other technical documentation are balanced via a working group-driven, efficient and [agile process](https://omaspecworks.org/what-is-oma-specworks/agile-process-for-standardization-in-todays-market-landscape/). As a non-profit organization with a long history in mobile and Internet of Things (IoT) technology development, OMA SpecWorks is a specifications factory where industry-leading companies bring their ideas and talent to build market-accelerating standards that allow products and services to interoperate seamlessly across fixed and mobile wireless data networks.*
