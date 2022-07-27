var inputTxt=document.querySelector("#inputText");
var btnTranslate=document.querySelector("#button")
var outputTxt=document.querySelector("#outputText")
var sampleBtn=document.querySelector("#exp-btn")

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
        .catch(errorHandler)


    }
    
function eventHandleri(){

    inputTxt.innerText="The artefacts of the behavioural elements cancelled the commercialised monotone"
}

function errorHandler(error){

    console.log("error occured" ,error)
    alert("Something went wrong in the server.Try again after some time")

}

var sampleBtn=addEventListener("dblclick" , eventHandleri)    
var btnTranslate=addEventListener("click" , eventHandler)

