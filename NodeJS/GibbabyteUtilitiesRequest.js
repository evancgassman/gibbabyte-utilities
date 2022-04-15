//   ___ ___ ___ ___   _   _____   _______ ___ 
//  / __|_ _| _ ) _ ) /_\ | _ ) \ / /_   _| __|
// | (_ || || _ \ _ \/ _ \| _ \\ V /  | | | _|  
//  \___|___|___/___/_/ \_\___/ |_|   |_| |___|
//  By Evan Gassman

module.exports = function GibbabyteUtilitiesRequest(APIKEY, FUNCTION) {
    
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://utilities.gibbabyte.us/api.php");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};
   
    xhr.send(`{"api_key": "`+APIKEY+`", "function": "`+FUNCTION+`"}`);
}
