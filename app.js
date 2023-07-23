let tbtn = document.querySelector("#tbtn");
var inputvalue = document.querySelector("#input-area")
var outputvalue = document.querySelector("#output-area")

var newUrl;
//var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" //test server
var serverUrl = "https://api.funtranslations.com/translate/pirate.json"   //main server

function constructUrl(text) {
    return serverUrl + "?text=" + text; 
}

function translation(url){
    fetch(url)
    .then(function responsehandler(response){
        return response.json();
    })
    .then(function consolelog(json){
        outputvalue.innerText = json.contents.translated;   //output
    })
    .catch(errorhandler);
}

function errorhandler(error) {
    console.log("something wrong with the server ",error);
    alert("server did not respond !");
}

function display() {
    newUrl = constructUrl(inputvalue.value);  //input
    var translatedText = translation(newUrl);
}

tbtn.addEventListener("click",display);