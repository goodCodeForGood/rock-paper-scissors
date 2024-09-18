console.log("hello world");

function getComputerChoice() {
  let compChoice = "";
  // random number b/w 1 and 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    compChoice = "rock";
  } else if (randomNumber == 2) {
    compChoice = "paper";
  } else {
    // if randomNumber == 3
    compChoice = "scissors";
  }
  return compChoice;
}

console.log(getComputerChoice());