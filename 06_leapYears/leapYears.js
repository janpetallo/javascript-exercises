const leapYears = function(yearToDetermine) {
    let leap = false;
    if(yearToDetermine % 4 === 0){
        leap = true;
        if(yearToDetermine % 100 === 0){
            leap = false;
            if(yearToDetermine % 400 === 0){
                leap = true;
            }
        }
    } 

    return leap;
};

// Do not edit below this line
module.exports = leapYears;
