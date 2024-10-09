
> [!NOTE]
> The Core Specification is still work in progress. Feedback is welcome! This page is in flux at the moment, <a href="https://docs.google.com/spreadsheets/d/1RlRicL0kg2Biw6pMzD7lT9m5Z1Kb8tdrh5tf00LfSOY/edit?usp=sharing">spreadsheet is the source of "truth"</a>

<h2>Location Schema</h2>

_The Location schema of the SCDEX is meant to identify where a supply chains location is physically, and the name, coordinates and/or address properties are optional fields with the intention that this information is already captured within the location-identifiers property. This is meant to build the SCDEX data ecosystem on top of existing supply chain data standards and map the relationships between already established reporting formats, as well as allow for linking different types of geospatial data, for example a point location of a factory (os-id or gln) with a region (field-id). A list of accepted and recommented location-identifiers is in progress._

| property | type | Required | description|
|----------|------| ---------| -----------|
| guid | guid id  | yes      | unique id for each piece of data|
| location-type | text | yes      | the type of location, may be factory, field, warehouse, office|
| language | text | optional      | the type language this data is inputted in|
| products | text | optional      | the product(s) produced at this location|
| sector | text | optional      | the sector(s) that this location is a producer or other processor for|
| processing-types | text | optional      | the kinds of processing, refinement, or other activities at this location|
| os-id | text or URL | 1 of the IDs is required | a unique identifier for production locations provided by Open Supply Hub|
| gln | text or URL | 1 of the IDs is required | a location identifier provided by GS1|
| field-id | text or URL | 1 of the IDs is required | a boundary id provided by Varda Ag|
| location-identifier | text or URL | 1 of the IDs is required | other location identifiers similar to os-id, gln, or field-id, contains either address or geocoordinates|
| name | text or URL | optional      | the name of the location|
| coordinates | number or text | optional      | the geocoordinates of the location|
| address | postalAddress or text | optional      | the address of the location|
| affiliation-type | text | required | the type of affliation to location, or to other locations.|

<h2>Organization Schema</h2>

_The Organization schema of the SCDEX is meant to identify the relationship of the organization to the location, and the name is an optional field, with the similar intention as the Location schema's location-identifier. A list of accepted and recommented organization-identifiers is in progress._

| property | type | Required | description|
|----------|------| ---------| -----------|
| guid | guid id  | yes      | unique id for each piece of data|
| organization-type | text  | yes      | unique id for each piece of data|
| language | text | optional      | the type language this data is inputted in|
| lei | text or URL | 1 of the IDs is required | an identifier for legal entities provided by GLIEF|
| gln | text or URL | 1 of the IDs is required | a location identifier provided by GS1|
| organization-identifier | text or URL | 1 of the IDs is required | other organization identifiers similar to lei or gln, contains name and other registration information|
| affiliation-type | text | required | the type of affliation to location, or to other organizations. This might look like ownership, tax, supplier, shipping, etc|

