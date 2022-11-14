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
    return `It's a draw.`;  //  declare the winner to be the first to 5 points
  }
}

// assign body element to body variable

// create div called container

// create button called rock
// add text content 'Rock' to rock
// add eventListener to rock that calls playRound w/ 'rock' as playerSelection when clicked
// append rock to container

// create button called paper
// add text content 'Paper' to paper
// add eventListener to paper that calls playRound w/ 'paper' as playerSelection when clicked
// append paper to container

// create button called scissors
// add text content 'Scissors' to scissors
// add eventListener to scissors that calls playRound w/ 'scissors' as playerSelection when clicked
// append scissors to container

// append container to body

// create div called scoreBoard
// make scoreBoard's text content call getScore
// append scoreBoard to body

// create div called declareWinner
// make declareWinner call getWinner to get text content
// append declareWinner to body
