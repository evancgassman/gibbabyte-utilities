# Gibbabyte Utilities
Gibbabyte Utilities is a free to access online multipurpose API.

## Install for NodeJS
```
npm install gibbabyte-utilities
```
## Install/Use for WebJS
Download GibbabyteUtilitiesRequest.js and put it in your project directory.
```
<script src="GibbabyteUtilitiesRequest.js"></script>
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
- Queries the Gibbabyte Utilities API to get the Permission Integer of the provided *apikey*.
- Either returns an Integer, or a String being an error.
```
**queryDictionary(*dictionaryQueryInformation*)** - Permission Integer Level: 0
```
- Queries the dictionary API to get information based on the provided *dictionaryQueryInformation* (JSON Object as String) parameter.
* - Required

dictionaryQueryInformation {
  preferredSource: "Gibbabyte"
  *retrieveType: "definition"
  *inputString: "example"
  *inputType: "word"
}
```
**getNameByColorHex(*colorHex*)** - Permission Integer Level: 0
```
- Queries the color API to get the color name based on the provided hexadecimal values.
* - Required

colorHex suitable examples.
"#FFFFFF"
"FFFFFF"
"#5F3F4F"
"5F3F4F"
```
**getColorHexByName(*colorName*)** - Permission Integer Level: 0
```
- Queries the color API to get the hexadecimal values based on the provided color name.
* - Required

colorName is a string and is not case sensitive.
```
**getColorDescriptionByName(*colorName*)** - Permission Integer Level: 0
```
- Queries the color API to get the color description based on the provided color name.
* - Required

colorName is a string and is not case sensitive.
```
**hexToRGB(*colorHex*)** - Permission Integer Level: 0
```
- Queries the color API to convert a hexadecimal color value to the RGB format.
* - Required

colorHex suitable examples.
"#FFFFFF"
"FFFFFF"
"#5F3F4F"
"5F3F4F"
```
