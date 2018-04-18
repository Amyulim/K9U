var answerLists = ["40 Minutes","Slicker Brush, Scissors, Nail Clipper","$25 ~ $30"];
var myanswerList = [];
var item1 = document.getElementById("item1"),
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
    total = 0;

 
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
        rightanswerdiv.innerHTML = "<i> " + answerLists[i]+" is the right answer.</i>"
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
    clicked(answersCircle1, firstAnswer);
    unclicked(answersCircle2,secondAnswer);
    unclicked(answersCircle3,thirdAnswer); 
    an = 1;
});

secondAnswer.addEventListener("click", function () {
    clicked(answersCircle2, secondAnswer);
    unclicked(answersCircle1,firstAnswer);
    unclicked(answersCircle3,thirdAnswer);  
    an = 2;
});

thirdAnswer.addEventListener("click", function () {
    clicked(answersCircle3, thirdAnswer);
    unclicked(answersCircle1,firstAnswer);
    unclicked(answersCircle2,secondAnswer);  
    an = 3;
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
        quizDes.innerHTML = "<b>Q2.</b> What types of brushes are suitable for pug? "

        an1.innerHTML = "Slicker Brush, comb, Nail Clipper";
        an2.innerHTML = "Slicker Brush, Scissors, Nail Clipper";
        an3.innerHTML = "Slicker Brush, Nail Clipper";
        
    }else if(clickedNum == 2){
        //quiz progress - change circle color
        quiz3.style.backgroundColor = "#D33737";
        
        item1.src="../SVG/quiz-food.svg";
        quizDes.innerHTML = "<b>Q3.</b> How much is the expected monthly food cost for pug? "

        an1.innerHTML = "$25 ~ $30";
        an2.innerHTML = "$30 ~ $35";
        an3.innerHTML = "$35 ~ $40";
        
    } else {
        
         item1.src = "../SVG/quiz-100.svg"
         quizDes.innerHTML = " <h3>You've finished Quiz !</h3> "
         an1.innerHTML = "Q1. "
         an2.innerHTML = "Q2. "
         an3.innerHTML = "Q3. "
       
         rightanswer(0,an1,answersCircle1,firstAnswer,rightAnswer1);
         rightanswer(1,an2,answersCircle2,secondAnswer,rightAnswer2);
         rightanswer(2,an3,answersCircle3,thirdAnswer,rightAnswer3); 
   
        
//        console.log(total);
        
        //based on correct answers, change image and go to the last page
        if(total == 0){
             item1.src = "../SVG/quiz-0.svg"
             nextQuiz.addEventListener("click", function () {
                document.getElementById("gotoLastpage").href="quiz-failed.html"
             });
        }else if(total == 33){
             item1.src = "../SVG/quiz-33.svg"
             nextQuiz.addEventListener("click", function () {
                 document.getElementById("gotoLastpage").href="quiz-failed.html"
             });
        }else if(total == 66){
             item1.src = "../SVG/quiz-66.svg"
            nextQuiz.addEventListener("click", function () {
                 document.getElementById("gotoLastpage").href="quiz-failed.html"
             });
        }else{  
             item1.src = "../SVG/quiz-100.svg"
              nextQuiz.addEventListener("click", function () {
                 document.getElementById("gotoLastpage").href="quiz-passed.html"
             });
        }
    }
});
