var NextArrow = document.getElementById("NextArrow"),
    PrevArrow = document.getElementById("PrevArrow"),
    item1 = document.getElementById("item1"),
    itemName =document.getElementById("itemsName"),
    itemDetails = document.getElementById("itemsDetails"),
    toy = document.getElementById("toy"),
    house = document.getElementById("house"),
    food = document.getElementById("food"),
    toyClicked = 0,
    houseClicked = 1,
    foodClicked = 0;

//Change to the next items in same the type
NextArrow.addEventListener("click", function () {
    
    PrevArrow.style.display="block";
    
    if(toyClicked == 1){
        
    } else if(foodClicked == 1){
        item1.src="../SVG/dogplate.svg";
        
    } else if(houseClicked == 1){
        item1.src="../SVG/comb.svg";
        itemName.innerHTML = "BRUSH";
        itemDetails.innerHTML = "Proper brushes for Shiba Inu are Slicker brush, comb, and nail clipper. Make sure brushing him weekly"
    }
       
});

//Change Icon color and textbox
toy.addEventListener("click", function (){
    
    PrevArrow.style.display="none";
    
    toyClicked = 1;
    
    //change icon color
    house.src = "../SVG/house.svg";
    toy.src = "../SVG/toys-colored.svg";
    food.src = "../SVG/food.svg";
    
    //change inside contents
    item1.src="../SVG/frisbee.svg";
    document.getElementById("eachItemImg").style.width = "38%";
    itemName.innerHTML = "TOYS";
    itemDetails.innerHTML = "<b>60mins</b> are recommended acivities time per day.<br />Tennis Ball Rope Tug Frisbee";
//    NextArrow.style.display="none";
});


house.addEventListener("click", function () {
    
    PrevArrow.style.display="none";
    
    houseClicked = 1;
    toyClicked = 0;
    foodClicked = 0;

    //change icon color
    house.src = "../SVG/house-colored.svg";
    toy.src = "../SVG/toys.svg";
    food.src = "../SVG/food.svg";
    
    //change inside contents
    item1.src="../SVG/leash.svg";
    itemName.innerHTML = "LEASH";
    itemDetails.innerHTML = "Use this when taking your dog for a walk while you are still in the training process! This tool helps keep your dog close beside you at all times.<br /><br />The Average walk mileage per week for Shiba Inu is <b>8 miles.</b><br />"   
    
});
food.addEventListener("click", function () {
   
    PrevArrow.style.display="none";
    
    houseClicked = 0;
    toyClicked = 0;
    foodClicked ++;
    
    //change icon color
    house.src = "../SVG/house.svg";
    toy.src = "../SVG/toys.svg";
    food.src = "../SVG/food-colored.svg";
    
    //change inside contents
    item1.src="../SVG/foodbag.svg";
    itemName.innerHTML = "FOOD";
    itemDetails.innerHTML = "Like many dogs, Shiba Inus are especially attracted to meats and they love whole ingredients. Find the right dry kibble to suit this breed’s taste buds and be careful to not feed him/her too much as Shiba Inus are prone to gaining weight."  
});

document.getElementById("return").addEventListener("click",function(){
   document.getElementById("iconBoxBorder").style.left="0";
    
});