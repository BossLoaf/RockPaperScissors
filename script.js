let cScore = 0;
let pScore = 0;

const buttonRock = document.querySelector("#buttonRock");
buttonRock.addEventListener("click", () => {
    let playerSelection = "rock"
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);
})

const buttonPaper = document.querySelector("#buttonPaper");
buttonPaper.addEventListener("click", () => {
    let playerSelection = "paper"
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);
})

const buttonScissors = document.querySelector("#buttonScissors");
buttonScissors.addEventListener("click", () => {
    let playerSelection = "scissors"
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);
})

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
        const results = document.querySelector("#results");
        const resultPara = document.createElement("p");
        resultPara.classList.add("resultPara");
        resultPara.textContent = "It's a draw! Player: " + pScore + ". Computer: " + cScore;
        results.appendChild(resultPara);
    
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors" || playerSelection.toLowerCase() == "scissors" && computerSelection == "paper" || playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        pScore++;
        const results = document.querySelector("#results");
        const resultPara = document.createElement("p");
        resultPara.classList.add("resultPara");
        if (pScore == 5) {
            resultPara.textContent = "Final Result: You Win!  Player: " + pScore + ". Computer: " + cScore;
            results.appendChild(resultPara);
            pScore = 0;
            cScore = 0;
        } else {
            resultPara.textContent = "You Win! Player: " + pScore + ". Computer: " + cScore;
            results.appendChild(resultPara);
        }
        
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper" || playerSelection.toLowerCase() == "scissors" && computerSelection == "rock" || playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        cScore++;
        const results = document.querySelector("#results");
        const resultPara = document.createElement("p");
        resultPara.classList.add("resultPara");
        if (cScore == 5) {
            resultPara.textContent = "Final Result: You Lose!  Player: " + pScore + ". Computer: " + cScore;
            results.appendChild(resultPara);
            pScore = 0;
            cScore = 0;
        } else {
            resultPara.textContent = "You Lose! Player: " + pScore + ". Computer: " + cScore;
            results.appendChild(resultPara);
        }
       
        
    } else if (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors") {
        const results = document.querySelector("#results");
        const resultPara = document.createElement("p");
        resultPara.classList.add("resultPara");
        resultPara.textContent = "Invalid guess, please enter 'Rock', 'Paper', or 'Scissors'";
        results.appendChild(resultPara);
    };
}
