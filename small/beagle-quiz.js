var answerLists = ["60 Minutes","Slicker Brush and Nail Clipper","<h2>$25 ~ $30</h2>"];
var myanswerList = [];
var display = document.getElementById("display"),
    item1 = document.getElementById("item1"),
    quizDes = document.getElementById("quizDescript"),
    quiz1 = document.getElementById("quiz1"),
    answersCircle1 = document.getElementById("answersCircle1"),
    answersCircle2 = document.getElementById("answersCircle2"),
    answersCircle3 = document.getElementById("answersCircle3"),
    firstAnswer = document.getElementById("firstAnswer"),
    secondAnswer = document.getElementById("secondAnswer"),
    thirdAnswer = document.getElementById("thirdAnswer"),
    rightAnswer1 = document.getElementById("rightAnswer1"),
    rightAnswer2 = document.getElementById("rightAnswer2"),
    rightAnswer3 = document.getElementById("rightAnswer3"),
    nextQuiz = document.getElementById("nextQuiz"),
    an1 = document.getElementById("an1"),
    an2 = document.getElementById("an2"),
    an3 = document.getElementById("an3"),
    nextQuiz = document.getElementById("nextQuiz"),
    an = 0,
    clickedNum = 0,
    total = 0,
    num1 = 0,
    num2 = 5;

 
//If the user choose right answers, add total score and make result box green
//If not, don't add and make result box red
function rightanswer(i,anNum,circle,box,rightanswerdiv) {
    if(myanswerList[i] == answerLists[i]){
         anNum.innerHTML += "Correct";
         total += 33;
         circle.src = "../SVG/answer-clicked.svg"
         box.style.border = "3px solid #7D995F";
         
    } else{
        anNum.innerHTML += "Wrong.<br/>"
        rightanswerdiv.innerHTML = "<i> <b>" + answerLists[i]+" </b>is the right answer.</i>"
        box.style.border = "3px solid #D33737";
        circle.src = "../SVG/answer-wrong.svg"
    }
}

//when click one of the answer > change color and add check mark
function clicked(click,div){
     click.src="../SVG/answer-clicked.svg";
     div.style.border = "3px solid #7D995F";
     nextQuiz.style.display = "block";
}

function unclicked(unclick,undiv){
     unclick.src="../SVG/answer-none-clicked.svg";
     undiv.style.border = "none";
}



firstAnswer.addEventListener("click", function () { 
    an = 1;
    if(clickedNum<2){
        clicked(answersCircle1, firstAnswer);
        unclicked(answersCircle2,secondAnswer);
        unclicked(answersCircle3,thirdAnswer);  
    }
});

secondAnswer.addEventListener("click", function () {
    an = 2;
    if(clickedNum <3){
        clicked(answersCircle2, secondAnswer);
        unclicked(answersCircle1,firstAnswer);
        unclicked(answersCircle3,thirdAnswer);    
    }
    
});

thirdAnswer.addEventListener("click", function () {
    an = 3;
    if(clickedNum<3){
        clicked(answersCircle3, thirdAnswer);
        unclicked(answersCircle1,firstAnswer);
        unclicked(answersCircle2,secondAnswer);      
    }
});

nextQuiz.addEventListener("click", function () {
    clickedNum ++;
    console.log(an);
    
    //push the clicked answer to array 
    if(an == 1){
       myanswerList.push(an1.innerHTML);
    } else if(an == 2){
       myanswerList.push(an2.innerHTML);
    } else if(an == 3){
       myanswerList.push(an3.innerHTML);
    }
     console.log(myanswerList);
    
    //make check mark none;
    unclicked(answersCircle1,firstAnswer);
    unclicked(answersCircle2,secondAnswer);
    unclicked(answersCircle3,thirdAnswer);
    
    //Go to the next Quiz
    if(clickedNum == 1){
        //quiz progress - change circle color
        quiz2.style.backgroundColor = "#D33737";
        
        item1.src="../SVG/quiz-brush.svg";
        quizDes.innerHTML = "<b>Q2.</b> What types of brushes are suitable for Beagle? ";

        an1.innerHTML = "Slicker Brush and Nail Clipper";
        an2.innerHTML = "Pin Brush, Scissors, and Nail Clipper";
        an3.innerHTML = "Slicker Brush and Scissors";
        
    }else if(clickedNum == 2){
        
        //quiz progress - change circle color
        quiz3.style.backgroundColor = "#D33737";
        
        item1.src="../SVG/quiz-food.svg";
        quizDes.innerHTML = "<b>Q3.</b> How much is the expected monthly food cost for pug? <br/><span id='i'><i>*click the money icons</i></span>";
        
        //make answer boxes disapper except first one
        secondAnswer.style.display="none";
        thirdAnswer.style.display="none";
        answersCircle1.style.display="none";
        
        //create image for money
        var money2 =document.createElement("img");
        var money =document.createElement("img");  
        
        money2.id="money2";
        money.id="money";
        money2.src="../SVG/money-minus.svg";
        money.src="../SVG/money-plus.svg";
        
        firstAnswer.appendChild(money2);
        firstAnswer.appendChild(money);

        an1.innerHTML = "<h2 id='MyAnswerNum'>$"+ parseInt(num1)+" ~ $"+parseInt(num2)+"</h2>";
        
        //when plus money clicked, add 
        money.addEventListener("click", function(){
            num1 += 5;
            num2 += 5;
            console.log(num1);
            
            an1.innerHTML = "<h2>$"+ parseInt(num1)+" ~ $"+parseInt(num2)+"</h2>";
            
          
        });
        //when minus money clicked, minus
        money2.addEventListener("click", function() {
                num1 -= 5;
                num2 -= 5;
                an1.innerHTML = "<h2>$"+ parseInt(num1)+" ~ $"+parseInt(num2)+"</h2>";
        });
        
    } else if(clickedNum == 3) {
      
        item1.src = "../SVG/quiz-100.svg";
        quizDes.innerHTML = " <h3>You've finished Quiz !</h3> ";
        document.getElementById("money").remove();
        document.getElementById("money2").remove();
        secondAnswer.style.display="block";
        thirdAnswer.style.display="block";
        answersCircle1.style.display="inline-block";
        an1.innerHTML = "Q1. "
        an2.innerHTML = "Q2. "
        an3.innerHTML = "Q3. "
       
        //compared user's answer array with correct answer array
        rightanswer(0,an1,answersCircle1,firstAnswer,rightAnswer1);
        rightanswer(1,an2,answersCircle2,secondAnswer,rightAnswer2);
        rightanswer(2,an3,answersCircle3,thirdAnswer,rightAnswer3); 
   
        //based on correct answers, change image and go to the last page
        if(total == 0){
             item1.src = "../SVG/quiz-0.svg"
             nextQuiz.addEventListener("click", function () {
                document.getElementById("gotoLastpage").href="../quiz-failed.html"
             });
        }else if(total == 33){
             item1.src = "../SVG/quiz-33.svg"
             nextQuiz.addEventListener("click", function () {
                 document.getElementById("gotoLastpage").href="../quiz-failed.html"
             });
        }else if(total == 66){
             item1.src = "../SVG/quiz-66.svg"
            nextQuiz.addEventListener("click", function () {
                 document.getElementById("gotoLastpage").href="../quiz-failed.html"
             });
        }else{  
             item1.src = "../SVG/quiz-100.svg"
              nextQuiz.addEventListener("click", function () {
                 document.getElementById("gotoLastpage").href="../quiz-passed.html"
             });
        }
    }
});
