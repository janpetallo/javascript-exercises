const repeatString = function(stringToRepeat, numberOfTimes) {
    
    if(numberOfTimes < 0){
        return 'ERROR';
    }

    let stringToReturn = '';
    for(let i = 0; i < numberOfTimes; i++){
        stringToReturn += stringToRepeat;
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
