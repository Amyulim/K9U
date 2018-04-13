var clickS=0;
var clickB=0;
document.getElementById("shiba").addEventListener("click", function () {
    clickS=1;
    clickB=0;
    colorChange(this.id);
    colorChangeW("bulldog");
   
});
document.getElementById("bulldog").addEventListener("click", function () {
    clickS=0;
    clickB=1;
    colorChange(this.id);
    colorChangeW("shiba");
    
});
document.getElementById("goType").addEventListener("click", function () {
    if(clickS==1){
        document.getElementById("goType").href="shiba-info.html";
    } else if(clickB==1){
        document.getElementById("goType").href="../4/4.html";
    } else {
        var alert = document.createElement("div");
                alert.innerHTML=" <p>You should choose one type</P>"
                alert.id="alert";
                document.getElementById("wrapper2").appendChild(alert);
                
        setTimeout(function() { document.getElementById("wrapper2").removeChild(alert)},1000);
    }
    
});
function colorChange(id) {
    document.getElementById(id).style.backgroundColor="#2A81B9";
}
function colorChangeW(id) {
    document.getElementById(id).style.backgroundColor="#64A4C3";
}