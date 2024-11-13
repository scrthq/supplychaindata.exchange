# **Extensions for Use Cases**

The SC-DEX Core Schema establishes a robust yet flexible foundation by providing key elements such as locations, organizations, and relationship types. These fundamental data points create a versatile structure that allows additional attributes to be appended seamlessly for diverse use cases. Each extension builds upon this core by adding specialized data fields, enabling tailored applications across industries without disrupting the schema’s consistency or interoperability. If we were to follow our supply chain data LEGOs analogy, extensions are custom parts designed by sub-communities who are interested in building their own kits —— while preserving the ability to connect to other extensions, and using the same core parts.

This modular approach supports custom extensions while maintaining the simplicity and clarity necessary for easy tool development, ensuring the data remains accessible for various stakeholders, from technical implementers to on-the-ground users. The result is a powerful framework adaptable to evolving industry needs, which can scale as new requirements arise. These extensions enable SC-DEX users to expand the data model with specific attributes, making it easier to meet unique use cases and industry requirements. We work with research partners, data services providers, and community contributors to develop these extensions. Events such as hackathons and working groups also support ongoing development, helping to create robust solutions.

Below are examples of use cases and their associated extensions, designed to address real-world challenges across diverse sectors. Official extensions are community-reviewed and added to the directory of approved extensions, while experimental extensions are housed in a separate directory for feedback and ongoing development. For more on this process, refer to the [Governance Model](https://github.com/opensupplyhub/supplychaindata.exchange/wiki/3.-Governance-Model) section on extension approvals.

To propose a new use case or extension, reach out to us via [Slack](https://join.slack.com/t/supplychainexchange/shared_invite/zt-2h2f0zvhe-J9ksFAHHtmYCs_I2_Nlr0g ), schedule a [1:1 meeting](https://calendar.app.google/UYyr5qPvNd3RLn5K6), or contact us at [shuya@opensupplyhub.org](mailto:shuya@opensupplyhub.org). For implementation guidance, explore the [Implementation Tutorials](https://github.com/opensupplyhub/supplychaindata.exchange/wiki/7.-Implementation-Tutorials) and join our growing community in creating a stronger, more adaptable SC-DEX ecosystem.

---

### **Use Case Examples**

#### **1. Insurance Verification**
**Description**: Provides data necessary for verifying insurance coverage across various locations and suppliers.

| **Attribute**        | **Description**                              | **Type**   |
|----------------------|----------------------------------------------|------------|
| Insurance ID         | Unique identifier for insurance policy       | String     |
| Coverage Start Date  | Date when coverage begins                    | Date       |
| Coverage End Date    | Date when coverage ends                      | Date       |
| Policy Type          | Type of insurance (e.g., liability, workers) | String     |

```json
{
  "InsuranceID": "12345",
  "CoverageStartDate": "2023-01-01",
  "CoverageEndDate": "2023-12-31",
  "PolicyType": "Liability"
}
```

---

#### **2. Living Wage Compliance**
**Description**: Tracks information on living wage levels for workers and compliance reporting.

| **Attribute**        | **Description**                            | **Type**   |
|----------------------|--------------------------------------------|------------|
| Wage Level           | Reported wage level                        | Number     |
| Compliance Status    | Compliance with living wage standards      | Boolean    |
| Reporting Date       | Date of the wage report                    | Date       |

```json
{
  "WageLevel": 500,
  "ComplianceStatus": true,
  "ReportingDate": "2023-06-01"
}
```

---

#### **3. Responsible Recruiting**
**Description**: Captures data on responsible recruiting practices, including fee payment status and contract details.

| **Attribute**         | **Description**                           | **Type**   |
|-----------------------|-------------------------------------------|------------|
| Recruitment Fee Paid  | Whether recruitment fee was covered       | Boolean    |
| Contract Type         | Type of employment contract               | String     |
| Contract Start Date   | Start date of contract                    | Date       |

```json
{
  "RecruitmentFeePaid": true,
  "ContractType": "Full-time",
  "ContractStartDate": "2023-01-15"
}
```

---

#### **4. Leather Sourcing Traceability**
**Description**: Tracks the origins and processing locations of leather materials in the supply chain.

| **Attribute**         | **Description**                           | **Type**   |
|-----------------------|-------------------------------------------|------------|
| Source Location ID    | Unique ID of leather source               | String     |
| Processing Plant ID   | ID of processing plant                    | String     |
| Animal Origin Country | Country of animal origin                  | String     |

```json
{
  "SourceLocationID": "78901",
  "ProcessingPlantID": "56789",
  "AnimalOriginCountry": "Brazil"
}
```

---

#### **5. Sea Level Rise Impact Analysis**
**Description**: Provides data on sea level rise risk for locations, informing environmental resilience planning.

| **Attribute**         | **Description**                           | **Type**   |
|-----------------------|-------------------------------------------|------------|
| Location Elevation    | Elevation of the location in meters       | Number     |
| Sea Level Risk        | Risk level based on projected sea rise    | String     |
| Assessment Date       | Date of the risk assessment               | Date       |

```json
{
  "LocationElevation": 12.5,
  "SeaLevelRisk": "Moderate",
  "AssessmentDate": "2024-03-01"
}
```

---

#### **6. Conflict Mineral Certification**
**Description**: Tracks certification data to verify compliance with conflict mineral regulations.

| **Attribute**         | **Description**                           | **Type**   |
|-----------------------|-------------------------------------------|------------|
| Certification ID      | Unique ID for certification               | String     |
| Compliance Status     | Certification compliance status           | Boolean    |
| Certification Date    | Date of certification                     | Date       |

```json
{
  "CertificationID": "ABC123",
  "ComplianceStatus": true,
  "CertificationDate": "2023-05-20"
}
```

---

#### **7. Fair Labor Compliance**
**Description**: Monitors fair labor practices at production sites, including labor rights and health conditions.

| **Attribute**         | **Description**                           | **Type**   |
|-----------------------|-------------------------------------------|------------|
| Compliance Score      | Score assessing fair labor practices      | Number     |
| Health Check Status   | Status of health and safety checks        | Boolean    |
| Compliance Check Date | Date of compliance check                  | Date       |

```json
{
  "ComplianceScore": 85,
  "HealthCheckStatus": true,
  "ComplianceCheckDate": "2023-11-15"
}
```

---

### **Experimental and Official Extensions**
A directory of experimental extensions is in progress for feedback and contributions.

For detailed setup instructions, please see the [Implementation Tutorials - Extensions](https://github.com/opensupplyhub/supplychaindata.exchange/wiki/7.-Implementation-Tutorials) section.

### **Partner with Us**
Interested in collaborating on SC-DEX extensions or use case research? Join us for hackathons, participate in working groups, or reach out directly to discuss new ideas and partnerships!
