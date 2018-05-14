/*------------------------ when one of breeds clicked, save it to localstorage for the last page -------------------------- */

document.getElementById("shiba").addEventListener("click", function() {
    localStorage.setItem("sizePicked","Shiba Inu")
});

document.getElementById("bulldog").addEventListener("click", function() {
    localStorage.setItem("sizePicked","Bulldog")
});