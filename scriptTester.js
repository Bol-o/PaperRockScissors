function game (){
   
   let comoPoint = 0
   let playaPoint = 0
   
   function paperNthat (compChoi, playaChoi){
 

   if (compChoi == 'paper' && playaChoi == 'scissors') {
      playaPoint++
      console.log('papa looses to scisscc, comp looses')
      console.log('comp points: ' + (comoPoint))
      console.log('play points: ' + playaPoint)
      return console.log('return stopped it')
   }else if ( compChoi == 'paper' && playaChoi == 'rock'){
      comoPoint++
      console.log('papa wraps rock, comp wins')
      console.log('comp points: ' + comoPoint)
      console.log('play points: ' + playaPoint)
   }
   
}
paperNthat ('paper', 'rock')
paperNthat ('paper', 'scissors')
paperNthat ('paper', 'rock')
}
game()