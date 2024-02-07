
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
   let playerSelection = ' '
   let computerSelection =  getComputerChoice()
   //console.log('drugi wybur kompa: ' + computerSelection)
   let guessCount = 0;
   let resultMessage = ''
   let guesses = ''
   let compPoints = 0;
   let playaPoints = 0;
  
    function reset(){
      guessCount = 0;
      resultMessage = ''
      guesses = ''
      compPoints = 0;
      playaPoints = 0;
     
    }

   function rockPaperScissors(playerSelection, computerSelection) {
      
      //getComputerChoice()
      //console.log('trzecii wybur kompa: ' + computerSelection)
      
      //console.log('wybor kompa: ' + computerSelection)
      // if (guessCount < 6){
      //    getComputerChoice()
      // }
      if (guessCount > 4){
         
         //console.log('compPoints: ' + compPoints)
         //console.log('playaPoints: ' + playaPoints)
         if (compPoints > playaPoints){
            resultMessage =  "GAME OVER. Puter wins"
            resultosMensaje.textContent = resultMessage
            puterSelect.textContent = 'computer points: ' + compPoints
            playyerSelect.textContent = 'player points: ' + playaPoints
            reset()
         } else if (playaPoints > compPoints){
            resultMessage = "GAME OVER.playa wins"
            resultosMensaje.textContent = resultMessage
            puterSelect.textContent = 'computer points: ' + compPoints
            playyerSelect.textContent = 'player points: ' + playaPoints
            
         }else {
            resultMessage = 'Zee draww'
            resultosMensaje.textContent = resultMessage
            puterSelect.textContent = compPoints
            playyerSelect.textContent = playaPoints
         }
         reset()
       return "had 5 rounds, finito"  
      
      }else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
         guessCount++
         compPoints++
         guesses += playerSelection + " "
         puterSelect.textContent = 'comp selection: ' + computerSelection
         playyerSelect.textContent ='player selection:' + playerSelection
         resultMessage = "Paper is cut by scissors! Computer Wins the Round!"
         resultosMensaje.textContent = resultMessage + ' computer points: ' + compPoints + ' player points: ' + playaPoints
         //results.textContent = computerSelection
        
         
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses 
         
      }else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){
         puterSelect.textContent = 'comp selection: ' + computerSelection
         playyerSelect.textContent ='player selection:' + playerSelection
         resultMessage = "Rock beats scissors, player wins the Round!"
         
         //resultosMensaje.textContent = resultMessage
         //results.textContent = computerSelection
         guessCount++
         playaPoints++
         guesses += playerSelection + " "
         resultosMensaje.textContent = resultMessage + ' computer points: ' + compPoints + ' player points: ' + playaPoints
         //cosnole.log('computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+resultMessage + " " + guessCount + " " + " " + guesses)
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+resultMessage + " " + guessCount + " " + " " + guesses
   
      }else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
         puterSelect.textContent = 'comp selection: ' + computerSelection
         playyerSelect.textContent ='player selection:' + playerSelection
         resultMessage = "Rock is wrapped by paper! Computer Wins the Round!"
         //results.textContent = computerSelection
         guessCount++
         compPoints++
         guesses += playerSelection + " "
         resultosMensaje.textContent = resultMessage + ' computer points: ' + compPoints + ' player points: ' + playaPoints

        // console.log('computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+resultMessage + " " + guessCount + " " + " " + guesses)
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses
      }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
         guessCount++
         playaPoints++
         //results.textContent = computerSelection
         guesses += playerSelection + " "
         puterSelect.textContent = 'comp selection: ' + computerSelection
         playyerSelect.textContent ='player selection:' + playerSelection
         resultMessage = "Scissors cut Paper!Player Wins the Round!"
         resultosMensaje.textContent = resultMessage + ' computer points: ' + compPoints + ' player points: ' + playaPoints
         
        // cosnole.log('computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+resultMessage + " " + guessCount + " " + " " + guesses)
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses
         
      }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
         guessCount++
         compPoints++
         //results.textContent = computerSelection
         guesses += playerSelection + " "
         puterSelect.textContent = 'comp selection: ' + computerSelection
         playyerSelect.textContent ='player selection:' + playerSelection
         resultMessage = "Rock does something negative and unpleasant to Scissors!Computer Wins the Round!"
         resultosMensaje.textContent = resultMessage + ' computer points: ' + compPoints + ' player points: ' + playaPoints
         
         return 'computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+ resultMessage + " " + guessCount + " " + " " + guesses
            
      }else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
         guessCount++
         playaPoints++
         guesses += playerSelection + " "
         puterSelect.textContent = 'comp selection: ' + computerSelection
         playyerSelect.textContent ='player selection:' + playerSelection
         resultMessage = 'Paper beats rock. Player wins the Round!'
         resultosMensaje.textContent = resultMessage + ' computer points: ' + compPoints + ' player points: ' + playaPoints
         
         //results.textContent = computerSelection
         
        // console.log('computer selec: '+ computerSelection + ' player selec: '+ playerSelection + ' '+resultMessage + " " + guessCount + " " + " " + guesses)
        // results.textContent =  'computer selec:     ' + computerSelection + 
         'player sel' 
         // `computer selec:  ${computerSelection} 
         // player selec: ${playerSelection} + ' '+ resultMessage + " " + guessCount + " " + " " + guesses`
            }
       else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
         puterSelect.textContent = 'comp selection: ' + computerSelection
         playyerSelect.textContent ='player selection:' + playerSelection
         resultMessage = "Draw. play again!"
         resultosMensaje.textContent  = resultMessage + ' computer points: ' + compPoints + ' player points: ' + playaPoints
         
         //return rockPaperScissors('paper', getComputerChoice())
         
               
      
      }else if (playerSelection.toLowerCase() !== 'scissors' || playerSelection.toLowerCase() !== 'rock' || playerSelection.toLowerCase() !== 'paper'){
   
            return resultMessage = "Try again, probs typo.."
            
           
            
   
      } 
    
      
  
   }

   //console.log('last row comp slection: ' + computerSelection)


   
   //rockPaperScissors(playerSelection = prompt('what?'), computerSelection)
   
   // console.log(rockPaperScissors("scissorS", computerSelection))
   // console.log(rockPaperScissors("Rock", computerSelection))
   // console.log(rockPaperScissors("paper", computerSelection))
   // console.log(rockPaperScissors("scissorS", computerSelection))
   // console.log(rockPaperScissors("Rock", computerSelection))
   // console.log(rockPaperScissors("paper", computerSelection))
   // console.log(rockPaperScissors("scissorS", computerSelection))
   // console.log(rockPaperScissors("Rock", computerSelection))
   // console.log(rockPaperScissors("paper", computerSelection))
   

   const buttonsContainer = document.createElement('div')
   buttonsContainer.id = 'buttonsContainer'
   buttonsContainer.style.display = 'flex'
   buttonsContainer.style.justifyContent = 'space-around'

   document.body.appendChild(buttonsContainer)


   const rockButton = document.createElement('button')
   rockButton.textContent = 'ROCK'
   buttonsContainer.appendChild(rockButton)  

   const paperButton = document.createElement('button')
   paperButton.textContent = 'PAPER'
   buttonsContainer.appendChild(paperButton)  

   const scissorsButton = document.createElement('button')
   scissorsButton.textContent = 'SCISSORS'
   buttonsContainer.appendChild(scissorsButton)

   //styles
   rockButton.style.marginLeft= '80px'
   scissorsButton.style.marginRight = '80px' 
   //styles

   rockButton.addEventListener('click', function() {
      getComputerChoice()
      rockPaperScissors('rock', getComputerChoice())
   })

   paperButton.addEventListener('click', function() {
      getComputerChoice()
      rockPaperScissors('paper', getComputerChoice())
   })

   scissorsButton.addEventListener('click', function() {
      getComputerChoice()
      rockPaperScissors('scissors', getComputerChoice())
   })
   // rockPaperScissors('scissors', getComputerChoice())
   // rockPaperScissors('scissors', getComputerChoice())
   // rockPaperScissors('scissors', getComputerChoice())
   const results = document.createElement('div')
   results.id = 'results-div'
   document.body.appendChild(results)
   
   const puterSelect = document.createElement('div')
   puterSelect.id = 'puter-select'
   results.appendChild(puterSelect)

   const playyerSelect = document.createElement('div')
   playyerSelect.id = 'playyter-select'   
   results.appendChild(playyerSelect)


   const puterPoints = document.createElement('div')
   puterPoints.id = 'puter-points'
   //puterPoints.textContent = 'this is comouter selection: ' + computerSelection
   results.appendChild(puterPoints)


   const playerPoints = document.createElement('div')
   playerPoints.id = 'player-points'
   //playerPoints.textContent = 'this is comouter selection: ' + computerSelection
   results.appendChild(playerPoints)

   const resultosMensaje = document.createElement('div')
   resultosMensaje.id = 'resultos-mensaje'
   results.appendChild(resultosMensaje)
   

}
        
         


   game()

   //const body = document.querySelector('body')


  
   
   
   
   
   

   