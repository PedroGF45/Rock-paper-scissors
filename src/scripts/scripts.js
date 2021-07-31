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
    if (playerScore == 1) {
                document.getElementById("status").textContent = "YOU WON THE GAME. CONGRATULATIONS.";
                const btn = document.createElement("button");
                document.getElementById("tryAgain").appendChild(btn);
                btn.style.cssText = "width: 50px; border-radius: 10px; height: 20px;";
                playerScore = 0;
                computerScore = 0;
    } else if (computerScore == 5) {
                document.getElementById("status").textContent = "YOU LOST THE GAME. TRY AGAIN.";
                playerScore = 0;
                computerScore = 0;
    } 
}

function game() {
    computerSelection = computerPlay();
    gamePlay(playerSelection, computerSelection);
}

//Select rock or paper or scissors through the image
const pickRock = document.getElementById("rock");
pickRock.addEventListener("click", function() {
    playerSelection = "rock";
    game();
});

const pickPaper = document.getElementById("paper");
pickPaper.addEventListener("click", function() {
    playerSelection = "paper";
    game();
});

const pickScissors = document.getElementById("scissors");
pickScissors.addEventListener("click", function() {
    playerSelection = "scissors";
    game();
});