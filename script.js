
function game () {


   let playerSelection = ''
  

   function getComputerChoice(){
   let numb =  Math.ceil(Math.random() * 3) 

   
      if (numb == 1){
         return 'paper'
      }else if (numb == 2){
         return 'scissors'
      }else{
         return 'rock'
      }
   
   }

   let computerSelection =  getComputerChoice()
   //console.log('drugi wybur kompa: ' + computerSelection)
   let guessCount = 0;
   let resultMessage
   let guesses = ''

  
    

   function rockPaperScissors(playerSelection, computerSelection) {
      
      //getComputerChoice()
      //console.log('trzecii wybur kompa: ' + computerSelection)
      
      //console.log('wybor kompa: ' + computerSelection)
   
      if (guessCount > 4){

       return "had 5 rounds, finito"  
      
      }else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
        
         resultMessage = "Paper is cut by scissors! Computer Wins!"
         guessCount++
         guesses += playerSelection + " "
         //console.log('comp sles:' + computerSelection)
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses 
         
      }else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){
   
         resultMessage = "Rock beats scissors, player wins!"
         guessCount++
         guesses += playerSelection + " "
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+resultMessage + " " + guessCount + " " + " " + guesses
   
      }else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
         
         resultMessage = "Rock is wrapped by paper! Computer Wins!"
         guessCount++
         guesses += playerSelection + " "
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses
      }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
         
         resultMessage = "Scissors cut Paper!Player Wins!"
         guessCount++
         guesses += playerSelection + " "
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses
         
      }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
         
         resultMessage = "Rock does something negative and unpleasant to Scissors!Player Wins!"
         guessCount++
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses
            
      }else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
   
         resultMessage = 'Paper beats rock. Player wins!'
         guessCount++
         guesses += playerSelection + " "
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses
            }
       else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
         console.log(resultMessage = "Draw. play again!")
         return rockPaperScissors('paper', getComputerChoice())
         
               
      
      }else if (playerSelection.toLowerCase() !== 'scissors' || playerSelection.toLowerCase() !== 'rock' || playerSelection.toLowerCase() !== 'paper'){
   
            return resultMessage = "Try again, probs typo.."
            
           
            
   
      } 
    
      
  
   }

   //console.log('last row comp slection: ' + computerSelection)


   
   //rockPaperScissors(playerSelection = prompt('what?'), computerSelection)
   
   console.log(rockPaperScissors("scissorS", getComputerChoice()))
   console.log(rockPaperScissors("Rock", getComputerChoice()))
   console.log(rockPaperScissors("paper", getComputerChoice()))
   console.log(rockPaperScissors("scissorS", getComputerChoice()))
   console.log(rockPaperScissors("Rock", getComputerChoice()))
   console.log(rockPaperScissors("paper", getComputerChoice()))
   // console.log(rockPaperScissors("scissorS", computerSelection))
   // console.log(rockPaperScissors("Rock", computerSelection))
   // console.log(rockPaperScissors("paper", computerSelection))
   

    
   
}
        
         


   game()
   
   
   
   
   
   
   
   
   

   