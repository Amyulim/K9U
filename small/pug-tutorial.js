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
var foodImages = ["../SVG/leash.svg", "../SVG/comb.svg","../SVG/frisbee.svg", "../SVG/foodbag.svg", "../SVG/dogplate.svg", "../SVG/pug-completed.svg"];
var Cprogress = 30;
var infoG = ["../SVG/activity-mod.svg","../SVG/brush-frequency.svg","../SVG/pug-activity.svg","../SVG/empty.svg"];
var myItemsArray = ["WALKING","BRUSH", "ACTIVITY","FOOD","FOOD CONSUPMSION"];
var clickedArray = ["WALKING"];

function check() {
    /* -1 == false : 즉 어레이안에 없음을 의미*/
    if(clickedArray.indexOf(itemName.innerHTML) == -1) {
        
        clickedArray.push(itemName.innerHTML);
        Cprogress += 30;
        document.getElementById("progress").style.width = Cprogress + "px";
    }
}
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
        itemDetails.innerHTML =  "Use a leash when taking your dog for a walk while you are still in the training process! " ;
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
        itemDetails.innerHTML = "Proper brushes for Pug are <b>Slicker Brush Scissors Nail Clipper</b>";
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
        itemDetails.innerHTML = "<b>40mins</b> are recommended acivities time per day.<br />";
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
        itemDetails.innerHTML = "Never give your pug cooked bones, as they can break easily and damage your dog's internal organs. Raw edible bones should be size appropriate for your pug and their chewing and eating habits. It's important to teach your pug to chew bones before swallowing so you may need to hold the bone while they eat to begin with in training processes."
        infographic.src = infoG[3];
        
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
    
    //console.log(clickedArray);
    //console.log(Cprogress);
    
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
    itemDetails.innerHTML =  "Use a leash when taking your dog for a walk while you are still in the training process! " ;
    infographic.src = infoG[0]
    
    check()
});

toy.addEventListener("click", function (){
    
    clicked = 2;
    
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
    itemDetails.innerHTML = "<b>40mins</b> are recommended acivities time per day.<br />";
    infographic.src = infoG[2];
    
    check()

});

food.addEventListener("click", function () {
    
    clicked = 3;
    
    PrevArrow.style.display = "block";
   
    //change top icons
    house.src = "../SVG/house.svg";
    toy.src = "../SVG/toys.svg";
    food.src = "../SVG/food-colored.svg";

    //change contents
    item1.src= foodImages[3];
    complete.innerHTML="";
    itemName.innerHTML = "FOOD";
    itemDetails.innerHTML = "Never give your pug cooked bones, as they can break easily and damage your dog's internal organs. Raw edible bones should be size appropriate for your pug and their chewing and eating habits. It's important to teach your pug to chew bones before swallowing so you may need to hold the bone while they eat to begin with in training processes."
    infographic.src = infoG[3];
    
    check()
    
});
