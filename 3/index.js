var clickP=0;
var clickB=0;
document.getElementById("pug").addEventListener("click", function () {
    clickP=1;
    clickB=0;
    colorChange(this.id);
    colorChangeW("beagle");
   
});
document.getElementById("beagle").addEventListener("click", function () {
    clickP=0;
    clickB=1;
    colorChange(this.id);
    colorChangeW("pug");
    
})

function colorChange(id) {
    document.getElementById(id).style.backgroundColor="#2A81B9";
}
function colorChangeW(id) {
    document.getElementById(id).style.backgroundColor="#64A4C3";
}