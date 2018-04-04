document.getElementById("menuImg").addEventListener("click", function () {
    document.getElementById("menuPage").style.display="block";
    document.getElementById("about").style.top="0";
    document.getElementById("HowToPlay").style.top="0";  
});

document.getElementById("about").addEventListener("click", function () {
    document.getElementById("aboutPage").style.display="block";
});

document.getElementById("close").addEventListener("click", function () {
    document.getElementById("aboutPage").style.display="none";
});
document.getElementById("menuPage").addEventListener("click", function () {
    document.getElementById("menuPage").style.display="none";
    document.getElementById("about").style.top="-132px";
    document.getElementById("HowToPlay").style.top="-132px"; 
    
})