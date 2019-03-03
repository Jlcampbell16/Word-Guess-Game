// VARIABLES
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordOptions = ["cancun", "london", "australia", "thailand", "japan"]

var wins = 0;
var losses = 0;

var lettersGuessed = [];
var guessesLeft = 12;

var blankWord = [];
var blankLetter = [];


var directionsText = document.getElementById("directionsText");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var lettersGuessedText = document.getElementById("lettersGuessedText");
var guessesLeftText = document.getElementById("guessesLeftText");
var currentWord = document.getElementById("currentWord");



// FUNCTION
//generate a word
 var wordSelected = wordOptions[Math.floor(Math.random() * wordOptions.length)];

//* reset new word and number values
function reset() {
    guessesLeft = 12
    lettersGuessed = []
    wordSelected
}

//PROCESS
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
        console.log("User Guess: " + userGuess);
        console.log("Computer Word: " + wordSelected);
    for (i = 0; i < wordSelected.length; i++) {

        if (userGuess === wordSelected[i]) {
            blankWord.splice(i,1,wordSelected[i]);
            blankLetter.push(wordSelected[i]);
            document.getElementById("currentWord").textContent = blankWord.join(" ")
            if (blankLetter.length == wordSelected.length) {
                wins++;
                reset();
            }
        }
    }

    if (guessesLeft === 0) {
        losses++;
        reset();
    }
}


// DISPLAY

winsText.textContent = wins;
lossesText.textContent = losses;
lettersGuessedText.textContent = lettersGuessed
guessesLeftText.textContent = guessesLeft