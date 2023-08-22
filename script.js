// create array for rock paper scissors
let choices = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;
let playerWins = 0;
let computerWins = 0;

// make random choice for computer
function getComputerChoice() {
    return computerChoice = choices[(Math.floor(Math.random() * choices.length))];
}

// get player choice
function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
}

// compare choices to outcomes of rock paper scissors
function round() {    
    getPlayerChoice();
    getComputerChoice();
    // Tie
    if (playerChoice === computerChoice) {
        return console.log("Tie!");                  
    }
    // Rock
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        console.log("You won! Paper beats Rock!");
        playerWins++;
    }    
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        console.log("Computer Won! Rock beats Scissors!");
        computerWins++;
    }
    
    // Paper
    if (computerChoice === 'paper' && playerChoice === 'rock') {
        console.log("Computer Won! Paper beats Rock!");
        computerWins++;
    }
    
    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        console.log("You Won! Scissors beats Paper!");
        playerWins++;
    }
    
    // Scissors
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        console.log("Computer Won! Scissors beat Paper!");
        computerWins++;
    }
    
    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        console.log("You Won! Rock beats Scissors!");
        playerWins++;
    }
         
}
// round();
// play 5 games keep track of wins and games
function game() {    
    let games = 0;
    while (games < 5) {
        round();
        games++;
    }
    if (playerWins > computerWins) {
        console.log(`Player Wins! ${playerWins} to ${computerWins}!`);
    } else if (playerWins < computerWins) {
        console.log(`Computer Wins! ${computerWins} to ${playerWins}!`)
    } else {
        console.log(`Tie! ${computerWins} to ${playerWins}`);
    }
}
game();