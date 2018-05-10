
var largeS= document.getElementById("largeS");

largeS.addEventListener("mouseenter", function () {
    largeS.innerText="";
    var alert = document.createElement("div");
        alert.innerHTML="<img src='../SVG/alert.svg'/> <p>Please finish S & M size breeds first</P>"
        alert.id="alert";
        document.getElementById("wrapper").appendChild(alert);
//        setTimeout(function() { document.getElementById("wrapper").removeChild(alert)},2000);
});
document.getElementById("largeS").addEventListener("mouseleave", function () {
    document.getElementById("largeS").innerText="L";
    document.getElementById("alert").remove();
});
var clickS=0;
var clickM=0;

    

function colorChange(id) {
    document.getElementById(id).style.backgroundColor="#1F3944";
}
function colorChangeW(id) {
    document.getElementById(id).style.backgroundColor="#2A81B9";
}