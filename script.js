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