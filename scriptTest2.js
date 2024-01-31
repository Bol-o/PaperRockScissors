const sumArray = function (array) {
    let sum ='';
    array.forEach(function (balls) {
      sum += balls;
    });
    return sum;
  };
  
  console.log(sumArray(['rock', 'rock', 2,' ', 'bock']));