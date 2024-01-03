const reverseString = function(stringToReverse) {
    let reversedString = '';
    const stringArray = stringToReverse.split("");
    let i = stringArray.length - 1;
    while(i >= 0){
        reversedString += stringArray[i];
        i--;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
