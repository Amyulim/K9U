var userInpt = document.getElementById("userN"),
    RemeberUN = document.getElementById("checkbox");


function close(divN){
    document.getElementById(divN).style.display="none";
}
function show(div){
    document.getElementById(div).style.display="block";
}

/*------------------------  about us page >> different layout ---------------------------*/
//for mobile
document.getElementById("questionMark").addEventListener("click", function () {
    document.getElementById("menuPage").style.display="block";
    document.getElementById("about").style.top="0";
    document.getElementById("howToPlay").style.top="0";  
});

document.getElementById("menuPage").addEventListener("click", function () {
    document.getElementById("menuPage").style.display="none";
    document.getElementById("aboutPage").style.display="none";
    document.getElementById("about").style.top="-132px";
    document.getElementById("howToPlay").style.top="-132px"; 
    
});

document.getElementById("about").addEventListener("click", function () {
    document.getElementById("aboutPage").style.display="block";
    document.getElementById("content").innerHTML = "<h3> About K9U</h3><p>K9 University is a free mobile app that teaches you step by step basic and advanced knowledge on how to look after a dog in the most convenient way possible. The purpose of this app is to prepare future dog owners on the responsibility and care for the specific breed they wish to adopt.<br /><br/><b> Made by AmySeo &amp; Sierra Schuss </b></p>"
});

document.getElementById("howToPlay").addEventListener("click", function () {
    document.getElementById("aboutPage").style.display="block";
    document.getElementById("content").innerHTML = "<h3> How to Play</h3> <b><i>Follow the step-by-step process to create a K9U account.</i></b><ul><li>Choose the size and breed you want to train.</li><br/> <li> Read through the specific information about the breed you chose. </li> <br/><li> After doggy simulation, you can take your quiz about the breed you chose. </li> <br/> <li>If you pass, we will certify you as a <b>master</b> of that breed. </li>"
});

document.getElementById("close").addEventListener("click", function () {
    console.log("click");
    close("aboutPage")
});

//for desktop version
document.getElementById("questionMark2").addEventListener("click", function () {
    show("about-big")
    show("close2");
});

document.getElementById("close2").addEventListener("click", function (){
    close("about-big");
    close("close2");
})

/*------------------------ Start - save user name to localStorage ------------------------ */
var UserNList =[];

document.getElementById("startB").addEventListener("click", function () {
    
    //save UserName to localStorage for lastpage
    localStorage.setItem("userName",JSON.stringify(userInpt.value))
    
    if(RemeberUN.checked == true ){
        localStorage.setItem("userName",JSON.stringify(userInpt.value));
        UserN = localStorage.getItem("userName");
        UserNList = JSON.parse(UserN);
        document.getElementById("userN").value = UserNList;
    }     
});

//previous User Name
UserN = localStorage.getItem("userName");
UserNList = JSON.parse(UserN);
if(UserN == -1){
     document.getElementById("userN").placeholder = "User Name";
}else {
    document.getElementById("userN").value = UserNList;
}
