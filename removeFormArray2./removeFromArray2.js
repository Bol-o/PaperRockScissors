const removeFromArray = function(array, ...arguments) {
    //add a loop here that takes the arguments entered above and pushes them into an array, and then run the below loops
    //to compare items in the arrays, as the splice() works not as expected,some the args are actually treated as
    //indexes in the splice() i think
    let aRRay 
        for (let i = 0; i < arguments.length; i++){
            for (let j = 0; j < array.length; j++){
            if (array[j] === arguments[i] ){
            let aRRay = array.splice(j, 1)
        
            }
        }
        }
        console.log(arguments)
        console.log(aRRay)
        return array
    
    };
    console.log(removeFromArray([1,1,2,3,1,2,3,1],1,2,'3'))
    //console.log(array)
    // Do not edit below this line
    module.exports = removeFromArray;
    