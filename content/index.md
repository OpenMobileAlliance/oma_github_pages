---
title: Home page
description: Main page of the web application
modules:
  -
    name: RowSeparator
    size: S #provide XS, S, M, L, XL spacing between component
  -
    name: RowNewsCards
    news:
  -
    name: RowText
    text: |
      ### Open Mobile Alliance - LightweighM2M
      [DMSE](https://omaspecworks.org/about/the-oma-specworks-work-program/device-management-and-service-enablement-working-group/) / [IPSO](https://omaspecworks.org/about/the-oma-specworks-work-program/ipso-smart-objects-working-group/) Working Groups are responsible for the development and maintenance of the LightweightM2M Protocol as well as OMNA LwM2M Registry.

  -
    name: RowSeparator
    size: S #provide XS, S, M, L, XL spacing between component
  -
    name: RowMultiColumns
    cols: 2
    widths: [10, 2]
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
                title: V1.2
                subtitle: 10-Nov-20
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
            title: Implementations
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
    name: RowTextImage
    cols: 6
    image: /images/working_together_2.jpg
    status: #second-wide
    text: | 
      ##### **IPSO Smart Objects Working Group (IPSO)**
      The IPSO Alliance is not a standards organization, but an alliance that promotes and supports Smart Objects, and manages an IPSO Smart Object Registry that includes libraries, icons and repositories to be used by worldwide standard definition organizations (SDOs), special interest groups (SIGs), open communities and original equipment manufacturers (OEMs). The creation of a fully functional IPSO Smart Object Registry provides an avenue for industry adoption. IPSO has the goal to create Smart Object definitions, instantiations, data models, design models, reference architectures, icons, and brand, which include all the attributes needed to be an integral component of an IoT Smart Object Marketplace.
  -
    name: RowNewsCards
    news: 
---
##### **About OMA SpecWorks**

>OMA SpecWorks is an innovative kind of Standards Development Organization (SDO) where the needs for wireless industry consensus versus the quick and accurate creation of specifications and other technical documentation are balanced via a working group-driven, efficient and [agile process](https://omaspecworks.org/what-is-oma-specworks/agile-process-for-standardization-in-todays-market-landscape/). As a non-profit organization with a long history in mobile and Internet of Things (IoT) technology development, OMA SpecWorks is a specifications factory where industry-leading companies bring their ideas and talent to build market-accelerating standards that allow products and services to interoperate seamlessly across fixed and mobile wireless data networks.