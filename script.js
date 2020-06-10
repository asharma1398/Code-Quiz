// buttons
var startButton = document.querySelector("#startButton");

var choiceA = document.querySelector("#button1");
var choiceB = document.querySelector("#button2");
var choiceC = document.querySelector("#button3");
var choiceD = document.querySelector("#button4");

var timeLeft = document.querySelector("#timeLeft");
var secondsLeft = 100; 

var quizQuestionIndex = -1;


// quiz questions, options, and answers 
var quizDetails = [
    {
        questionNum: "#1",
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "<script>",
        choiceB: "<js>",
        choiceC: "<scripting>",
        choiceD: "<javascript>", 
        correctAns: "A",
    },

    {
        questionNum: "#2",
        question: "How do you create a function in JavaScript?",
        choiceA: "function = myFunction()",
        choiceB: "function myFunction()",
        choiceC: "function:myFunction()",
        choiceD: "None of the above", 
        correctAns: "B",
    },

    {
        questionNum: "#3",
        question: "How to write an IF statement in JavaScript?",
        choiceA: "if i == 5 then",
        choiceB: "if i == 5 then",
        choiceC: "if i = 5",
        choiceD: "if (i == 5)", 
        correctAns: "D",
    },

    {
        questionNum: "#4",
        question: "How does a FOR loop start?",
        choiceA: "for (i = 0; i <= 5)",
        choiceB: "for (i = 0; i <= 5; i++)",
        choiceC: "for i = 1 to 5",
        choiceD: "for (i <= 5; i++)", 
        correctAns: "B",
    },

    {
        questionNum: "#5",
        question: "How do you round the number 7.25, to the nearest integer?",
        choiceA: "round(7.25)",
        choiceB: "rnd(7.25)",
        choiceC: "Math.round(7.25)",
        choiceD: "Math.rnd(7.25)", 
        correctAns: "C",
    },

]

// timer starts when start button is clicked
function runTimer () {
    console.log("started quiz");
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
    
        // if(secondsLeft === 0) {
        // call another function?  
        // }
    
    }, 1000);

    // hide h1, p, and startButton 

    document.querySelector("h1").style.display = "none";
    document.querySelector("p").style.display = "none";
    document.querySelector("button").style.display = "none";

    // show question and answerchoices 
    document.querySelector("ol").style.display = "block";
}
// questions appear on page 
// if wrong anwer is picked then decrease the time but 10 seconds 
// end page when timer stops or all questions answered 
// show user their score and section to input username 

startButton.addEventListener("click", runTimer);
