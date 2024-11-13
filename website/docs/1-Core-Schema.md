# **Core Schema**

The SC-DEX Core Schema is a foundational, machine-readable schema in JSON format designed to facilitate seamless data exchange across supply chains. By prioritizing simplicity and leanness, SC-DEX ensures interoperability with other data standards while remaining intuitive for human understanding. This approach allows organizations and stakeholders across various sectors to quickly adopt, use, and build tools on top of the SC-DEX standard, meeting the needs of both technical and non-technical users.

The SC-DEX Core Schema is crafted with flexibility and accessibility in mind. Technical implementers, data service providers, and non-technical stakeholders, such as labor unions and factory workers, can use and engage with data structured in SC-DEX. The schema is adaptable for use in different interfaces, including potential future integrations with mobile messaging platforms like WhatsApp, to provide information access across a range of devices and user backgrounds.

## **Schema Structure and Key Components**

The Core Schema has three primary required fields and several optional fields that enable detailed supply chain data representation:

| **Component**       | **Description**                                                                                                                                                      |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Locations**       | Specifies the location where activities take place, using standardized IDs (e.g., OSID for point locations, Global Field ID for boundaries).                           |
| **Organizations**   | Identifies organizations related to the supply chain, using identifiers like LEI.                                                                                     |
| **Affiliations**    | Describes relationships between organizations and locations, such as "is supplier of" or "is owned by".                                                               |
| **Coordinates**     | Optional: Latitude and longitude of the location, critical for mapping and geographic data layers.                                                                               |
| **Sector**          | Optional: The sector of activities conducted at the location (textiles, raw materials, agricultural, etc).
| **Processing Types**| Optional: Describes processing steps like "Final Product Assembly" or "Knitting".                                                                                      |
| **Products**        | Optional: List of products produced at the location (e.g., "Accessories", "Hats").                                                                                     |
| **Language**        | Optional: Language in which the data is published.                                                                                                                    |

