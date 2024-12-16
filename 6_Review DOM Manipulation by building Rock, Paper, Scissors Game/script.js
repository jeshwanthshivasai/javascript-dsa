function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomOption = Math.floor(Math.random() * options.length);
  return options[randomOption];
}

function hasPlayerWonTheGame() {
  if((player === 'Rock' && computer === 'Scissors') || (player === 'Scissors' && computer === 'Paper') || (player == 'Paper' && computer == 'Rock')) {
    return true;
  }
  return false;
}

console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
console.log(hasPlayerWonTheRound("Scissors", "Rock"));
console.log(hasPlayerWonTheRound("Scissors", "Paper"));
console.log(hasPlayerWonTheRound("Paper", "Rock"));
console.log(hasPlayerWonTheRound("Paper", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));


console.log(getRandomComputerResult());

