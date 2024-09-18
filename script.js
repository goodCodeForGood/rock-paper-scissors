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

function getHumanChoice() {
  let userChoice = prompt("Enter your choice from rock, paper, scissors:");
  if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
    return userChoice;
  } else {
    alert("Please enter only one of these: rock, paper, scissors");
  }
}

console.log(getHumanChoice());
