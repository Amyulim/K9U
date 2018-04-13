
var largeS= document.getElementById("largeS");

largeS.addEventListener("mouseenter", function () {
    largeS.innerText="";
    var alert = document.createElement("div");
        alert.innerHTML="<img src='SVG/alert.svg'/> <p>Please finish S & M size breeds first</P>"
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
document.getElementById("smallS").addEventListener("click", function () {
    colorChange(this.id);
    colorChangeW("mediumS");
    clickM=0;
    clickS=1;
});
document.getElementById("mediumS").addEventListener("click", function () {
    clickS=0;
    clickM=1;
    colorChange(this.id);
    colorChangeW("smallS");
    
})
document.getElementById("goType").addEventListener("click", function () {
    if(clickS==1){
        document.getElementById("goType").href="../small/small-dog.html";
    } else if(clickM==1){
        document.getElementById("goType").href="../medium/medium-dog.html";
    } else {
        var alert = document.createElement("div");
                alert.innerHTML=" <img src='SVG/alert.svg'/> <p>You should choose one type</P>"
                alert.id="alert";
                document.getElementById("wrapper").appendChild(alert);
                
        setTimeout(function() { document.getElementById("wrapper").removeChild(alert)},1000);
       
    }
    
});
function colorChange(id) {
    document.getElementById(id).style.backgroundColor="#1F3944";
}
function colorChangeW(id) {
    document.getElementById(id).style.backgroundColor="#2A81B9";
}