# **Supply Chain Data Exchange (SC-DEX)**

## **About**

The **Supply Chain Data Exchange Standard (SC-DEX)** is an open, machine-readable data exchange standard designed to enable transparent, interoperable, and scalable sharing of supply chain data. The SC-DEX standard provides a flexible format that can be adopted across various industries and sectors, allowing stakeholders to publish, exchange, store and use supply chain data in a standardized way. By utilizing standardized **Location IDs**, **Organizational IDs**, and **Relationship Types**, SC-DEX ensures interoperability between systems, enabling greater transparency, due diligence, and regulatory compliance. As a global and open data exchange standard, the SC-DEX is intended to enables the implementation of new due diligence directives such as the CSDDD, CSDR, and HRDD, and ensures that reporting of and research on supply chains data remains accessible and non-duplicative for both civil society organizations, corporations, policy implementors and auditors, and suppliers alike.

SC-DEX is currently in an **open public review phase** from October 31, 2024 onwards for:
- [Governance Model](https://docs.google.com/document/d/1m4GJPTr-9cg9yE2G0cyFhhNl5qFRK6j8phr9oVKKgg4/edit)
- [Technical Standard Core Schema](https://github.com/opensupplyhub/supplychaindata.exchange/tree/main/schema)
- [Open Letter of Commitment](https://docs.google.com/document/d/1jRSpEStuhcdS_8SxBHLoW7PWaYlCTEtC1MLYJf_5avo/edit)

---

## **Key Features**

By design, the core data schema of the SC DEX is minimal, as this allows for data contributions from all stakeholders, eventually including data inputs from areas that may be in low-connectivity or through mobile device access. Extensions are intended to be custom built and share enough data identifiers with the core data schema to enable easy bridging. The core data schema will always be kept openly accessible and governed by all contributors of the data exchange standard, while extensions can be created and maintained by anyone.

There are three main features that the supply chain data exchange standard aims to do. 1) set a core data exchange standard with enough minimum viable data identifiers for identifying a production facility and its relationship to other production facilities or organizations 2) enable bridging to extensions custom built with organizations and sector data holders and stewards towards specific use cases and 3) create a foundational protocol layer for supply chains related data exchange.
  
