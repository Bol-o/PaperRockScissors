function getComputerChoice(){
   let numb =  Math.ceil(Math.random() * 3) 

   if (numb == 1){
      return 'Paper'
   }else if (numb == 2){
      return 'Scissors'
   }else{
      return 'Rock'
   }
}
//console.log(getComputerChoice());
let playerSelection = '';
let computerSelection = getComputerChoice();
function rockPaperScissors(playerSelection, computerSelection) {

 

   if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
      console.log( `computer chose: ${computerSelection}`)
      return "Paper is cut by scissors! Computer Wins!"
      
   }else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
      console.log( `computer chose: ${computerSelection}`)
      return "Rock is wrapped by paper! Computer Wins!"

   }else if(playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
      console.log( `computer chose: ${computerSelection}`)
      return "Paper wraps rock! Player wins!"
   }
   
   else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
      console.log( `computer chose: ${computerSelection}`)
      return "Scissors cut Paper!Player Wins!"

   }   else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
      console.log( `computer chose: ${computerSelection}`)
      return "Rock does something negative and unpleasant to Scissors!Player Wins!"

   
   } else {
      console.log( `computer and you chose: ${computerSelection}`)
      return "Boooorning! A draw!"
   }
}
console.log(rockPaperScissors("scissors", computerSelection));

