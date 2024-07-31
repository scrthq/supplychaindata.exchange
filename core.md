# Core Data Schema Specification

This specification outlines the minimum viable core data schema for the SC DEX. There are five major components of this core data schema: 

Notes:
Two object types
- supply chain location (where it happens)
- ownership (who's accountable)
- key value pair? OSID: # LEI: #

What's the connective tissue between these two? 
- schema.org/identifier (look at the brand connection, probably could use IDs)

- A geospatial data identifier containing location, field boundary, or other data standard related to where something physically exists 
- A data type for the geospatial data, categorizing it as a production location, headquarters or office, etc.
- An abstract identifier containing information about the ownership or accountability for the geospatial data identified

--
metadata
- A data issuer identifier
- A timestamp (submission automatic, for what?)

This list constitutes a "knowledge object" within the standard and is the unit level data packet that can be exchanged.

> [!NOTE]
> The Core Specification is still work in progress. Feedback is welcome!

## Schema

The following keywords are generally supported:

- `physicalid`: The [SC DEX geospatial data standards](physicaldatastandards.md) as a string, **required**.
- `type`: The [SC DEX data types](datatypes.md) as a string, **required**.
- `cyberid`: The [SC DEX abstract data standards](cyberdatastandards.md) as a string, **required**.
- `contribid`: a unique identifier for each data contributor, **required**.
- `timestamp`: time of submission, **required**.
- `description`: any additional notes.

Speaking between two platforms, which IDs does this one have vs this one? 
