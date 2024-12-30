function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

//global scores for state management
let playerScore = 0;
let computerScore = 0;

// This function remains clean and focused on checking round outcomes.
// By isolating the win conditions here, the logic becomes reusable inside getRoundResults().
function hasPlayerWonTheGame(player, computer) {
  return (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Scissors' && computer === 'Paper') ||
    (player == 'Paper' && computer == 'Rock')
  )
}

//Determines the computer’s choice using getRandomComputerResult
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  //Checks the winner using hasPlayerWonTheRound():
  // If the player wins: Increment playerScore and return a message.
  // If the computer wins: Increment computerScore and return a message.
  // If it’s a tie: Return a tie message.
  if(hasPlayerWonTheGame(userOption, computerResult)) {
    playerScore++;
    return `Player Wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer Wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById('player-score');
const computerScoreSpanElement = document.getElementById('computer-score');
const roundResultsMessage = document.getElementById('results-msg');

const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");


function showResults(userOption) {
  roundResultsMessage.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if(playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!"
    resetGameBtn.style.display = "block"
    optionsContainer.style.display = "none"
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!"
    resetGameBtn.style.display = "block"
    optionsContainer.style.display = "none"
  }
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
