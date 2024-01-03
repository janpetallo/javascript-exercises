const leapYears = function(yearToDetermine) {
    if(yearToDetermine % 4 === 0 &&
        yearToDetermine % 100 === 0 &&
        yearToDetermine % 400 === 0) {
            return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
