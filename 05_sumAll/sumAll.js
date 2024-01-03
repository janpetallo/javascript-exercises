const sumAll = function(firstNumber, secondNumber) {
    if(firstNumber < 0 || secondNumber < 0
        || typeof(firstNumber) !== typeof(1) || typeof(secondNumber) !== typeof(1)){
            return 'ERROR'
        } 

    if(secondNumber < firstNumber){
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    let sum = 0;
    for(let i = firstNumber; i <= secondNumber; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
