var UserNList = [];

UserN = localStorage.getItem("userName");
DogType = localStorage.getItem("sizePicked");

UserNList = JSON.parse(UserN);

console.log(localStorage.getItem("userName"));
//if(UserNList.length >-1){
//    document.getElementById("passed").innerHTML =" You've passed the tutorial!";
//} else{
    document.getElementById("passed").innerHTML = "Great "+ UserNList + "<br/> You've passed the quiz!";
//}

document.getElementById("textBox").innerHTML = "<h4>Congratulations! <br>"+ UserNList+"</h4><p>You have passed the quiz and earned the title of the <b>" + DogType +" Master." + "</b> This means you know the specific requirements that are needed to take care of this breed.<br><b>Are you ready to learn about more breeds?</b></p>"