> **Note on Optional vs Required**: This table does not include all optional fields in the core schema. More information about additional fields and attributes can be found in the [schema folder](https://github.com/opensupplyhub/supplychaindata.exchange/tree/main/schema).

The schema is designed with both required and optional fields, allowing users to choose the level of detail they need while ensuring that essential data is always present.

---

### **Key Principles**
1. **Interoperability**: The schema remains lightweight and compatible with other data standards, enabling streamlined data integration across platforms.
2. **Ease of Use**: SC-DEX is designed for both technical experts and non-technical stakeholders, supporting broad accessibility and engagement.
3. **Adaptability for Tool Development**: SC-DEX can serve as the backbone for various tools, enabling interfaces that accommodate diverse users, from technical implementers to supply chain workers and union representatives.

---

### **Next Steps**

The SC-DEX core schema is still under development, and there are several ways for you to get involved in shaping the standard:

- **Contribute an Identifier or Affiliation**: A more complete location-identifier list is in progress and will be published in Q4 of 2024. Please submit to this list by emailing shuya@opensupplyhub.org or through [this form submission](https://docs.google.com/forms/d/e/1FAIpQLSf5iJlmyyYj1QY2tH6IUmVTZL4samFfFglrHXyIh6BDKDc-Qg/viewform?usp=sf_link).
- **Contribute an Extension**: You can also propose new extensions to the schema by filling out the [extension submission form](https://docs.google.com/forms/d/e/1FAIpQLSc2k_hCOzvZ2G31Z-IivRDF2c3OMVxG9HCwXXVf3oP_vxeG-A/viewform?usp=sf_link).
- **Provide Feedback**: Contribute to the ongoing public review of the [governance model](https://docs.google.com/document/d/1m4GJPTr-9cg9yE2G0cyFhhNl5qFRK6j8phr9oVKKgg4/edit), [technical standard](https://github.com/opensupplyhub/supplychaindata.exchange/tree/main/schema), and [Open Letter of Commitment](https://docs.google.com/document/d/1jRSpEStuhcdS_8SxBHLoW7PWaYlCTEtC1MLYJf_5avo/edit).
**Join Public Work Sessions**: We are holding open work sessions to refine the technical standard and extensions. You can find these sessions on the [public calendar](https://calendar.google.com/calendar/u/0?cid=Y19mZDRkNWE3OTZlZDlhYTEwOTEwYWYxMGZhYWVkMDkyNDdjY2FjNzEzZWY5Yjc3Y2Y0ZDc4NzRkYjIwMzA0Mzk4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20).

---

## **Technical Schema Structure**

The SC-DEX core schema is designed with a structured, relational approach to supply chain data. The relationships between locations, organizations, and affiliations are key components of the schema. The diagram below illustrates the core entities and how they are connected within the schema.

<!-- ![ER Diagram](path/to/diagram.png) -->

- **Locations**: Entities representing physical locations like factories, farms, or warehouses.
- **Organizations**: Entities representing companies or organizations involved in the supply chain.
- **Affiliations**: The relationships between locations and organizations, such as "is supplier of" or "is owned by."

The above visualization helps clarify how data is structured within the SC-DEX standard.

For more details, please refer to the [schema folder](https://github.com/opensupplyhub/supplychaindata.exchange/tree/main/schema) for full documentation.

---

## **Example of the Core Schema in Use**

The following JSON format is an example of how SC-DEX can be used to represent a location of a hat manufacturer, and its affiliation to an organization. This example includes data for a factory location referenced through an OSID, its related organizations using LEIs, and their relationship affiliation as suppliers.

```json
{
  "locations": [
    {
      "guid": "82d39ac8-1a12-4801-835a-85d319927548",
      "location-type": "factory",
      "language": "en",
      "products": ["Accessories", "Hats"],
      "sector": 131,
      "processing-types": [
        "Final Product Assembly",
        "Cutting",
        "Embroidery",
        "Finishing",
        "Ironing",
        "Knitting"
      ],
      "os-id": "CN2021250D1DTN7",
      "name": "Huai An Yuan Tong Headwear Mfg. Co., Ltd.",
      "coordinates": {
        "latitude": 33.7862099,
        "longitude": 119.2787399
      },
      "address": "No.30 & 32 & 99 Yan Huang Avenue, Lian Shui Economic Developmental District, Huaian, Jiangsu - China"
    }
  ],
  "organizations": [
    {
      "guid": "91582fdd-6f72-47cf-a113-f68fe4e74865",
      "organization-type": 5600,
      "language": "en",
      "lei": "3538002LJMRZ83SU0B85",
      "organization-identifier": [
        "lei:3538002LJMRZ83SU0B85"
      ]
    },
    {
      "guid": "91582fdd-6f72-47cf-a113-f68fe4e74866",
      "organization-type": 5600,
      "language": "en",
      "lei": "353800ZCXKHDPY0N5218",
      "organization-identifier": [
        "lei:353800ZCXKHDPY0N5218"
      ]
    },
    {
      "guid": "91582fdd-6f72-47cf-a113-f68fe4e74867",
      "organization-type": 5600,
      "language": "en",
      "lei": "549300D9GZ4BMLDW5T40",
      "organization-identifier": [
        "lei:549300D9GZ4BMLDW5T40"
      ]
    }
  ],
  "affiliations": [
    {
      "from-guid": "82d39ac8-1a12-4801-835a-85d319927548",
      "to-guid": "91582fdd-6f72-47cf-a113-f68fe4e74865",
      "affiliation-type": "is supplier of"
    },
    {
      "from-guid": "82d39ac8-1a12-4801-835a-85d319927548",
      "to-guid": "91582fdd-6f72-47cf-a113-f68fe4e74866",
      "affiliation-type": "is supplier of"
    },
    {
      "from-guid": "82d39ac8-1a12-4801-835a-85d319927548",
      "to-guid": "91582fdd-6f72-47cf-a113-f68fe4e74867",
      "affiliation-type": "is supplier of"
    }
  ]
}
```
