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
    computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        
        return "That's a tie!";

    } else if ((playerSelection === "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {

        
        userScore = userScore + 1;
        currentScore.textContent = `The current score is Player: ${userScore}  Computer: ${computerScore}`;
        

    }
    else {
        
        computerScore = computerScore + 1;
        currentScore.textContent = `The current score is Player: ${userScore}  Computer: ${computerScore}`;
        

    }
    
}

buttons.forEach((button) => button.addEventListener('click', () => {
    playerSelection = button.textContent;
       
    playRound(playerSelection,);

    if (computerScore == 5) {
        userScore = 0;
        computerScore = 0;
        currentScore.textContent = "Try again. You lose";
    }   else if (userScore == 5) {
            userScore = 0;
        computerScore = 0;
            currentScore.textContent = "Congrats! You win!"
        }
    
}));





