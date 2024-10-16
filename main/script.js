let ComputerChoice;
let humanChoice;
let humanScore = 0;
let ComputerScore = 0;
let Tie = 0;
let Round = 0;

const PScore = document.querySelector("#PScore");
const CScore = document.querySelector("#Cscore");
const tiw = document.querySelector("#tie");
const result = document.querySelector(".Round");

function Rock(){
  Round++;
  humanChoice = "Rock";
  round();
};

function Paper(){
  humanChoice = "Paper";
  Round++;
  round();
};

function Scissors(){
  Round++;
  humanChoice = "Scissors";
  round();
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

  updateScore();
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
  updateScore();
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
  updateScore();
};



function updateScore(){

PScore.innerHTML = humanScore;
  CScore.innerHTML = ComputerScore;
  tiw.innerHTML = Tie;
}

function round(){
  if (Round = 5 & humanScore > ComputerScore) {
    result.innerHTML = "You win! This Round :)"
}   else if(Round = 5 & humanScore < ComputerScore){
  result.innerHTML = "Computer Wins This round :( "
      };
      if (Round > 5) {
        Round = 0;
        humanScore = 0;
        ComputerScore = 0;
        Tie = 0;
        result.innerHTML = "";
      };
    
}



///////////////////////////magnet shit//////////////////////

