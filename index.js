document.getElementById("questionMark").addEventListener("click", function () {
    document.getElementById("menuPage").style.display="block";
    document.getElementById("about").style.top="0";
    document.getElementById("howToPlay").style.top="0";  
});

document.getElementById("about").addEventListener("click", function () {
    document.getElementById("aboutPage").style.display="block";
    document.getElementById("content").innerHTML = "<h3> About K9U</h3><p>K9 University is a free mobile app that teaches you step by step basic and advanced knowledge on how to look after a dog in the most convenient way possible. The purpose of this app is to prepare future dog owners on the responsibility and care for the specific breed they wish to adopt.<br /><br/><b> Made by AmySeo &amp; Sierra Schuss </b></p>"
});

document.getElementById("close").addEventListener("click", function () {
    console.log("click");
    document.getElementById("aboutPage").style.display="none";
});

document.getElementById("menuPage").addEventListener("click", function () {
    document.getElementById("menuPage").style.display="none";
    document.getElementById("aboutPage").style.display="none";
    document.getElementById("about").style.top="-132px";
    document.getElementById("howToPlay").style.top="-132px"; 
    
});

document.getElementById("howToPlay").addEventListener("click", function () {
    document.getElementById("aboutPage").style.display="block";
    document.getElementById("content").innerHTML = "<h3> How to Play</h3> <b><i>Follow the step-by-step process to create a K9U account.</i></b><ul><li>Choose the size and breed you want to train.</li><br/> <li> Read through the specific information about the breed you chose. </li> <br/><li> After doggy simulation, you can take your quiz about the breed you chose. </li> <br/> <li>If you pass, we will certify you as a <b>master</b> of that breed. </li>"
});