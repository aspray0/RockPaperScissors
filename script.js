// script.js

let playerScore = 0;  // declare playerScore @ 0
let computerScore = 0;  // declare computerScore @ 0
let scoreString = ``;// declare scoreString

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

  let result = '';  // declare result variable

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


function scoreBoard() {  // make scoreBoard function

  if (result === 'win') {  //  if result is win
    playerScore++;   //    increment playerScore
    scoreString = `Player ${playerScore} : Computer ${computerScore}` //  assign scoreString
    console.log(scoreString);  //    log scoreString
  } else if (result === 'lose') {  //  else if result is lose
    computerScore++;  //    increment computerScore
    scoreString = `Player ${playerScore} : Computer ${computerScore}` //  assign scoreString
    console.log(scoreString);  //    log scoreString
  } else {    //  else result is tie
    scoreString = `Player ${playerScore} : Computer ${computerScore}` //  assign scoreString
    console.log(scoreString);  //    log scoreString
  }
}

// make declareWinner function
  if (computerScore > playerScore) {  // if computerScore is 5
    console.log(`The computer wins!`)  //  declare computer the winner
  } else if (playerScore > computerScore) {  // else if playerScore is 5
    console.log(`The player wins!`)//  declare player the winner
  } else {  // else nobody has 5 points
    console.log(`It's a draw.`)  //  declare the winner to be the first to 5 points
}