// script.js

// make function getComputerChoice
function getComputerChoice() {
  
// create var randomNumber
// generate random number between 0 and 1
// put number in randomNumber
let randomNumber = Math.random();

// create var computerSelection
let computerSelection = '';

if (randomNumber > 0.66) {        // if randomNumber > 0.66
  computerSelection = 'Rock';     //   put 'Rock' in computerSelection
  return computerSelection;       //   return computerSelection
} else if (randomNumber > 0.33) { // else if randomNumber > 0.33
  computerSelection = 'Paper';    //   put 'Paper' in computerSelection
  return computerSelection;       //   return computerSelection
} else {                          // else
  computerSelection = 'Scissors'; //   put 'Scissors' in computerSelection
  return computerSelection;       //   return computerSelection
}
}

// make function playRound
// set playerSelection to lower case
// set computerSelection to lower case
// test condition for truthy-ness
// condition playerSelection same as computerSelection
//   return string saying it's a tie
// condition player rock computer paper
//   return string saying you lose
// condition player rock computer scissors
//   return string saying you win
// condition player paper computer rock
//   return string saying you win
// condition player paper computer scissors
//   return string saying you lose
// condition player scissors computer rock
//   return string saying you lose
// condition player scissors computer paper
//   return string saying you win