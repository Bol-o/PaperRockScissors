
function game () {
let playerSelection 

// prompt("PAper rock or scissies?")
let computerSelection = getComputerChoice();

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
console.log(computerSelection)

//let rockResult = rockPaperScissors(playerSelection, computerSelection);
let guessCount = 1;
let resultMessage = "";
let guesses
let finMes 

function rockPaperScissors(playerSelection, computerSelection) {
   //playerSelection = prompt("Rocksen papersen or scissoren?")
    if (guessCount === 1){
      guesses = 'Previous guesses: '
    }
    if (guessCount > 2){
      finMes = 'Jugar finita'
      console.log(finMes)
      
      
    }
    

   if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
     
      resultMessage = "Paper is cut by scissors! Computer Wins!"
      guessCount++
      guesses += playerSelection + " "
      
   }else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){

      resultMessage = "Rock beats scissors, player wins!"
      guessCount++
      guesses += playerSelection + " "

   }else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
      
      resultMessage = "Rock is wrapped by paper! Computer Wins!"
      guessCount++
      guesses += playerSelection + " "

   }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
      
      resultMessage = "Scissors cut Paper!Player Wins!"
      guessCount++
      guesses += playerSelection + " "

   }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
      
      resultMessage = "Rock does something negative and unpleasant to Scissors!Player Wins!"
      guessCount++
   
   }else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){

      resultMessage = 'Paper beats rock. Player wins!'
      guessCount++
      guesses += playerSelection + " "
   }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
      resultMessage = "Draw. play again!"
      rockPaperScissors(playerSelection = prompt('what?'), computerSelection)
            
   
   }else if (playerSelection.toLowerCase() !== 'scissors' || playerSelection.toLowerCase() !== 'rock' || playerSelection.toLowerCase() !== 'paper'){

         resultMessage = "Try again, probs typo.."
         

   }
   console.log(resultMessage)
   console.log(guesses)
   // console.log(finMes)
   playerSelection = ""
   
}
rockPaperScissors(playerSelection = prompt('what?'), computerSelection)
rockPaperScissors(playerSelection = prompt('what?'), computerSelection)
rockPaperScissors(playerSelection = prompt('what?'), computerSelection)
rockPaperScissors(playerSelection = prompt('what?'), computerSelection)

     
      
}
game()








