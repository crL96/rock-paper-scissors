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

// Define a function named getHumanChoice
// Prompt user for a choice: rock, paper or scissors and store in variable
// lowercase user choice and check if it matches either rock, paper or scissors
// if yes return choice, otherwise loop.
function getHumanChoice() {
    keepGoing = true;
    while (keepGoing === true) {
        userInput = prompt("Rock, paper or scissors?");
        userChoice = userInput.toLowerCase();

        if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
            keepGoing = false;
            return userChoice;
        }
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
            console.log("You win! Rock beats scissors")
            humanScore += 1;
        }
        else if (computerChoice === "paper") {
            console.log("You lose! Scissors beats rock")
            computerScore += 1;
        }
        else {
            console.log("It's a draw!")
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock");
            humanScore += 1;
        }
        else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper");
            computerScore += 1;
        }
        else {
            console.log("It's a draw!")
        }
    }
    
    else {
        if (computerScore === "paper") {
            console.log("You win! Scissors beats paper");
            humanScore += 1;
        }
        else if (computerScore === "rock") {
            console.log("You lose! Rock beats scissors")
            computerScore += 1;
        }
        else {
            console.log("It's a draw!");
        }
    }
}

let humanScore = 0;
let computerScore = 0;

// Declare function named playGame
// Function will call function playRound and run it n number of times times
// Print score after every round
// Declare winner after game is done
function playGame(n) {
    for (let i = 0; i < n; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human score: " + humanScore + " - Computer score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!")
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game!");
    }
    else {
        console.log("You tied the game!");
    }
}


playGame(5);