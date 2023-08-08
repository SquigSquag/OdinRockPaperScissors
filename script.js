document.addEventListener("DOMContentLoaded", function () {

let gameMessage = document.getElementById("message");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playerWins = document.getElementById("playerWinsLabel");
let computerWins = document.getElementById("computerWinsLabel");

rock.addEventListener("click",function () {
  decideWinner("rock")});

paper.addEventListener("click",function () {
  decideWinner("paper")});

scissors.addEventListener("click",function (){
  decideWinner("scissors")});

let playerWinCount = 0;
let computerWinCount = 0;



function computerChoice(){
  let arraySelector = Math.floor(Math.random() * 3);
  possibleAnswers = ["rock","paper","scissors"];
  return possibleAnswers[arraySelector];
}

function decideWinner(playerEntry){
  let computerEntry = computerChoice();
  if (playerEntry === computerEntry) {
    gameMessage.innerHTML = "It's a tie!";
  } 
  else if (
    (playerEntry === "rock" && computerEntry === "scissors") ||
    (playerEntry === "paper" && computerEntry === "rock") ||
    (playerEntry === "scissors" && computerEntry === "paper")
  ) {
    playerWinCount++; // Increment win count
    playerWins.textContent = playerWinCount; // Update displayed win count
    gameMessage.innerHTML = "Player wins!";
  } 
  else{
    computerWinCount++; // Increment win count
    computerWins.textContent = computerWinCount; // Update displayed win count
    gameMessage.innerHTML = "Computer wins!";
  }
}



});
