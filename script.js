let playerScore = 0;
let computerScore = 0;

const options = document.querySelectorAll('.options');
const message = document.querySelector("#message");

const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");

// to generate a randome choice for the computer
function generateComputerChoice() {
    const choices = ["paper", "rock", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// to show that the game was a draw
const draw = () => {
    message.innerText = "Game was a Draw. Please play again!";
    message.style.backgroundColor = "#2d2d2d";
};

// to select the options and add event listeners to them
options.forEach((option) => {
    option.addEventListener("click", () => {
        const playerChoice = option.getAttribute("id").toLowerCase();
        playGame(playerChoice);
    });
});

// mathing the compter option with the player option
const playGame = (playerChoice) => {
    const computerChoice = generateComputerChoice();

    if (playerChoice === computerChoice) {
        draw();
    } else {
        let playerWins;
        if (playerChoice === "rock") {
            playerWins = computerChoice === "paper" ? false : true;
        } else if (playerChoice === "paper") {
            playerWins = computerChoice === "scissors" ? false : true;
        } else {
            playerWins = computerChoice === "rock" ? false : true;
        }
        showWinner(playerWins, playerChoice, computerChoice);
    }
};

// display the score and the winner

const showWinner = (playerWins, playerChoice, computerChoice) => {
    if (playerWins) {
        playerScore++;
        message.innerText = `You win! Your ${playerChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    } else {
        computerScore++;
        message.innerText = `You lost! ${computerChoice} beats your ${playerChoice}`;
        message.style.backgroundColor = "red";
    }

    playerScoreElement.innerText = playerScore;
    computerScoreElement.innerText = computerScore;
};