var goTutorial = document.getElementById("goTutorial");
var UserNList = [];

UserN = localStorage.getItem("userName");
DogType = localStorage.getItem("sizePicked");

UserNList = JSON.parse(UserN);

console.log(localStorage.getItem("userName"));
//if(UserNList.length >-1){
//    document.getElementById("passed").innerHTML =" You've passed the tutorial!";
//} else{
    document.getElementById("passed").innerHTML = "Great "+ UserNList + "<br/> You've passed the tutorial!";
//}

document.getElementById("textBox").innerHTML = "<h4>Nice try! " + UserNList+ "</h4><p>It seems like you need to study some more about <b>"+DogType+".</b> Please go back to the tutorial to review the concepts again and retake the quiz.<br><br><b>Remember: If you pass the quiz, you'll become a master of "+DogType+"</b></p>"



goTutorial.addEventListener("click", function() {
    if(DogType == "Bulldog"){
        goTutorial.href = "medium/bulldog-tutorial.html"
    } else if(DogType == "Shiba Inu"){
        goTutorial.href = "medium/shiba-tutorial.html"
    } else if(DogType == "Pug"){
        goTutorial.href = "small/pug-tutorial.html"
    } else if(DogType == "Beagle"){
        goTutorial.href = "small/beagle-tutorial.html"
    }
})