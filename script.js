// buttons
var startButton = document.querySelector("#startButton");

var choiceA = document.querySelector("#button1");
var choiceB = document.querySelector("#button2");
var choiceC = document.querySelector("#button3");
var choiceD = document.querySelector("#button4");

var timeLeft = document.querySelector("#timeLeft");
var secondsLeft = 100; 

var quizQuestionIndex = -1;
var index = 0;


// quiz questions, options, and answers 
var quizDetails = [
    {
        questionNum: "#1",
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "<script>",
        choiceB: "<js>",
        choiceC: "<scripting>",
        choiceD: "<javascript>", 
        correctAns: "<script>",
    },

    {
        questionNum: "#2",
        question: "How do you create a function in JavaScript?",
        choiceA: "function = myFunction()",
        choiceB: "function myFunction()",
        choiceC: "function:myFunction()",
        choiceD: "None of the above", 
        correctAns: "function myFunction()",
    },

    {
        questionNum: "#3",
        question: "How to write an IF statement in JavaScript?",
        choiceA: "if i == 5 then",
        choiceB: "if i == 5 then",
        choiceC: "if i = 5",
        choiceD: "if (i == 5)", 
        correctAns: "if (i == 5)",
    },

    {
        questionNum: "#4",
        question: "How does a FOR loop start?",
        choiceA: "for (i = 0; i <= 5)",
        choiceB: "for (i = 0; i <= 5; i++)",
        choiceC: "for i = 1 to 5",
        choiceD: "for (i <= 5; i++)", 
        correctAns: "for (i = 0; i <= 5; i++)",
    },

    {
        questionNum: "#5",
        question: "How do you round the number 7.25, to the nearest integer?",
        choiceA: "round(7.25)",
        choiceB: "rnd(7.25)",
        choiceC: "Math.round(7.25)",
        choiceD: "Math.rnd(7.25)", 
        correctAns: "Math.round(7.25)",
    },

]

// timer starts when start button is clicked
function runTimer () {
    
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
    
        if(secondsLeft <= 0) {
            // stops timer
            clearInterval(timerInterval);
            // hide h1, p, and startButton 
            document.querySelector("h1").style.display = "block";
            document.querySelector("p").style.display = "block";
            document.querySelector("button").style.display = "none";
            
            document.querySelector("h1").textContent = "done!";
            document.querySelector("p").textContent = "quiz is over"
            
            runUserForm();
        }
    
    }, 1000);

    // hide h1, p, and startButton 
    document.querySelector("h1").style.display = "none";
    document.querySelector("p").style.display = "none";
    document.querySelector("button").style.display = "none";

    // show question and answerchoices 
    document.querySelector("ol").style.display = "block";

    // call function to display quiz content
    runQuizContent();
}

// questions appear on page 

function runQuizContent () {
    console.log("hello");
    document.querySelector("p").style.display = "block";
    document.querySelector("p").textContent = quizDetails[index].question;

    document.querySelector("#startButton").style.display = "none";

    document.querySelector("#button1").style.display = "block";
    document.querySelector("#button2").style.display = "block";
    document.querySelector("#button3").style.display = "block";
    document.querySelector("#button4").style.display = "block";

    document.querySelector("#button1").textContent = quizDetails[index].choiceA;
    document.querySelector("#button2").textContent = quizDetails[index].choiceB;
    document.querySelector("#button3").textContent = quizDetails[index].choiceC;
    document.querySelector("#button4").textContent = quizDetails[index].choiceD;

    document.querySelector("#button1").addEventListener("click", runCheckAnswer)
    document.querySelector("#button2").addEventListener("click", runCheckAnswer)
    document.querySelector("#button3").addEventListener("click", runCheckAnswer)
    document.querySelector("#button4").addEventListener("click", runCheckAnswer)
    
}

function runCheckAnswer () {

    console.log("hi")
    console.log(event.target.textContent)

    if (event.target.textContent !== quizDetails[index].correctAns) {
        console.log("wrong");
        secondsLeft -= 10;
    } else {
        console.log("right");
    }

    if (index < quizDetails.length - 1) {
        index++;
        runQuizContent();
    } else {
        runUserForm();
    }
    
}

function runUserForm() {

    var userInitials = document.createElement("input"); 
    document.body.appendChild(userInitials);

}

// if wrong anwer is picked then decrease the time but 10 seconds 
// end page when timer stops or all questions answered 
// show user their score and section to input username 

startButton.addEventListener("click", runTimer);
