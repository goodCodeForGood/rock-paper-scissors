let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let compChoice = "";
  // random number b/w 1 and 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    compChoice = "rock";
  } else if (randomNumber == 2) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
  return compChoice;
}

function getHumanChoice() {
  let userChoice = prompt("Enter your choice from rock, paper, scissors:")
    .toLowerCase()
    .trim(); // .trim() to remove any leading or trailing spaces
  // if (
  //   userChoice == "rock" ||
  //   userChoice == "paper" ||
  //   userChoice == "scissors"
  // )

  // To ensure the user choice matches exactly with the options
  if (["rock", "paper", "scissors"].includes(userChoice)) {
    return userChoice;
  } else {
    alert("Please enter only one of these: rock, paper, scissors");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  console.log(`human: ${humanChoice}, comp: ${computerChoice}`);
  if (humanChoice == computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log("not tie");
  }
  /*
    else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats rock.");
    computerScore += 1;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You won. Rock beats scissors.");
    humanScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You won. Paper beats rock.");
    humanScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose. Paper beats scissors.");
    computerScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose. Rock beats scissors.");
    computerScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You won. Scissors beats paper.");
    humanScore += 1;
  }
  */
}

let computerSelection = getComputerChoice();
console.log(computerSelection);
let humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);

/*
human:         rock             paper           scissors
comp:        r  p   s         r    p   s       r    p   s

comp:         rock             paper           scissors
human:      r  p   s         r    p   s       r    p   s

*/
