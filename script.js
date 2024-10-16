let ComputerChoice;
let humanChoice;
let humanScore = 0;
let ComputerScore = 0;
let Tie = 0;

function Rock(){
  humanChoice = "Rock";
};

function Paper(){
  humanChoice = "Paper";
};

function Scissors(){
  humanChoice = "Scissors";
};


function getComputerChoice(){
 let randomNum = Math.random();

 if (randomNum < 1/3){
  ComputerChoice = "Rock";
 }  else if(randomNum < 2/3){
  ComputerChoice = "Paper";
 } else {
  ComputerChoice = "Scissors";
 };

 console.log(ComputerChoice);
};

function testing(){
  // console.log(humanChoice);
};

function resultRock(){
  getComputerChoice();
  if(  ComputerChoice === "Paper"  ){
    ComputerScore++;
    console.log("you lose" , ComputerScore);
  }else if ( ComputerChoice === "Scissors") {
    humanScore++;
    console.log("you win" , humanScore);
  }else{
    Tie++;
    console.log("tie!!" , Tie);
  }
};

function resultPaper(){
  getComputerChoice();
  if(  ComputerChoice === "Paper"  ){
    console.log("tie!!" , Tie);
    Tie++;
  }else if ( ComputerChoice === "Scissors") {
    ComputerScore++;
    console.log("you lose" , ComputerScore);
  }else{
    humanScore++;
    console.log("You win" , humanScore);
  };
};

function resultScissors() {
  getComputerChoice();
  if(  ComputerChoice === "Paper"  ){
    humanScore++;
    console.log("you win" , humanScore);
  }else if ( ComputerChoice === "Scissors") {
    Tie++;
    console.log("tie!! " , Tie);
  }else{
    ComputerScore++;
    console.log("You lose" , ComputerScore);
  }
};








///////////////////////////magnet shit//////////////////////

 