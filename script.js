
function game () {


  
  

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
   let playerSelection = ''
   let computerSelection =  getComputerChoice()
   //console.log('drugi wybur kompa: ' + computerSelection)
   let guessCount = 0;
   let resultMessage
   let guesses = ''
   let compPoints = 0;
   let playaPoints = 0;
  
    

   function rockPaperScissors(playerSelection, computerSelection) {
      
      //getComputerChoice()
      //console.log('trzecii wybur kompa: ' + computerSelection)
      
      //console.log('wybor kompa: ' + computerSelection)
   
      if (guessCount > 4){
         console.log('compPoints: ' + compPoints)
         console.log('playaPoints: ' + playaPoints)
         if (compPoints > playaPoints){
            console.log( "Puter wins")
         } else if (playaPoints > compPoints){
            console.log("playa wins")
         }else (
            console.log('Zee draw ')
         )
       return "had 5 rounds, finito"  
      
      }else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
        
         resultMessage = "Paper is cut by scissors! Computer Wins!"
         guessCount++
         compPoints++
         guesses += playerSelection + " "
         //console.log('comp sles:' + computerSelection)
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses 
         
      }else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){
   
         resultMessage = "Rock beats scissors, player wins!"
         guessCount++
         playaPoints++
         guesses += playerSelection + " "
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+resultMessage + " " + guessCount + " " + " " + guesses
   
      }else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
         
         resultMessage = "Rock is wrapped by paper! Computer Wins!"
         guessCount++
         compPoints++
         guesses += playerSelection + " "
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses
      }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
         
         resultMessage = "Scissors cut Paper!Player Wins!"
         guessCount++
         playaPoints++
         guesses += playerSelection + " "
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses
         
      }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
         
         resultMessage = "Rock does something negative and unpleasant to Scissors!Computer Wins!"
         guessCount++
         compPoints++
         guesses += playerSelection + " "
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses
            
      }else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
   
         resultMessage = 'Paper beats rock. Player wins!'
         guessCount++
         playaPoints++
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
   
   console.log(rockPaperScissors("scissorS", computerSelection))
   console.log(rockPaperScissors("Rock", computerSelection))
   console.log(rockPaperScissors("paper", computerSelection))
   console.log(rockPaperScissors("scissorS", computerSelection))
   console.log(rockPaperScissors("Rock", computerSelection))
   console.log(rockPaperScissors("paper", computerSelection))
   // console.log(rockPaperScissors("scissorS", computerSelection))
   // console.log(rockPaperScissors("Rock", computerSelection))
   // console.log(rockPaperScissors("paper", computerSelection))
   

    
   
}
        
         


   game()
   
   
   
   
   
   
   
   
   

   