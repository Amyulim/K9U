var NextArrow = document.getElementById("NextArrow"),
    PrevArrow = document.getElementById("PrevArrow"),
    item1 = document.getElementById("item1"),
    itemName = document.getElementById("itemsName"),
    itemDetails = document.getElementById("itemsDetails"),
    infographic = document.getElementById("infograph1"),
    toy = document.getElementById("toy"),
    house = document.getElementById("house"),
    food = document.getElementById("food"),
    complete = document.getElementById("complete"),
    toyClicked = 0,
    houseClicked = 1,
    foodClicked = 0;

var currentPosition = 0;
var clicked = 0;
var foodImages = ["../SVG/leash.svg", "../SVG/comb.svg","../SVG/frisbee.svg", "../SVG/foodbag.svg", "../SVG/dogplate.svg", "../SVG/bulldog-completed.svg"];
var Cprogress = 30;
var infoG = ["../SVG/activity-low.svg","../SVG/brush-frequency.svg","../SVG/bulldog-activity.svg","../SVG/empty.svg","../SVG/bulldog-food-consumption.svg"];
var myItemsArray = ["WALKING","BRUSH", "ACTIVITY","FOOD","FOOD CONSUPMSION"];
var clickedArray = ["WALKING"];

/*------------------------ progress bar -------------------------- */
function check() {
    if(clickedArray.indexOf(itemName.innerHTML) == -1) {
        
        clickedArray.push(itemName.innerHTML);
        Cprogress += 30;
        document.getElementById("progress").style.width = Cprogress + "px";
    }
}

/*------------------------ next or back button -> change contents -------------------------- */
function slide() {
     if(clicked == 0){
         
        //change top icons
        house.src = "../SVG/house-colored.svg";
        toy.src = "../SVG/toys.svg";
        food.src = "../SVG/food.svg";
        
        //change contents
        item1.src = foodImages[0];
        complete.innerHTML="";
        itemName.innerHTML = "WALKING";
        itemDetails.innerHTML="";
        itemDetails.innerHTML =  "They are inactive indoors, ideal for apartments, and have a low to moderate energy level." ;
        infographic.src = infoG[0];
        
    } else if(clicked == 1){
        
        //change top icons
        house.src = "../SVG/house-colored.svg";
        toy.src = "../SVG/toys.svg";
        food.src = "../SVG/food.svg";
        
        //change contents
        item1.src = foodImages[1];
        complete.innerHTML="";
        itemName.innerHTML = "BRUSH";
        itemDetails.innerHTML = "Proper brushes for Bulldogs are <b>Pin Brush, Comb, Nail Clipper</b>";
        infographic.src = infoG[1];
        
    } else if(clicked == 2) {
        //change top icons
        house.src = "../SVG/house.svg";
        toy.src = "../SVG/toys-colored.svg";
        food.src = "../SVG/food.svg";
        
        //change contents
        item1.src = foodImages[2];
        complete.innerHTML="";
        document.getElementById("eachItemImg").style.width = "38%";
        itemName.innerHTML = "ACTIVITY";
        itemDetails.innerHTML = "<b>30mins per day</b> is recommended acivity time for a Bulldog.<br />";
        infographic.src = infoG[2];
        
    } else if(clicked == 3) {
        //change top icons
        house.src = "../SVG/house.svg";
        toy.src = "../SVG/toys.svg";
        food.src = "../SVG/food-colored.svg";
        
        //change contents
        item1.src= foodImages[3];
        complete.innerHTML="";
        itemName.innerHTML = "FOOD";
        itemDetails.innerHTML = "Bulldogs can be prone to sensitive digestion, flatulence, allergies and hip dysplasia. ... Artificial preservatives may trigger allergic reactions and digestive problems. Food ingredients like chicken eggs, dairy and some proteins may also cause hypersensitivity reactions depending on the adaptability of your dogs."
        infographic.src = infoG[3];
        
    } else if(clicked == 4) {
        
        //make the next button disappear 
        NextArrow.style.display="block";
        
        //change top icons
        house.src = "../SVG/house.svg";
        toy.src = "../SVG/toys.svg";
        food.src = "../SVG/food-colored.svg";
        
        //change contents
        item1.src = foodImages[4];
        complete.innerHTML="";
        itemName.innerHTML = "FOOD CONSUMPTION";
        itemDetails.innerHTML = "";
        infographic.src = infoG[4];
        
    } else if(clicked == 5) {
        
        //make the next button disappear 
        NextArrow.style.display="none";
        
        //change top icons
        house.src = "../SVG/house-colored.svg";
        toy.src = "../SVG/toys-colored.svg";
        food.src = "../SVG/food-colored.svg";
        
        //change contents
        item1.src = foodImages[5];
        complete.innerHTML="100%";
        itemName.innerHTML = "Tutorial Completed!";
        itemDetails.innerHTML = "<a href='bulldog-quiz.html'><button id='goToQuiz'>Quiz</button></a>";
        infographic.src = infoG[3];
    }      
}

    
NextArrow.addEventListener("click", function () {
    
    clicked++;   
    PrevArrow.style.display="block";
    slide();
    check()
     
});

PrevArrow.addEventListener("click", function() { 
    
    clicked--;
    slide()
    check()
    
    if(clicked == 0){
        PrevArrow.style.display="none";
    }
});

//When top icon clicked --> change slide contens and icon
house.addEventListener("click", function () {
     
    clicked = 0;
    
    //hide the prev arrow
    PrevArrow.style.display = "none";
    NextArrow.style.display = "block";
    
    //change top icons
    house.src = "../SVG/house-colored.svg";
    toy.src = "../SVG/toys.svg";
    food.src = "../SVG/food.svg";

    //change contents
    item1.src = foodImages[0];
    complete.innerHTML="";
    itemName.innerHTML = "WALKING"; 
    itemDetails.innerHTML =  "They are inactive indoors, ideal for apartments, and have a low to moderate energy level." ;
    infographic.src = infoG[0]
    
    check()
});

toy.addEventListener("click", function (){
    
    clicked = 2;
    
    NextArrow.style.display = "block";
    PrevArrow.style.display = "block";
    
    //change top icons
    house.src = "../SVG/house.svg";
    toy.src = "../SVG/toys-colored.svg";
    food.src = "../SVG/food.svg";

    //change contents
    item1.src = foodImages[2];
    complete.innerHTML="";
    document.getElementById("eachItemImg").style.width = "38%";
    itemName.innerHTML = "ACTIVITY";
    itemDetails.innerHTML = "<b>30mins per day</b> is recommended acivity time for a Bulldog.<br />";
    infographic.src = infoG[2];
    
    check()

});

food.addEventListener("click", function () {
    
    clicked = 3;
    
    NextArrow.style.display = "block";
    PrevArrow.style.display = "block";
   
    //change top icons
    house.src = "../SVG/house.svg";
    toy.src = "../SVG/toys.svg";
    food.src = "../SVG/food-colored.svg";

    //change contents
    item1.src= foodImages[3];
    complete.innerHTML="";
    itemName.innerHTML = "FOOD";
    itemDetails.innerHTML = "Bulldogs can be prone to sensitive digestion, flatulence, allergies and hip dysplasia. ... Artificial preservatives may trigger allergic reactions and digestive problems. Food ingredients like chicken eggs, dairy and some proteins may also cause hypersensitivity reactions depending on the adaptability of your dogs."
    infographic.src = infoG[3];
    
    check()
    
});
