/*------------------------ when one of breeds clicked, save it to localstorage for the last page -------------------------- */

document.getElementById("pug").addEventListener("click", function() {
    localStorage.setItem("sizePicked","Pug")
});

document.getElementById("beagle").addEventListener("click", function() {
    localStorage.setItem("sizePicked","Beagle")
});