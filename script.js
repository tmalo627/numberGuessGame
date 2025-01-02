$(document).ready(function() {


const bestScore = document.getElementById("bestScore");
const guessBoxArea = document.getElementById("guessBox");
const guessesArea = document.getElementById("guesses");

let randomNumber = "";
let guessCounter = 0;
    
$("#start").click(function() {
    guessCounter = 0;
    guessesArea.innerHTML = guessCounter;
    guessBoxArea.innerHTML = "submit a guess";
    guessBoxArea.className = "resetGame";
    randomNumber = Math.ceil(Math.random()*100);
});

$("#submit").click(function() {
    let guess = Number(document.getElementById("guess").value);
    guessCounter++;
    guessesArea.innerHTML = guessCounter;
    if (guess === randomNumber) {
        if (guessCounter < Number(bestScore.innerHTML)) {
            alert("New Best Score!");
            bestScore.innerHTML = guessCounter;
        }
        guessBoxArea.innerHTML = "You win!";
        guessBoxArea.className = "correctAnswer";
        // score.innerHTML = guessCounter;
    }
    else {
        if (guess < randomNumber) {
            document.getElementById("guessBox").innerHTML = "guess higher";
            if (guess >= (randomNumber - 10)) {
                guessBoxArea.className = "closeAnswer";
            }
        }
        if (guess > randomNumber) {
            document.getElementById("guessBox").innerHTML = "guess lower";
            if (guess <= (randomNumber + 10)) {
                guessBoxArea.className = "closeAnswer";
            }
        }
    }
});


});