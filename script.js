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
function getPlayerChoice() {

// ask for rock, paper, scissors
// store answer in playerSelection
let playerSelection = prompt('Rock, paper, or scissors?', '');

// convert playerSelection to lowercase
playerSelection = playerSelection.toLowerCase();

// if playerSelection does not equal rock, paper, or scissors
if ((playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scissors')) {

  //  say 'please choose either rock, paper, or scissors' to console
  console.log('Please choose either rock, paper, or scissors.');

} else {  // else
  return playerSelection;  //  return playerSelection
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


function game() {  // make game function

  let playerScore = 0;  // declare playerScore @ 0
  let computerScore = 0;  // declare computerScore @ 0
  let scoreString = `Player ${playerScore} : Computer ${computerScore}`;// declare scoreString

  for (let i = 0; i < 5; i++) { // for five iterations

    // retrieve result from playRound w/ getPlayerChoice and getComputerChoice parameters
    result = playRound(getPlayerChoice(), getComputerChoice());

    if (result === 'win') {  //  if result is win
      playerScore++;   //    increment playerScore
      console.log(scoreString);  //    log scoreString
    } else if (result === 'lose') {  //  else if result is lose
      computerScore++;  //    increment computerScore
      console.log(scoreString);  //    log scoreString
    } else {    //  else result is tie
      console.log(scoreString);  //    log scoreString
    }
  }

  if (computerScore > playerScore) {  // if computerScore is greater than playerScore
    console.log(`${scoreString}. The computer wins!`)  //  declare computer the winner
  } else if (playerScore > computerScore) {  // else if playerScore is greater than computerScore
    console.log(`${scoreString}. The player wins!`)//  declare player the winner
  } else {  // else playerScore is even with computerScore
    console.log(`${scoreString}. It's a draw.`)  //  declare a draw
}
}