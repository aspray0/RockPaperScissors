// script.js

let playerScore = 0;  // declare playerScore @ 0
let computerScore = 0;  // declare computerScore @ 0
let result = '';  // declare result variable

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


// make function playRound
function playRound(playerSelection, computerSelection) {

  switch (true) { // switch test condition for truthy-ness
    case (playerSelection === computerSelection): // condition playerSelection same as computerSelection
      console.log(`It's a tie, ${playerSelection} versus ${computerSelection}!`); //   log string saying it's a tie
      result = 'tie'; // result is tie
      return result; // return result
      break;  //   break
    case (playerSelection === 'rock' && computerSelection === 'paper'): // condition player rock computer paper
      console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);  //   log string saying you lose
      result = 'lose';  // result is lose
      return result;  // return result
      break;  //   break
    case (playerSelection === 'rock' && computerSelection === 'scissors'):  // condition player rock computer scissors
      console.log(`You win, ${playerSelection} beats ${computerSelection}!`); //   log string saying you win
      result = 'win'; // result is win
      return result;  // return result
      break;  //   break
    case (playerSelection === 'paper' && computerSelection === 'rock'): // condition player paper computer rock
      console.log(`You win, ${playerSelection} beats ${computerSelection}!`); //   log string saying you win
      result = 'win'; // result is win
      return result;  // return result
      break;  //   break
    case (playerSelection === 'paper' && computerSelection === 'scissors'): // condition player paper computer scissors
      console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);  //   log string saying you lose
      result = 'lose';  // result is lose
      return result;  // return result
      break;  //   break
    case (playerSelection === 'scissors' && computerSelection === 'rock'):  // condition player scissors computer rock
      console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);  //   log string saying you lose
      result = 'lose';  // result is lose
      return result;  // return result
      break;  //   break
    case (playerSelection === 'scissors' && computerSelection === 'paper'): // condition player scissors computer paper
      console.log(`You win, ${playerSelection} beats ${computerSelection}!`); //   log string saying you win
      result = 'win'; // result is win
      return result;  // return result
      break;  //   break
  }
}


function getScore() {  // make getScore function

  let scoreString = ``;// declare scoreString

  if (result === 'win') {  //  if result is win
    playerScore++;   //    increment playerScore
    scoreString = `Player ${playerScore} : Computer ${computerScore}` //  assign scoreString
    return scoreString;  //    return scoreString
  } else if (result === 'lose') {  //  else if result is lose
    computerScore++;  //    increment computerScore
    scoreString = `Player ${playerScore} : Computer ${computerScore}` //  assign scoreString
    return scoreString;  //    return scoreString
  } else {    //  else result is tie
    scoreString = `Player ${playerScore} : Computer ${computerScore}` //  assign scoreString
    return scoreString;  //    return scoreString
  }
}

function getWinner() { // make getWinner function
  if (computerScore >= 5) {  // if computerScore is 5
    return `The computer wins!`;  //  declare computer the winner
  } else if (playerScore >= 5) {  // else if playerScore is 5
    return `The player wins!`;//  declare player the winner
  } else {  // else nobody has 5 points
    return `First to 5 points wins!`;  //  declare the winner to be the first to 5 points
  }
}

const body = document.querySelector('body'); // assign body element to body variable

const container = document.querySelector('#container'); // create div called container

// assign all buttons to buttons variable

// for each button
// add an event listener for a click
// that calls playRound with that button's id for playerSelection

body.appendChild(container); // append container to body

const scoreBoard = document.createElement('div'); // create div called scoreBoard
scoreBoard.textContent = getScore(); // make scoreBoard's text content call getScore
body.appendChild(scoreBoard); // append scoreBoard to body

const declareWinner = document.createElement('div'); // create div called declareWinner
declareWinner.textContent = getWinner(); // make declareWinner call getWinner to get text content
body.appendChild(declareWinner); // append declareWinner to body