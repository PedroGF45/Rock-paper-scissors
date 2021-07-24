//Define the possible solutions
const arr = ["rock", "paper", "scissors"];
const user = "rock";

//Generate a random solution for the computer from the Array arr
function computerPLay() {
    return arr[Math.floor(Math.random() * arr.length)];
}

//Play a round using if statements and console.log if it's a tie, a win or a lose
const computerSelection = computerPLay();
const playerSelection = user.toLowerCase();

function roundPlay(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "paper") ) {
        return "That's a tie!";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") ) {
        return "Well done! You win!";
    } else {
        return "Unlucky. You lose!";
    }
}

console.log(roundPlay(playerSelection, computerSelection));


