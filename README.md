# Gibbabyte Utilities
Gibbabyte Utilities is a free to access online multipurpose API.

## Install for NodeJS
```
npm install gibbabyte-utilities
```

## Usage and Functions
```
GibbabyteUtiltiiesRequest(apikey, requestOption);
```
Both parameters must be strings.

### requestOption's
Request options depend on the permission level of your API key. If you are unsure of the permission level of your API, you can check it using **checkAPIPermission(apikey)**.

**checkAPIPermission(***apikey***)** - Permission Integer Level: ALL
```
\- Queries the Gibbabyte Utilities API to get the Permission Integer of the provided *apikey*.
\- Either returns an Integer, or a String being an error.
```
**queryDictionary(*dictionaryQueryInformation*)** - Permission Integer Level: 0
```
\- Queries the dictionary API to get information based on the provided *dictionaryQueryInformation* (JSON Object as String) parameter.
\* - Required

dictionaryQueryInformation {
  preferredSource: "Gibbabyte"
  \*retrieveType: "definition"
  \*inputString: "example"
  \*inputType: "word"
}
```
