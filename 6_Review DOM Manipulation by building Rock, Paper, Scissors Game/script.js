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

function showResults(userOption) {
  const roundResult = getRoundResults(userOption);

  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultsMessage.innerText = roundResult;
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
