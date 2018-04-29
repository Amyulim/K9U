var UserNList = [];

UserN = localStorage.getItem("userName");

UserNList = JSON.parse(UserN);

console.log(localStorage.getItem("userName"));
//if(UserNList.length >-1){
//    document.getElementById("passed").innerHTML =" You've passed the tutorial!";
//} else{
    document.getElementById("passed").innerHTML = "Great "+ UserNList + "<br/> You've passed the tutorial!";
//}
