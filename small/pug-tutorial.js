var NextArrow = document.getElementById("NextArrow"),
    PrevArrow = document.getElementById("PrevArrow"),
    item1 = document.getElementById("item1"),
    itemName = document.getElementById("itemsName"),
    itemDetails = document.getElementById("itemsDetails"),
    infographic = document.getElementById("infograph1")
    toy = document.getElementById("toy"),
    house = document.getElementById("house"),
    food = document.getElementById("food"),
    complete = document.getElementById("complete"),
    toyClicked = 0,
    houseClicked = 1,
    foodClicked = 0;

var currentPosition = 0;
var clicked = 0;
var foodImages = ["../SVG/leash.svg", "../SVG/comb.svg","../SVG/frisbee.svg", "../SVG/foodbag.svg", "../SVG/dogplate.svg", "../SVG/pug-completed.svg"];
var Cprogress = 30;


function slide() {
     if(clicked == 0){
        //change top icons
        house.src = "../SVG/house-colored.svg";
        toy.src = "../SVG/toys.svg";
        food.src = "../SVG/food.svg";
        
        //change contents
        item1.src = foodImages[0];
        complete.innerHTML="";
        itemName.innerHTML = "LEASH <br/>";
        itemDetails.innerHTML="";
        itemDetails.innerHTML =  "Use this when taking your dog for a walk while you are still in the training process! </b><br />" ;
        infographic.src = "../SVG/activity-mod.svg"
        
    } else if(clicked == 1){
        
        //change top icons
        house.src = "../SVG/house-colored.svg";
        toy.src = "../SVG/toys.svg";
        food.src = "../SVG/food.svg";
        
        //change contents
        item1.src = foodImages[1];
        complete.innerHTML="";
        itemName.innerHTML = "BRUSH";
        itemDetails.innerHTML = "Proper brushes for Pug are Slicker Brush Scissors Nail Clipper";
        infographic.src = "../SVG/brush-frequency.svg"
        
    } else if(clicked == 2) {
        //change top icons
        house.src = "../SVG/house.svg";
        toy.src = "../SVG/toys-colored.svg";
        food.src = "../SVG/food.svg";
        
        //change contents
        item1.src = foodImages[2];
        complete.innerHTML="";
        document.getElementById("eachItemImg").style.width = "38%";
        itemName.innerHTML = "TOYS";
        itemDetails.innerHTML = "<b>60mins</b> are recommended acivities time per day.<br />";
        infographic.src = "../SVG/pug-activity.svg"
        
    } else if(clicked == 3) {
        //change top icons
        house.src = "../SVG/house.svg";
        toy.src = "../SVG/toys.svg";
        food.src = "../SVG/food-colored.svg";
        
        //change contents
        item1.src= foodImages[3];
        complete.innerHTML="";
        itemName.innerHTML = "FOOD";
        itemDetails.innerHTML = "Like many dogs, Shiba Inus are especially attracted to meats and they love whole ingredients. Find the right dry kibble to suit this breed's taste buds and be careful to not feed him/her too much as Shiba Inus are prone to gaining weight."
        infographic.src = ""
        
    } else if(clicked == 4) {
        NextArrow.style.display="block";
        //change top icons
        house.src = "../SVG/house.svg";
        toy.src = "../SVG/toys.svg";
        food.src = "../SVG/food-colored.svg";
        
        //change contents
        item1.src = foodImages[4];
        complete.innerHTML="";
        itemName.innerHTML = "FOOD CONSUMPTION";
        itemDetails.innerHTML = "<ul><li>CUPS PER DAY : 1 cup1</li><li>DAILY COST : $1 - $1.1</li><li>MONTHLY COST : $25 - $30</li></ul>";
        
    } else if(clicked == 5) {
        NextArrow.style.display="none";
        
        //change top icons
        house.src = "../SVG/house-colored.svg";
        toy.src = "../SVG/toys-colored.svg";
        food.src = "../SVG/food-colored.svg";
        
        //change contents
        item1.src = foodImages[5];
        complete.innerHTML="100%";
        itemName.innerHTML = "Tutorial Completed!";
        itemDetails.innerHTML = "<a href='pug-quiz.html'><button id='goToQuiz'>Quiz</button></a>";
    }      
}


NextArrow.addEventListener("click", function () {
    
    document.getElementById("progress").style.width = 30+ Cprogress + "px";
    Cprogress += 30;
    console.log(Cprogress);
    
    clicked++;   
    PrevArrow.style.display="block";
    slide();
     
});

PrevArrow.addEventListener("click", function() { 
    clicked--;
    slide()
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
    itemName.innerHTML = "LEASH";
    itemDetails.innerHTML =  "Use this when taking your dog for a walk while you are still in the training process! This tool helps keep your dog close beside you at all times.<br /><br />The Average walk mileage per week for Shiba Inu is <b>8 miles.</b><br />" ;
    
});

toy.addEventListener("click", function (){
    
    clicked = 2;
    
    //change top icons
    house.src = "../SVG/house.svg";
    toy.src = "../SVG/toys-colored.svg";
    food.src = "../SVG/food.svg";
    
    //change contents
    item1.src = foodImages[2];
    document.getElementById("eachItemImg").style.width = "38%";
    itemName.innerHTML = "TOYS";
    itemDetails.innerHTML = "<b>60mins</b> are recommended acivities time per day.<br />Tennis Ball Rope Tug Frisbee";

});




food.addEventListener("click", function () {
    
    clicked = 3;
   
    //change top icons
    house.src = "../SVG/house.svg";
    toy.src = "../SVG/toys.svg";
    food.src = "../SVG/food-colored.svg";

    //change contents
    item1.src= foodImages[3];
    itemName.innerHTML = "FOOD";
    itemDetails.innerHTML = "Like many dogs, Shiba Inus are especially attracted to meats and they love whole ingredients. Find the right dry kibble to suit this breed’s taste buds and be careful to not feed him/her too much as Shiba Inus are prone to gaining weight."
    
    
});

document.getElementById("return").addEventListener("click",function(){
   document.getElementById("iconBoxBorder").style.left="0";
    setTimeout(function(){
        document.getElementById("iconBoxBorder").style.left = "-60px";
    },2500);
    
});