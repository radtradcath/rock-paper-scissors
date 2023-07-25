const buttons = document.querySelectorAll('.button');
const playerCurrentScore = document.querySelector('.player-current-score');
const computerCurrentScore = document.querySelector('.computer-current-score');
const alertWinner = document.querySelector('.alert-winner');
const footer = document.querySelector('.footer');
const retry = document.createElement('button');
let userScore = 0;
let computerScore = 0;
let startGame = 1;


function getComputerChoice() {
    let choice;
    const availableChoices = ["Rock", "Paper", "Scissors"];
    choice = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        return "";

    } else if ((playerSelection === "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {


        userScore = userScore + 1;
        return playerCurrentScore.textContent = `Player: ${userScore}`;


    }
    else {

        computerScore = computerScore + 1;
        return computerCurrentScore.textContent = `Computer: ${computerScore}`;


    }

}   
gameStart()
function gameStart() {
    
buttons.forEach((button) => button.addEventListener('click', function finishGame() {
    playerSelection = button.id;

    playRound(playerSelection, getComputerChoice());

    if (computerScore == 5) {
        footer.appendChild(retry);
        retry.textContent = "RETRY?";
        retry.setAttribute('style', 'text-align: center;');
        retry.addEventListener('click', gameOver);
        button.removeEventListener('click', finishGame);
        return alertWinner.textContent = "Try again. You lose";
    } else if (userScore == 5) {
        footer.appendChild(retry);
        retry.textContent = "RETRY?";
        retry.setAttribute('style', 'text-align: center;');
        retry.addEventListener('click', gameOver);
        button.removeEventListener('click', finishGame);
        return alertWinner.textContent = "Congrats! You win!"
    }

}))};

function gameOver() {
    userScore = 0;
    computerScore = 0;
    playerCurrentScore.textContent = `Player: ${userScore}`;
    computerCurrentScore.textContent = `Computer: ${computerScore}`;
    alertWinner.textContent = "";
    footer.removeChild(retry);
    startGame = 1;
    gameStart();
    
}
