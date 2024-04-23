const palindromes = function (string) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // split the cleaned string into an array of characters, 
    // reverse the array, 
    // join the array back into a string
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
