const getTheTitles = function(books) {
    // map() method creates a new array with the results of 
    // calling a provided function on every element in the calling array.
    return books.map(book => book.title);

};

// Do not edit below this line
module.exports = getTheTitles;
