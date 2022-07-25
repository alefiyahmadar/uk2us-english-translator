var inputTxt=document.querySelector("#inputText");
var btnTranslate=document.querySelector("#button")
var outputTxt=document.querySelector("#outputText")

var serverURL="https://api.funtranslations.com/translate/uk2us.json"

function constructURL(text){

    return serverURL +"?"+"text=" +text
}

 function eventHandler() {

    var inputTEXT = inputTxt.value 
    
        fetch(constructURL(inputTEXT))
        .then(response => response.json())
        .then(json => {
            var outputTEXT = json.contents.translated
           outputTxt.innerText = outputTEXT
     })


    }
    
var btnTranslate=addEventListener("click" , eventHandler)

