const removeFromArray = function(array, ...elementsToRemove) {

    for(const elementToRemove of elementsToRemove) {
        let indexToRemove = array.indexOf(elementToRemove);
        if(indexToRemove === -1) continue;
        array.splice(indexToRemove, 1);
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
