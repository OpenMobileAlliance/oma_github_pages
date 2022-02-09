---
modules:
  - 
    name: RowText
    text: |
          # **About OMA SpecWorks**
          This page is about OMA SpecsWork.
  - 
    name: RowMultiColumns
    cols: 2
    widths: [6,6]
    modules:
      -
        name: RowText
        status: #second-wide
        text:  |
                ### DMSE Working Group
                Since 2002, the DMSE WG has released a suite of specifications which includes 20+ mobile service enabler specifications and more than 60 Management Objects providing simple, reliable and cost-effective ways to deploy new applications and services while minimizing the risk. The most market diffused of the Management Objects is certainly the Firmware Update Management Object (FUMO) with **deployments in the billions of devices**.  
      -
        name: RowText
        status: #second-wide
        text:  |
                ### IPSO Working Group
                Since 2002, the DMSE WG has released a suite of specifications which includes 20+ mobile service enabler specifications and more than 60 Management Objects providing simple, reliable and cost-effective ways to deploy new applications and services while minimizing the risk. The most market diffused of the Management Objects is certainly the Firmware Update Management Object (FUMO) with **deployments in the billions of devices**. 
      -
        name: RowTextImage
        cols: 4
        image: /images/working_together_2.jpg
        status: #second-wide
        text:  |
                ##### DMSE Activities
                IPSO Smart Objects Working Groups (IPSO) 
      -
        name: RowTextImage
        cols: 6
        image: /images/working_together_1.jpg
        status: #second-wide
        text:  |
               ***Note***
                IPSO Smart Objects Working Group (IPSO kdkdkd Home to the widely deployed Internet of Things (IoT) protocol, LightweightM2M (LwM2M), the Device Management & Service 
  -
    name: RowMultiColumns
    cols: 2
    widths: [6,6]
    modules:
        -
            name: RowText
            status: #second-wide
            text:  
        -
            name: RowText
            status: #second-wide
            text: |
                    Enablement Working Group (DMSE WG) specifies protocols and mechanisms to achieve the management of mobile devices, services access and software on connected devices across networks.
  - 
    name: RowText
    text: |
          ##### **About OMA SpecWorks**
          OMA SpecWorks is an innovative kind of Standards Development Organization (SDO) where the needs for wireless industry consensus versus the quick and accurate creation of specifications and other technical documentation are balanced via a working group-driven, efficient and [agile process](https://omaspecworks.org/what-is-oma-specworks/agile-process-for-standardization-in-todays-market-landscape/). As a non-profit organization with a long history in mobile and Internet of Things (IoT) technology development, OMA SpecWorks is a specifications factory where industry-leading companies bring their ideas and talent to build market-accelerating standards that allow products and services to interoperate seamlessly across fixed and mobile wireless data networks.
  -
    name: RowSeparator
    size: S #provide XS, S, M, L, XL spacing between component
  -
    name: RowImageText
    cols: 4
    image: /images/working_together_1.jpg
    status: #second second-wide (extend the width of the image), "second" provides a background color to the text or empty
    text: | 
      ##### **Device Management & Service Enablement Working Group**

      Home to the widely deployed Internet of Things (IoT) protocol, LightweightM2M (LwM2M), the Device Management & Service Enablement Working Group (DMSE WG) specifies protocols and mechanisms to achieve the management of mobile devices, services access and software on connected devices across networks.
      
      Since 2002, the DMSE WG has released a suite of specifications which includes 20+ mobile service enabler specifications and more than 60 Management Objects providing simple, reliable and cost-effective ways to deploy new applications and services while minimizing the risk. The most market diffused of the Management Objects is certainly the Firmware Update Management Object (FUMO) with **deployments in the billions of devices**. An additional 20+ Management Objects have been defined by other standards organizations, which cooperate with OMA SpecWorks to avoid fragmentation and duplication. DMSE technologies easily manage converged and multi-mode devices on any network, including devices that do not have a SIM card, as well as resource-constrained devices. Explore the OMA [DMSE](https://technical.openmobilealliance.org/index.html)and [LwM2M](https://openmobilealliance.github.io/dmse-documentation/) specifications.
  - 
    name: RowText
    text: |
          The IPSO Alliance is not a standards organization, but an alliance that promotes and supports Smart Objects, and manages an IPSO Smart Object Registry that includes libraries, icons and repositories to be used by worldwide standard definition organizations (SDOs), special interest groups (SIGs), open communities and original equipment manufacturers (OEMs). The creation of a fully functional IPSO Smart Object Registry provides an avenue for industry adoption. IPSO has the goal to create Smart Object definitions, instantiations, data models, design models, reference architectures, icons, and brand, which include all the attributes needed to be an integral component of an IoT Smart Object Marketplace.
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
      In December 2017, the IPSO Alliance joined forces with the Open Mobile Alliance. OMA SpecWorks was launched in early 2018 from the two organizations and the IPSO Smart Objects Working Group (IPSO WG) was formed. The IPSO WG is focused on enabling IoT devices to communicate, understand and trust each other with global interoperability based on open standards.

      IPSO WG’s charter is to develop, establish, and create the industry leadership of an “IPSO Platform” that includes the definition and support of Smart Objects with an emphasis on object interoperability on protocol and data layers and of Identity and Privacy technologies. The mission is to create a platform and support system that includes libraries, repositories, design kits, and industry awareness for discovery and interoperability of IoT Smart Objects.
  - 
    name: RowText
    text: |
          The IPSO Alliance is not a standards organization, but an alliance that promotes and supports Smart Objects, and manages an IPSO Smart Object Registry that includes libraries, icons and repositories to be used by worldwide standard definition organizations (SDOs), special interest groups (SIGs), open communities and original equipment manufacturers (OEMs). The creation of a fully functional IPSO Smart Object Registry provides an avenue for industry adoption. IPSO has the goal to create Smart Object definitions, instantiations, data models, design models, reference architectures, icons, and brand, which include all the attributes needed to be an integral component of an IoT Smart Object Marketplace.
  -
    name: RowSeparator
    size: L #provide XS, S, M, L, XL spacing between component
  -
    name: RowNewsCards
    news: 
  - 
    name: RowText
    text: |
          ### Resources Table
          This page is a table with interesting information:
  - 
    name: RowDynamicTable
    description: Table dedicated to display resources
    pagination: 10
    filter: 
     - title
     - type
     - published
    columns:
      - 
        key: title
        label: Title
        sortable: true
      - 
        key: type
        label: Type
        sortable: true
      - 
        key: published
        label: Published
        sortable: true
      - 
        key: download
        label: Download
        sortable: false
    items:
      - title:
          title: LwM2M v1.2 Features
        type:
          title: PDF
        published:
          title: 2020-Nov-10
        download:
          icon: fas download
          url: "https://www.openmobilealliance.org/release/LightweightM2M/"
          target: _blank
      - title:
          title: LwM2M v1.1 Presentation Overview
        type:
          title: PDF
        published:
          title: 2019-Jun-17
        download:
          url: "https:/www.openmobilealliance.org/release/LightweightM2M/Lightweight_Machine_to_Machine-v1_1-OMASpecworks.pdf"
          target: _blank
          icon: fas download
      - title:
          title: LwM2M v1.1 overview including new features due for release in Q2 2019
        type:
          title: Video
        published:
          title: 2019-Jan-21
        download:
          icon: fas download
          url: "https://www.youtube.com/watch?v=D7xEYnwOeHU"
          target: _blank
      - title:
          title: LwM2M Specifications
          url: "https://technical.openmobilealliance.org/Overviews/lightweightm2m_overview.html"
          target: _blank
        type:
          title: Documents
        published:
          title: 2020-Nov-10
        download:
          icon: 
      - title:
          title: LwM2M Open-Source Specifications
          url: 
          target: _blank
        type:
          title: Implementations
        published:
          title: 2020-Nov-10
        download:
          icon: fas download
          url: "https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/LwM2M-Open-Source-Code"
          target: _blank
      - title:
          title: LwM2M Object and Resource Registry
          url: "https://github.com/OpenMobileAlliance/lwm2m-registry"
          target: _blank
        type:
          title: Registry
        published:
          title: 2021-Oct-06
        download:
          icon: 
      - title:
          title: LwM2M Enabler Test Specifications
          url: "http://www.openmobilealliance.org/release/LightweightM2M/ETS/"
          target: _blank
        type:
          title: Test Specs
        published:
          title: 2019-Sep-12
        download:
          title: 
      - title:
          title: OMA SlideShare Account
          url: "http://www.slideshare.net/OpenMobileAlliance/presentations"
          target: _blank
        type:
          title: SlideShare
        published:
          title: 
        download:
          icon:     
---

##### **About OMA SpecWorks**

>OMA SpecWorks is an innovative kind of Standards Development Organization (SDO) where the needs for wireless industry consensus versus the quick and accurate creation of specifications and other technical documentation are balanced via a working group-driven, efficient and [agile process](https://omaspecworks.org/what-is-oma-specworks/agile-process-for-standardization-in-todays-market-landscape/). As a non-profit organization with a long history in mobile and Internet of Things (IoT) technology development, OMA SpecWorks is a specifications factory where industry-leading companies bring their ideas and talent to build market-accelerating standards that allow products and services to interoperate seamlessly across fixed and mobile wireless data networks.