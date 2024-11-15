# **Implementation Tutorials**

This section provides a step-by-step guide for technical implementers looking to publish new supply chain location and organizational affiliation data using the SC-DEX core schema. The core schema outlines the specific format for supply chain data assets, ensuring consistency and interoperability.

---

## **Publishing Supply Chain Information with the Core Schema**

The core schema allows for standardized data publication on supply chain locations and their affiliations with organizations. Below are the key elements required:

### **1. Location ID**
Each supply chain location must be referenced using a **Location ID**. This can represent:
- **Point Locations**: Use a unique identifier like **Open Supply Hub’s OSID** for precise point locations. 
- **Field Boundaries**: For larger areas, such as farms or fields, use a boundary-based identifier like **Varda Agriculture’s Global Field ID**.

More information about setting up these IDs can be found in the tables below.

### **2. Organizational ID**
Supply chain data must reference an **Organizational ID** to ensure clear affiliations. Common examples include:
- **GLEIF’s LEI**: A globally recognized legal entity identifier for organizations.
  
Refer to the table at the end of this section for more examples and how to generate these IDs.

### **3. Relationship Type**
The relationship between the location and organization must be defined using a **Relationship Type**. For example, it may describe a **supplier** relationship or an **ownership** relationship. These relationships help clarify the nature of the connection within the supply chain.

### **Location, Organization, and Relationship Tables**

> **Note:** These tables are still under development. More standards are being added to this recommended list. For more details on the technical standard, refer to the [Core Schema page](./Core-Schema).

Below are tables that provide examples of acceptable identifiers for locations, organizations, and relationships:

#### **Location IDs**
| **ID**                             | **Description**                                   | **Link to Create ID**                                            |
|------------------------------------|---------------------------------------------------|------------------------------------------------------------------|
| Open Supply Hub's OSID             | Unique ID for point locations                     | [Create OSID](https://opensupplyhub.org)                         |
| Varda Agriculture’s Global Field ID| Boundary-based ID for agricultural locations      | [Global Field ID](https://www.varda.ag)                          |

#### **Organization IDs**
| **ID**                             | **Description**                                   | **Link to Create ID**                                            |
|------------------------------------|---------------------------------------------------|------------------------------------------------------------------|
| GLEIF’s LEI                        | Legal Entity Identifier for organizations         | [Create LEI](https://www.gleif.org)                              |

#### **Relationship Types**
| **Type**                           | **Description**                                   | **Source**                                                       |
|------------------------------------|---------------------------------------------------|------------------------------------------------------------------|
| Supplier                           | Defines a supplier relationship                   | [WikiRate Relationship Types](https://wikirate.org)              |
| Ownership                          | Defines an ownership relationship                 | [WikiRate Relationship Types](https://wikirate.org)              |


---

## **Implementing Extensions**

Extensions to the core schema allow for additional data fields tailored to specific use cases. Below are two examples of extensions.

### **1. Example Extension: Responsible Recruiting**
The **Responsible Recruiting** extension tracks data on recruitment fees and the employment process. Key data attributes include:
- **Recruitment Fee**: The fee charged to the worker.
- **Employer Coverage**: How much of the fee is covered by the employer.
- **Timeline**: Time between initial contact, contract signing, and first paycheck.

```json
{
  "RecruitmentFee": 200,
  "EmployerCoverage": 150,
  "InitialContactDate": "2024-01-15",
  "ContractSigningDate": "2024-02-01",
  "FirstPaycheckDate": "2024-03-01"
}
```

### **2. Example Extension: Sea Level Rise Risk**
This extension layers geographic data on top of the core schema to assess supply chain risk from rising sea levels. It tracks:
- **Region**: The region affected by sea level rise.
- **Timing**: The projected date when the location will be underwater.
- **Impact**: The percentage of supply chain locations affected year by year.

```json
{
  "Region": "Coastal Factory Zone",
  "ProjectedUnderwaterDate": "2030-12-31",
  "YearlyImpact": [
    {"Year": 2025, "PercentageAffected": 5},
    {"Year": 2026, "PercentageAffected": 10},
    {"Year": 2027, "PercentageAffected": 15}
  ]
}
```

These extensions showcase the flexibility of SC-DEX in handling specific supply chain challenges. Technical implementers can build further on these examples to address their unique needs.

---

For more detailed instructions on schema extensions and use cases, refer back to the [Core Schema](./Core-Schema) page.