- **Core Schema**: SC-DEX provides a clear, JSON-based structure for supply chain data, ensuring consistency across locations and organizational affiliations.
    - Learn more about the [Core Schema](https://github.com/opensupplyhub/supplychaindata.exchange/wiki/1.-Core-Schema).
- **Extensions**: Extensions allow for additional data fields, tailoring the schema for specific use cases, such as **Responsible Recruiting** and **Sea Level Rise Risk**.
    - Learn how to create extensions in the [Extensions page](https://github.com/opensupplyhub/supplychaindata.exchange/wiki/2.-Extensions-for-Use-Cases).
- **Governance**: SC-DEX is managed by a multi-stakeholder governance committee, ensuring the standard remains transparent and adaptable.
    - Explore the [Governance Model](https://github.com/opensupplyhub/supplychaindata.exchange/wiki/3.-Governance-Model).

---

## **Joining the Data Ecosystem**

Want to build an extension? Propose a change to the core data schema? Have ideas for use cases or pilots and want help getting started? We're building this in the open in order to maximize usefulness and adoption by all global supply chains stakeholders. We encourage organizations, developers, and supply chain professionals to participate in the growth and adoption of SC-DEX.

### **How to Get Involved**
- **Open Letter of Commitment**: Organizations can publicly commit to adopting SC-DEX by signing the [Open Letter of Commitment](https://github.com/opensupplyhub/supplychaindata.exchange/wiki/5.-Open-Letter-of-Commitment).
- **Implementation Tutorials**: Learn how to use SC-DEX’s core schema or create custom extensions for your specific use case.
    - Visit the [Implementation Tutorials page](https://github.com/opensupplyhub/supplychaindata.exchange/wiki/7.-Implementation-Tutorials) for step-by-step guides.
- **Hackathon Invitation**: Participate in our hackathon in January 2025, organized in collaboration with IEEE, where developers can build new extensions and tools.
    - Learn more by reviewing the [Hackathon one-pager](https://docs.google.com/document/d/1IRwKWZGFK8UZV21PYrqWcKy0JQi__W-A4MKd7MVd62w/edit).

For more information on the development process, see the [Development Process page](https://github.com/opensupplyhub/supplychaindata.exchange/wiki/4.-Development-Process).

---

## **Development Process and Roadmap**

SC-DEX has been developed through a multi-stakeholder, collaborative approach involving various convenings and public work sessions. Key milestones include:
- **2023**: Dhaka convening established the basic data model for SC-DEX, through a collaboration between Open Supply Hub, Mapped In Bangladesh, and WikiRate
- **2024**: Convening of 15+ organizations with representation from civil society organization, reporting groups, and data holders and stewards in January. First technical draft (V0) published in August, with V1 published in October after public feedback sessions and multistakeholder interviews and advisory sessions with over 30 organizations.
- **2025**: Focuses on scaling adoption with a goal of **25 organizations committed** and **10 organizations actively implementing** SC-DEX.

### Immediate Roadmap
**Q4 2024**

- **Schema Finalization**: A comprehensive table of accepted **location identifiers** (e.g., OSID, Varda Agriculture Global Field ID), **organization identifiers** (e.g., LEI), and **relationship types** will be added to the SC-DEX documentation. These standardized identifiers will facilitate consistent and interoperable data sharing across supply chains.
- **Public Review**: The core schema and initial extensions will undergo a public review phase. Contributions are welcome from all stakeholders, including organizations, data service providers, and civil society partners.
- **Governance Model**: Finalize and approve the governance model, including the processes for managing future updates and extensions.
- **Extensions**: Begin integrating specific use case extensions, including those for responsible recruiting, living wage tracking, and environmental sustainability.
- **Pilot Programs**: Launch pilot programs with key organizations to demonstrate the practical implementation of the SC-DEX standard.

---

### **2025 Goals**

- **Adoption**: By the end of 2025, the SC-DEX aims to have 25 organizations committed to using the standard, with 10 organizations actively exchanging data using SC-DEX.
- **Tool Development**: Develop tools to support the implementation and adoption of SC-DEX across industries.
- **Extensions**: Continue to develop and refine extensions based on feedback from pilot programs and public review.

To learn more, visit the [Roadmap page](https://github.com/opensupplyhub/supplychaindata.exchange/wiki/6.-Future-Roadmap).

---

## **Contribute**

We invite contributions from organizations and developers who are aligned with SC-DEX’s mission of supply chain transparency and standardization. Your expertise can help us improve the standard, build tools, or launch pilots that demonstrate its impact.

### **How to Get Involved**
- **Join the Mailing List & Share**: [Landing Page](https://supplychaindata.exchange/)
- **Join our Slack community**: [Slack Invite](https://join.slack.com/t/supplychainexchange/shared_invite/zt-2h2f0zvhe-J9ksFAHHtmYCs_I2_Nlr0g)
- **Sign up for the mailing list**: [Mailing List](https://supplychaindata.exchange/)
- **Attend public sessions**: [Public Calendar](https://calendar.google.com/calendar/u/0?cid=Y19mZDRkNWE3OTZlZDlhYTEwOTEwYWYxMGZhYWVkMDkyNDdjY2FjNzEzZWY5Yjc3Y2Y0ZDc4NzRkYjIwMzA0Mzk4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20)
- **Listen to expert interviews**: [Expert Interview Podseries](https://open.spotify.com/show/6Wwaw6Y0FqpoAcJmnvKzf1)
- **Follow us on LinkedIn**: [SC-DEX LinkedIn](https://www.linkedin.com/showcase/supply-chain-data-exchange/)

---

## **Troubleshooting and FAQ**

For frequently asked questions, visit the [FAQ and Troubleshooting page](./wiki/FAQ-and-Troubleshooting). For live support, join our [Slack community](https://join.slack.com/t/supplychainexchange/shared_invite/zt-2h2f0zvhe-J9ksFAHHtmYCs_I2_Nlr0g), schedule a [1:1 call](https://calendar.app.google/UYyr5qPvNd3RLn5K6), or email [shuya@opensupplyhub.org](mailto:shuya@opensupplyhub.org).

---

## Thanks so much for being here!
