var currentQuestionIndex = 0;
var numberCorrect = 0;

var questionLibrary = [
    {
        question: "What is the longest river in the United States?",
        allAnswers: ["Rio Grande River", "Mississippi River", "Colorado River", "Missouri River"],
        correctAnswer: "Missouri River"
    },
    {
        question: "What US state is bordered by South Dakota, Wyoming, Colorado, Kansas, Iowa, and Missouri?",
        allAnswers: ["Oklahoma", "Utah", "Arkansas", "Nebraska"],
        correctAnswer: "Nebraska"
    },
    {
        question: "Death Valley is located in what U.S. state?",
        allAnswers: ["Nevada", "Utah", "Texas", "California"],
        correctAnswer: "California"
    },
    {
        question: "What is the highest point in the continental U.S.?",
        allAnswers: ["Mount Hood", "Mount Ranier", "Mount Everest", "Denali"],
        correctAnswer: "Denali"
    },
    {
        question: "Annapolis is the capital of what State?",
        allAnswers: ["Pennsylvania", "Deleware", "New Hampshire", "Maryland"],
        correctAnswer: "Maryland"
    },
    {
        question: "Which state EAST of the Mississippi River is largest?",
        allAnswers: ["Florida", "New York", "Pennsylvania", "Michigan"],
        correctAnswer: "Michigan"
    },
    {
        question: "Which U.S. city hosted the 1996 Olumpics?",
        allAnswers: ["Los Angeles", "Salt Lake City", "Lake Placid", "Atlanta"],
        correctAnswer: "Atlanta"
    },
    {
        question: "How many counties are in the state of North Carolina",
        allAnswers: ["50", "75", "150", "100"],
        correctAnswer: "100"
    },
    {
        question: "Which is the largest of The Great Lakes?",
        allAnswers: ["Lake Huron", "Lake Erie", "Lake Michigan", "Lake Superior"],
        correctAnswer: "Lake Superior"
    },
    {
        question: "In which state can you find the Badlands National Park?",
        allAnswers:  ["Tennessee", "Missouri", "Colorado", "South Dakota"],
        correctAnswer: "South Dakota"
    },
]

function populateQA(){
    var randomizeAnswers = Math.floor(Math.random()*4)
    document.getElementById("triviaQuestion").innerHTML = questionLibrary[currentQuestionIndex].question;
    document.getElementsByClassName("answerOptions")[0].innerText = questionLibrary[currentQuestionIndex].allAnswers[randomizeAnswers];
    randomizeAnswers = (randomizeAnswers + 1) % 4;
    document.getElementsByClassName("answerOptions")[1].innerText = questionLibrary[currentQuestionIndex].allAnswers[randomizeAnswers];
    randomizeAnswers = (randomizeAnswers + 1) % 4;
    document.getElementsByClassName("answerOptions")[2].innerText = questionLibrary[currentQuestionIndex].allAnswers[randomizeAnswers];
    randomizeAnswers = (randomizeAnswers + 1) % 4;
    document.getElementsByClassName("answerOptions")[3].innerText = questionLibrary[currentQuestionIndex].allAnswers[randomizeAnswers];
}

$('.answerOptions').click(function(event){
    var buttonVal = event.target.innerText;
    if(buttonVal === questionLibrary[currentQuestionIndex].correctAnswer) {
        alert("Correct!");
        numberCorrect = numberCorrect + 1;
    } else {
        alert("Sorry, that's not right.")
    }
    currentQuestionIndex = currentQuestionIndex + 1;
    if(currentQuestionIndex > 9) {
        //display score
        $("#triviaQuestion").text("You scored " + numberCorrect + " out of 10");
        $('.row').addClass('hidden');
    } else {
        populateQA();
    }
})

$('#start-button').click(function(event){
    $('.row').removeClass('hidden');
    $('#start-button-row').addClass('hidden');
    populateQA();
})
