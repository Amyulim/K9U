var UserNList = [];

UserN = localStorage.getItem("userName");

UserNList = JSON.parse(UserN);

console.log(localStorage.getItem("userName"));

document.getElementById("passed").innerHTML = UserNList + ",<br/> You've passed the tutorial!";