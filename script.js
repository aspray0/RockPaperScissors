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
  computerSelection = 'rock';     //   put 'Rock' in computerSelection
  return computerSelection;       //   return computerSelection
} else if (randomNumber > 0.33) { // else if randomNumber > 0.33
  computerSelection = 'paper';    //   put 'Paper' in computerSelection
  return computerSelection;       //   return computerSelection
} else {                          // else
  computerSelection = 'scissors'; //   put 'Scissors' in computerSelection
  return computerSelection;       //   return computerSelection
}
}

// make getPlayerChoice function
// ask for rock, paper, scissors
// store answer in playerSelection
// convert playerSelection to lowercase
// if playerSelection does not equal rock, paper, or scissors
//  say 'please choose either rock, paper, or scissors' to console
// else
//  return playerSelection

// make function playRound
function playRound(playerSelection, computerSelection) {

switch (true) {// switch test condition for truthy-ness
  case (playerSelection === computerSelection):// condition playerSelection same as computerSelection
    return `It's a tie, ${playerSelection} versus ${computerSelection}!`;//   return string saying it's a tie
    break;//   break
  case (playerSelection === 'rock' && computerSelection === 'paper'):// condition player rock computer paper
    return `You lose, ${computerSelection} beats ${playerSelection}!`;//   return string saying you lose
    break;//   break
  case (playerSelection === 'rock' && computerSelection === 'scissors'):// condition player rock computer scissors
    return `You win, ${playerSelection} beats ${computerSelection}!`; //   return string saying you win
    break;//   break
  case (playerSelection === 'paper' && computerSelection === 'rock'):// condition player paper computer rock
    return `You win, ${playerSelection} beats ${computerSelection}!`;//   return string saying you win
    break;//   break
  case (playerSelection === 'paper' && computerSelection === 'scissors'):// condition player paper computer scissors
    return `You lose, ${computerSelection} beats ${playerSelection}!`;//   return string saying you lose
    break;//   break
  case (playerSelection === 'scissors' && computerSelection === 'rock'):// condition player scissors computer rock
    return `You lose, ${computerSelection} beats ${playerSelection}!`;//   return string saying you lose
    break;//   break
  case (playerSelection === 'scissors' && computerSelection === 'paper'):// condition player scissors computer paper
    return `You win, ${playerSelection} beats ${computerSelection}!`;//   return string saying you win
    break;//   break
}
}