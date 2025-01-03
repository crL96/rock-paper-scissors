// Define function named getComputerChoice
// Funtion will generate a number between 0-2
// Rock = 0, Paper = 1, Scissors = 2
// IF 0, 1 or 2 return either rock, paper or scissors.
function getComputerChoice() {
    n = Math.floor(Math.random() * 3);
    if (n === 0) {
        return "rock";
    }
    else if (n === 1) {
        return "paper";
    }
    else {
        return "scissors";
    } 
}

// Define a funtion named playRound
// Function will take two parameters as input, humanChoice and computerChoice
// Rock beats scissors, scissors beats paper and paper beats rock.
// If user has rock nest the following:
// IF computer has scissors add 1 to humanScore, add 1 to computerScore if computer has paper, else dont add anything if both have rock.
// Also print you win, you lose or tie depending on the outcome.
// else if user has paper and else for scissors. Same logic within conditions.

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            resultsDisp.textContent = "You win! Rock beats scissors";
            humanScore += 1;
        }
        else if (computerChoice === "paper") {
            resultsDisp.textContent = "You lose! Paper beats rock";
            computerScore += 1;
        }
        else {
            resultsDisp.textContent = "It's a draw!";
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            resultsDisp.textContent = "You win! Paper beats rock";
            humanScore += 1;
        }
        else if (computerChoice === "scissors") {
            resultsDisp.textContent = "You lose! Scissors beats paper";
            computerScore += 1;
        }
        else {
            resultsDisp.textContent = "It's a draw!";
        }
    }
    
    else {
        if (computerChoice === "paper") {
            resultsDisp.textContent = "You win! Scissors beats paper";
            humanScore += 1;
        }
        else if (computerChoice === "rock") {
            resultsDisp.textContent = "You lose! Rock beats scissors";
            computerScore += 1;
        }
        else {
            resultsDisp.textContent =  "It's a draw!";
        }
    }
}

let humanScore = 0;
let computerScore = 0;


function keepScore() {
    scoreDisp.textContent = ("Human score: " + humanScore + " - Computer score: " + computerScore);
    if (humanScore == 5) {
        scoreDisp.textContent = ("You won the game! 5-" + computerScore);
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        scoreDisp.textContent = ("You lost the game! " + humanScore + "-5");
        humanScore = 0;
        computerScore = 0;
    }
}

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const resultsDisp = document.querySelector("#resultsDisp");
const scoreDisp = document.querySelector("#scoreDisp");

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    keepScore();
});

btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    keepScore();
});

btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    keepScore();
});