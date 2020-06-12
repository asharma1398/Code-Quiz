// buttons
var startButton = document.querySelector("#startButton");
var choiceA = document.querySelector("#button1");
var choiceB = document.querySelector("#button2");
var choiceC = document.querySelector("#button3");
var choiceD = document.querySelector("#button4");

// time variables 
var timeLeft = document.querySelector("#timeLeft");
var secondsLeft = 100; 

// question index initilized
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

// time function 
function runTimer () {
    
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
        
        if(secondsLeft <= 0) {
            // stops timer
            clearInterval(timerInterval);
            
            document.querySelector("#mainPage").style.display = "none";
            document.querySelector("#quizPage").style.display = "none";
            document.querySelector("#scoresPage").style.display = "none";
            document.querySelector("#donePage").style.display = "block";

            document.querySelector("p").textContent = "You score is " + secondsLeft+ ". Enter initials";
            
            runUserForm();
        }

        if((index == quizDetails.length)) {
            
            clearInterval(timerInterval);
            runUserForm();
            
        }
    
    }, 1000);


    document.querySelector("#mainPage").style.display = "none";
    document.querySelector("#quizPage").style.display = "block";
    document.querySelector("#scoresPage").style.display = "none";
    document.querySelector("#donePage").style.display = "none";


    // call function to display quiz content
    runQuizContent();
}

function runQuizContent() {

    document.querySelector("#questions").style.display = "block";
    document.querySelector("#questions").textContent = quizDetails[index].question;

    document.querySelector("#mainPage").style.display = "none";
    document.querySelector("#quizPage").style.display = "block";
    document.querySelector("#scoresPage").style.display = "none";
    document.querySelector("#donePage").style.display = "none";

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

    
    

    if (event.target.textContent !== quizDetails[index].correctAns) {
        
        secondsLeft -= 10;
    } else {
        
    }

    if (index < quizDetails.length - 1) {
        index++;
        runQuizContent();
    } 
    else {
        
        runUserForm();
    }
    
}

function runUserForm() {

    document.querySelector("#mainPage").style.display = "none";
    document.querySelector("#quizPage").style.display = "none";
    document.querySelector("#scoresPage").style.display = "none";
    document.querySelector("#donePage").style.display = "block";

    // remove time on "quiz over page"
    document.querySelector("#timeDisplay").style.display = "none";
    
    document.querySelector("#doneHeader").textContent = "done!";
    document.querySelector("#doneContent").textContent = "You score is " + secondsLeft;

}

// when start button is clicked 
startButton.addEventListener("click", runTimer)

var submitScoreButton = document.querySelector("#submitScore");
var initialsInput = document.querySelector("#initials");
var enteredScores = [];

function runScoreSaver() {
    event.preventDefault();

    var initialsSubmit = document.querySelector("#initials").value; 
    
    enteredScores.push({initial: initialsSubmit, Score: secondsLeft})

    localStorage.setItem("submission", JSON.stringify(enteredScores))

    runScoreBoard();
}

function runScoreBoard() {

    document.querySelector("#timeDisplay").style.display = "none";
    

    document.querySelector("#mainPage").style.display = "none";
    document.querySelector("#quizPage").style.display = "none";
    document.querySelector("#scoresPage").style.display = "block";
    document.querySelector("#donePage").style.display = "none";

    var scores = JSON.parse(localStorage.getItem("submission"));
    // console.log(scores)

}

// when score submit button is clicked 
submitScoreButton.addEventListener("click", runScoreSaver)

function runMainPage() {
    document.querySelector("#mainPage").style.display = "block";
    document.querySelector("#timeDisplay").style.display = "block";

    document.querySelector("#quizPage").style.display = "none";
    document.querySelector("#scoresPage").style.display = "none";
    document.querySelector("#donePage").style.display = "none";


}

// when back to home button is clicked 
var homeButton = document.querySelector("#backToHome")

homeButton.addEventListener("click", runMainPage)



