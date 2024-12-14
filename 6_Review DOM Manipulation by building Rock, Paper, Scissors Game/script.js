function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomOption = Math.floor(Math.random() * options.length);
  return options[randomOption];
  Math.floor(Math.random(options[0])) + 1;
  Math.floor(Math.random(options[1])) + 1;
  Math.floor(Math.random(options[2])) + 1;
}
console.log(getRandomComputerResult());