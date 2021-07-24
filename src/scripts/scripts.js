//Define the possible solutions
const arr = ["rock", "paper", "scissors"];

//Generate a random solution for the computer from the Array arr
function computerPlay() {
    return arr[Math.floor(Math.random() * arr.length)];
}

//define the variables needed
let computerSelection = 0;
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

//Play a round using if statements and return if it's a tie, a win or a lose; check if the game is over
function gamePlay(playerSelection, computerSelection) {
        computerSelectionOnScreen();
        if ((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "paper") ) {
            document.getElementById("status").innerHTML = "It's a tie! Try again.";
            document.getElementById("playerScore").innerHTML = playerScore;
            document.getElementById("computerScore").innerHTML = computerScore;
        } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") ) {
            ++playerScore;
            document.getElementById("status").innerHTML = "You won this time. Try again.";
            document.getElementById("playerScore").innerHTML = playerScore;
            document.getElementById("computerScore").innerHTML = computerScore;
            isWin();
        } else {
            ++computerScore;
            document.getElementById("status").innerHTML = "You lost. Try again.";
            document.getElementById("playerScore").innerHTML = playerScore;
            document.getElementById("computerScore").innerHTML = computerScore;
            isWin();
        }
}


//Prints computer selection on screen

let imgOnScreen = document.getElementsByClassName("fas fa-robot")[0];
function computerSelectionOnScreen() {
    if (computerSelection == "rock") {
        imgOnScreen.className = "far fa-hand-rock";
        imgOnScreen.style.marginTop = "60px";
    } else if (computerSelection == "paper") {
        imgOnScreen.className = "far fa-hand-paper";
        imgOnScreen.style.marginTop = "60px";
    } else {
        imgOnScreen.className = "far fa-hand-scissors";
        imgOnScreen.style.marginTop = "60px";
    }
}





//Check Score

function isWin() {
    if (playerScore == 5) {
                document.getElementById("status").innerHTML = "YOU WON THE GAME. CONGRATULATIONS.";
                playerScore = 0;
                computerScore = 0;
    } else if (computerScore == 5) {
                document.getElementById("status").innerHTML = "YOU LOST THE GAME. TRY AGAIN.";
                playerScore = 0;
                computerScore = 0;
    } 
}



//Select rock or paper or scissors through the image
document.getElementById("rock").onclick = function () {
    playerSelection = "rock";
    computerSelection = computerPlay();
    gamePlay(playerSelection, computerSelection);
}

document.getElementById("paper").onclick = function () {
    playerSelection = "paper";
    computerSelection = computerPlay();
    gamePlay(playerSelection, computerSelection);
}

document.getElementById("scissors").onclick = function () {
    playerSelection = "scissors";
    computerSelection = computerPlay();
    gamePlay(playerSelection, computerSelection);
}