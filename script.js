function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        return "rock";
    } else if (num == 2) {
        return "scissors"
    } else if (num == 3) {
        return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "It's a draw!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors" || playerSelection.toLowerCase() == "scissors" && computerSelection == "paper" || playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You Win!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper" || playerSelection.toLowerCase() == "scissors" && computerSelection == "rock" || playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You Lose!";
    } else if (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors") {
        return "Invalid guess, please enter 'Rock', 'Paper', or 'Scissors'";
    };
}


function playGame() {
    let cCount = 0
    let pCount = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter Rock, Paper, or Scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log("You selected " + playerSelection);
        console.log("The computer selected " + computerSelection);
        console.log(result);
        if (result == "You Lose!") {
            cCount++;
            console.log("Your Score: " + pCount + ". " + "Computer Score: " + cCount);
        } else if (result == "You Win!") {
            pCount++;
            console.log("Your Score: " + pCount + ". " + "Computer Score: " + cCount);
        } else if (result == "It's A Draw!") {
            console.log("Your Score: " + pCount + ". " + "Computer Score: " + cCount);
        } else if (result="Invalid guess, please enter 'Rock', 'Paper', or 'Scissors'") {
            i--;
        }
    }

    if (pCount > cCount) {
        console.log("Final Result: You Win!");
    }
    else if (pCount < cCount) {
        console.log("Final Result: You Lose!");
    } else {
        console.log("It's A Draw!");
    }
}

playGame();

