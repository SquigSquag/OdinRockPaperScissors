document.addEventListener("DOMContentLoaded", function () {

function computerChoice(){
  let arraySelector = Math.floor(Math.random() * 2);
  possibleAnswers = ["rock","paper","scissors"];
  return possibleAnswers[arraySelector];
}

function decideWinner(playerEntry,computerEntry){
  if (playerEntry == "rock" && computerEntry == "scissors"){
    return true;
  }
  else if (playerEntry == "paper" && computerEntry == "rock"){
    return true;
  }
  else if (playerEntry == "scissors" && computerEntry == "paper"){
    return true;
  }
  else{
    return false;
  }
}
function playGame(){
  let userInput = prompt("Please choose rock, paper, or scissors:");
  userInput = userInput.toLowerCase();
  let possibleAnswers = ["rock","paper","scissors"];
  if (possibleAnswers.includes(userInput)){
    if(userInput == computerChoice()){
      return alert("Try again! You tied!")
    }
    else if(decideWinner(userInput,computerChoice())){
      return alert("You win!");
    }
    else{
    return alert("You Lose!");
    }
  }
  else{
    return alert("Please try again, user input error");
  }
}


let thebutton = document.getElementById("startgame");
thebutton.addEventListener("click",playGame);


});