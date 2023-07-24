const buttons = document.querySelectorAll('.button');
const currentScore = document.querySelector('.current-score');
let userScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice;
    const availableChoices = ["Rock", "Paper", "Scissors"];
    choice = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        return currentScore.textContent = `That's a tie! Player: ${userScore}  Computer: ${computerScore}`;

    } else if ((playerSelection === "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {


        userScore = userScore + 1;
        return currentScore.textContent = `The current score is Player: ${userScore}  Computer: ${computerScore}`;


    }
    else {

        computerScore = computerScore + 1;
        return currentScore.textContent = `The current score is Player: ${userScore}  Computer: ${computerScore}`;


    }

}

buttons.forEach((button) => button.addEventListener('click', () => {
    playerSelection = button.id;

    playRound(playerSelection, getComputerChoice());

    if (computerScore == 5) {
        userScore = 0;
        computerScore = 0;
        return currentScore.textContent = "Try again. You lose";
    } else if (userScore == 5) {
        userScore = 0;
        computerScore = 0;
        return currentScore.textContent = "Congrats! You win!"
    }

}));





