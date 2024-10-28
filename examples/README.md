# **SC-DEX Examples and Use Cases**

This page provides examples of how to implement extensions to the SC-DEX core schema for various use cases. These examples demonstrate the flexibility of SC-DEX to handle specific supply chain challenges and industries.

---

## **How to Contribute or Submit an Extension**

We encourage contributions from both technical and non-technical partners. If you are a **technical partner**, you can simply copy the JSON format provided above and customize it for your extension. For non-technical partners, or those new to JSON formatting, you can submit your extension idea through a Google Form.

To submit an extension, please fill out the form with the following details:
1. **Name and Organization**: Provide your contact details.
2. **Extension Purpose**: Describe the purpose of the extension and its intended use case.
3. **Potential Data Attributes**: List any relevant data fields that should be included in the extension.

[Submit your extension via Google Form](https://docs.google.com/forms/d/e/1FAIpQLSc2k_hCOzvZ2G31Z-IivRDF2c3OMVxG9HCwXXVf3oP_vxeG-A/viewform?usp=sf_link).

For more details on extensions, visit our [Extensions page](../wiki/Extensions-for-Use-Cases).

---

To learn more about the core schema and other use cases, visit our [Core Schema page](../schema/schema.md) and [Extensions page](../wiki/Extensions-for-Use-Cases).
These examples show how SC-DEX can be extended for specific use cases.

---

## **Example Use Case: Responsible Recruiting**

This extension tracks data around recruitment fees and the employment process:

- **Recruitment Fee**: Amount charged to the worker.
- **Employer Coverage**: Portion of the fee covered by the employer.
- **Timeline**: Dates of initial contact, contract signing, and first paycheck.

```json
{
  "RecruitmentFee": 200,
  "EmployerCoverage": 150,
  "InitialContactDate": "2024-01-15",
  "ContractSigningDate": "2024-02-01",
  "FirstPaycheckDate": "2024-03-01"
}
```

---

## **Example Use Case: Sea Level Rise Risk**

This extension layers geographic data on top of the core schema to assess supply chain risk from rising sea levels:

- **Region**: Affected supply chain region.
- **Timing**: Projected date when the location will be underwater.
- **Impact**: Percentage of locations affected year by year.

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
