# Core Data Schema Specification

This specification outlines the minimum viable core data schema for the SC DEX. There are two main components of this core data schema: 

1. Location Data: where is this located in the world, geospatially? 
2. Organization Data: who is accountable for this location, either legally or financially?

We lead with the Location Data because there are a finite number of 

These key value pairings might look like: 

The official list of supported key value pairings can be found in [Approved Core Scheme Key Value Pairings] and you can submit new key value pairings through [an issue] or through this [Google Form]. It will then be reviewed on a bi-weekly basis and commented on if there are any issues. 

Key value pairings are ranked as "recommended", "usable", and "not recommended" in order to maximize accessibility and usability across supply chain data standards. We consider these rankings with the following criteria: 

| Ranking | Usability Metric | Adoption Metric |
| ----- | ----------- | ----------- |
|Recommended| free and open to use | commonly used |
|Useable| not free and open to use | commonly used |
|Not Recommended| not free and open to use | not commonly used |

We also recomment collecting metadata in order to do verification of the knowledge object, and this might include
- A data issuer identifier, in order to follow up with the validity of the data
- A timestamp, in order to keep track of version history

> [!NOTE]
> The Core Specification is still work in progress. Feedback is welcome!
